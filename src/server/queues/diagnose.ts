// TODO: 使用 worker

import fs from 'fs-extra';
import path from 'path';
import md5 from 'md5';
import axios from 'axios';
import crawler from 'koot-diagnose/crawler';
import getDistPath from 'koot/utils/get-dist-path';
import { url as siteUrl } from '@constants/app';

// const { parse, stringify } = require('flatted/cjs');

//

interface CrawlObject {
    url: string;
    emails: string[];
}
type queueDo = (firstData: CrawlObject) => {};

//

class Queue {
    funcQueue?: queueDo;

    constructor(funcQueue: queueDo) {
        if (typeof funcQueue === 'function') {
            this.funcQueue = funcQueue;
        }
    }

    data = new Map();
    queue: string[] = [];
    running = false;

    add(url: string, email: string) {
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

    get(url: string) {
        return this.data.get(url) || undefined;
    }

    /** 队列中第一个 URL 对应的数据 */
    get first() {
        return this.get(this.queue[0]);
    }

    remove(url: string) {
        if (this.queue.includes(url))
            this.queue.splice(this.queue.indexOf(url), 1);
        this.data.delete(url);
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.doQueue();
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

/** 分析队列 */
const queue = new Queue(async (d: CrawlObject) => {
    const { url, emails = [] } = d;

    console.log('   Crawler: ' + url);
    const errors = await crawler(url, {
        cluster: {
            maxConcurrency: 5,
            monitor: true,
            puppeteerOptions: {
                args: ['--no-sandbox']
            }
        }
    });

    // 写入文件
    const data = {
        url,
        errors: parse(stringify(errors)),
        emails
    };
    const id = md5(JSON.stringify(data));
    const filename = `${id}.json`;
    const dir = path.resolve(getDistPath(), 'results/crawler/');
    const file = path.resolve(dir, filename);
    await fs.ensureDir(dir);
    await fs.writeJson(file, data, {
        spaces: '\t'
    });
    console.log('✔  Done! Result saved into ' + file);

    // 发送 email
    for (const email of emails) {
        await axios.post('https://uxmail.cmcm.com/sendMail', {
            address: email,
            subject: `站点分析结果: ${url}`,
            content: `访问该地址获取结果:<br/>${siteUrl}/result/${id}`
        });
        console.log('✉ Mail sent to ' + email);
    }

    // 结束
    console.log(' ');
    console.log(' ');

    return;
});
export default queue;
