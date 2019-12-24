/* eslint-disable no-console */
const addAPI = require('../utils/add-api');
const addToDiagnoseQueue = require('../utils/add-to-diagnose-queue');

const { getDate } = require('../utils/tools');
// ============================================================================
const { read } = require('../utils/db_connect');

const queryNote = id => {
    const errorTypes = [
        ['broken request', 'brokenRequest'],
        ['common error', 'commonError'],
        ['console error', 'consoleError'],
        ['large file', 'largeFile'],
        ['no gzip', 'noGzip']
    ];

    return Promise.all(
        errorTypes.map(([_, errorId]) =>
            read(`select * from ${errorId} where everyQueryKey='${id}'`)
        )
    ).then(data =>
        data.reduce((obj, data, index) => {
            obj[errorTypes[index][0]] = data;
            return obj;
        }, {})
    );
};

const queryPsi = queryKey => {
    if (!queryKey) throw new Error('NO QUERY KEY');
    return read(`select * from psi where everyQueryKey='${queryKey}'`).then(
        data => {
            const r = Array.isArray(data) ? data[0] : data;
            if (!r) return undefined;
            return JSON.parse(decodeURIComponent(r.result) || `{}`);
        }
    );
};

module.exports = () => {
    //诊断接口
    addAPI('get', '/diagnose', async ctx => {
        // let {host,protocol}=Url.parse(ctx.query.url)
        // console.log(Url.parse(ctx.query.url))
        // if(!protocol){
        //     ctx.body={
        //         result:'error url is not illegal',
        //         timestamp:Date.now()
        //     }
        //     return
        // }
        // let url=protocol+"//"+host
        // console.log(url)
        const url = ctx.query.url;

        const result = await addToDiagnoseQueue(url, ctx.query.email);

        ctx.body = result;
    });
    //获取网页诊断结果
    addAPI('get', '/result', async ctx => {
        const { id: everyQueryKey } = ctx.query;

        console.log({ everyQueryKey });

        if (!everyQueryKey) throw new Error('MISSING_PARAMETER: id');

        const errors = await queryNote(everyQueryKey);
        const psiResult = await queryPsi(everyQueryKey);
        const urlMsg = await read(
            `select * from clinic where everyQueryKey='${everyQueryKey}'`
        );

        const result = {
            emails: [urlMsg[0] ? urlMsg[0].email : ''],
            errors,
            psi: psiResult,
            url: urlMsg[0] ? urlMsg[0].url : ''
        };

        ctx.body = await JSON.stringify(result);
    });
    // 获取当前域名下所有的查询地址，返回每条地址的最新诊断结果
    // addAPI('get', '/urlPath', async ctx => {
    //     const { url } = ctx.query;
    //     console.log(`select * from clinic where url like '%${url}%'`);
    //     const queryId = await read(
    //         `select * from clinic where url like '%${url}%' order by createTime desc`
    //     );
    //     console.log(queryId);
    //     const arr = queryId.reduce((pre, cur) => {
    //         const state = pre.some(item => item.urlKey == cur.urlKey);
    //         return state ? pre : [...pre, cur];
    //     }, []);
    //     console.log(arr);
    //     const result = [];
    //     for (const i of arr) {
    //         const res = { errors: await queryNote(i.everyQueryKey), clinic: i };
    //         result.push(res);
    //     }

    //     ctx.body = result;
    // });
    // 获取当前域名的历史记录
    addAPI('get', '/urlHistory', async ctx => {
        const { url } = ctx.query;

        console.log(`select * from clinic where url like '%${url}%'`);
        const queryIds = await read(
            `select * from clinic where url like '%${url}%' order by createTime desc`
        );
        console.log(queryIds);
        const arr = queryIds.reduce((pre, cur) => {
            const state = pre.some(
                item => item.everyQueryKey === cur.everyQueryKey
            );
            return state ? pre : [...pre, cur];
        }, []);

        const result = [];
        for (const i of arr) {
            const res = { errors: await queryNote(i.everyQueryKey), clinic: i };
            result.push(res);
        }

        ctx.body = {
            domain: url,
            results: result,
            nextScheduledTimestamp: getDate(7).getTime()
        };
    });
};
