/* eslint-disable no-console */
// TODO: 使用 worker

const axios = require('axios');
const crawler = require('koot-diagnose/crawler');
const psi = require('koot-diagnose/psi');
// const getDistPath = require('koot/utils/get-dist-path');
const { url, autoTaskTime, page_speed_api_key } = require('../config');
const { parse, stringify } = require('flatted/cjs');
const { save } = require('../utils/result-to-mysql');

const { read, add } = require('./db_connect');
const creatTime = require('./creatTime.js');
const Unique = require('./Unique.js');

/** Clinic 站点的网址 */
const siteUrl = url;

// ============================================================================

class Queue {
    constructor(funcQueue) {
        if (typeof funcQueue === 'function') {
            this.funcQueue = funcQueue;
        }
    }

    data = new Map();
    queue = [];
    running = false;

    add(url, email) {
        //检测map中是否有当前url的数据，如果有，获取数据进行对象合并
        const dataExist = this.get(url) || {};
        const data = {
            emails: [],
            ...dataExist,
            url
        };
        //如果map数据结构中emials中无当前email，将当前email添加至data.emails，重新设置当前url在map中的值
        if (!data.emails.includes(email)) {
            data.emails.push(email);

            this.data.set(url, data);
        }
        //如果队列中无当前url，将当前url添加到队列中
        if (!this.queue.includes(url)) this.queue.push(url);
    }

    get(url) {
        return this.data.get(url) || undefined;
    }

    /** 队列中第一个 URL 对应的数据 */
    get first() {
        return this.get(this.queue[0]);
    }

    remove(url) {
        if (this.queue.includes(url))
            this.queue.splice(this.queue.indexOf(url), 1);
        this.data.delete(url);
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.doQueue().catch(e => {
            this.running = false;
            console.error(e);
        });
    }

    async doQueue() {
        if (!this.queue.length) {
            this.running = false;
            return true;
        }

        console.log(`‼  Current items in queue: ${this.queue.length}`);

        if (typeof this.funcQueue === 'function') {
            await this.funcQueue(this.first);
            this.remove(this.queue[0]);

            if (!this.queue.length) {
                this.running = false;
                console.log('NO QUEUE. IDLE');
                return true;
            }

            await this.doQueue();
        } else {
            this.running = false;
            return true;
        }
    }
}

/** 向目标邮箱发送诊断成功 Email */
const sendEmail = async (emails, url, everyQueryKey) => {
    // 发送 email
    for (const email of emails) {
        console.log(email);
        try {
            await axios.post('https://uxmail.cmcm.com/sendMail', {
                address: email,
                subject: `站点分析结果: ${url}`,
                content: `访问该地址获取结果:<br/>${siteUrl}/result/${everyQueryKey}`
            });
            console.log('✉ Email sent to ' + email);
        } catch (error) {
            console.log(error);
        }
    }
};

/** 将 Email 地址存储到数据库中 */
const saveEmail = async (emails, url, urlKey, everyQueryKey) => {
    //存储email
    for (const email of emails) {
        const addSql = `insert into clinic(id,urlKey,everyQueryKey,email,url,createTime) values('${Unique()}','${urlKey}','${everyQueryKey}','${email}','${url}','${creatTime()}')`;
        await add(addSql);
    }
    console.log(`✔ save over`);
    return;
};

/** 执行 crawler 检测 */
const crawlers = async url => {
    const puppeteerOptions = {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage'
        ]
    };
    if (process.env.WEBPACK_BUILD_ENV !== 'dev') {
        // 生产服务器上的 Chrome
        puppeteerOptions.executablePath = '/usr/bin/chromium-browser';
    }
    const errors = await crawler(url, {
        cluster: {
            maxConcurrency: 5,
            monitor: true,
            puppeteerOptions
        }
    });
    return errors;
};

/** 创建诊断队列 */
const queue = new Queue(async d => {
    const { url, emails = [] } = d;
    const allErrors = [];

    const logErrors = () => {
        if (allErrors.length) {
            console.log('\n');
            console.log('Errors '.padEnd(50 - 7, '='));
            for (const e of allErrors) {
                console.log('\n');
                console.error(e);
            }
            console.log(''.padEnd(50, '='));
        }
    };

    //按域名进行查询
    // let { url:originUrl, emails = [] } = d;
    // originUrl=serialize(originUrl)
    // let {protocol,host}=Url.parse(originUrl)
    // console.log('   originCrawler: ' + originUrl);
    // let url=protocol+"//"+host
    // console.log('   Crawler: ' + url);

    // 获取目标地址的域 ==========================================================
    const { origin } = new URL(url);

    // 判断目标地址是否已被诊断过 =================================================
    const queryUrl = `select * from clinic where url='${url}' order by createTime desc`;
    const readResult = await read(queryUrl);
    console.log(1000000, readResult);
    let { createTime } = readResult.length > 0 ? readResult[0] : {};

    const currentTime = new Date().getTime();

    createTime =
        createTime != null && typeof createTime != 'undefined'
            ? createTime
            : currentTime;

    const mistiming =
        currentTime - createTime < 1000 * 60 * 60 * 24 * autoTaskTime;
    // const mistiming = currentTime - createTime < 1000 * 60 ;

    // 如果存在诊断记录且未过期 (计划任务未开始) ====================================
    if (readResult.length > 0 && mistiming) {
        console.log(
            `✔ Scheduled for target (${url}). No need to start diagnose. Sending email...`
        );
        const { urlKey, everyQueryKey } = readResult[0];
        await saveEmail(emails, url, urlKey, everyQueryKey);
        await sendEmail(emails, url, everyQueryKey).catch(e => {
            console.log(`✖ Sending email failed! See below for error details.`);
            allErrors.push(e);
        });

        logErrors();

        return;
    }

    /** 开始诊断流程 */
    const doDiagnose = async urlKey => {
        const everyQueryKey = Unique();
        await saveEmail(emails, url, urlKey, everyQueryKey);

        const errors = await crawlers(url);
        const psiResult = await psi(origin, page_speed_api_key, {
            category: ['performance', 'best-practices', 'seo'],
            locale: 'zh-CN'
        });
        const psiError =
            typeof psiResult.error === 'object'
                ? `[${psiResult.error.code}] ${psiResult.error.message}`
                : false;

        if (process.env.WEBPACK_BUILD_ENV === 'dev')
            console.log(`PSI -> ${origin}`, psiResult);

        if (psiError) console.log(`❌ PSI Error -> ${origin} : ${psiError}`);

        await save({
            url,
            errors: parse(stringify(errors)),
            emails,
            urlKey,
            everyQueryKey,
            psiResult: psiError ? undefined : psiResult,
            origin
        }).catch(e => {
            console.log(
                `✖ Diagnose process failed! See below for error details.`
            );
            allErrors.push(e);
        });
        console.log(
            `✔ Target (${url}) has been diagnosed. Result saved to DataBase. Sending email...`
        );
        await sendEmail(emails, url, everyQueryKey).catch(e => {
            console.log(`✖ Sending email failed! See below for error details.`);
            allErrors.push(e);
        });

        logErrors();
    };

    // 如果存在诊断记录且已过期 (计划任务需要执行) ==================================
    if (readResult.length > 0) {
        console.log(`↪ Target (${url}) schedule expired! Starting diagnose...`);
        await doDiagnose(readResult[0].urlKey);
        return;
    }

    // 没有诊断记录
    console.log(`🆕 Target (${url}) is new! Starting diagnose...`);
    await doDiagnose(Unique());

    // 结束
    console.log(' ');
    console.log(' ');

    return;
});
module.exports = queue;
