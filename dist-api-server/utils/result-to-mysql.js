/*
 * @Author: your name
 * @Date: 2019-12-13 11:30:31
 * @LastEditTime : 2019-12-23 15:22:37
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/utils/result-to-mysql.js
 */
/* eslint-disable no-console */
const { add, ensureTable } = require('./db_connect');

const creatTime = require('./creatTime.js');
const Unique = require('./Unique.js');

const getKey = keys => {
    return keys.reduce((pre, cur, index) => {
        return pre + cur + ',';
    }, '');
};
const getVal = (keys, item) => {
    return keys.reduce((pre, cur, index) => {
        let value = item[cur];
        if (typeof value === 'string') {
            if (cur === 'url') {
                value = `'${value.substr(0, 200).replace(/'/g, "＇")}'`;
            } else {
                value = `'${value.replace(/'/g, "＇")}'`;
            }
        }

        return pre + value + ',';
    }, '');
};
const saveToTable = async (results, table, keys, urlKey, everyQueryKey) => {
    await ensureTable(table);

    switch (table) {
        case 'psi': {
            results = results || {};
            const origin = keys;
            const saveSql =
                `insert into ${table}` +
                `(id,urlKey,everyQueryKey,result,url,createTime) ` +
                `values('${Unique()}','${urlKey}','${everyQueryKey}',"${encodeURIComponent(
                    JSON.stringify(results)
                )}",'${origin}','${creatTime()}')`;
            // console.log(saveSql);
            await add(saveSql);
            return;
        }
        default: {
            results = results ? results : [];
            for (const result of results) {
                const key = getKey(keys);
                const val = getVal(keys, result);
                const id = Unique();
                const saveSql = `insert into ${table}(id,urlKey,everyQueryKey,${key}createTime) values('${id}','${urlKey}','${everyQueryKey}',${val}'${creatTime()}')`;
                // console.log(saveSql);
                await add(saveSql);
            }
        }
    }
};
module.exports = {
    async save(data = {}) {
        const { urlKey, everyQueryKey, psiResult, origin } = data;
        await saveToTable(
            data.errors['broken request'],
            'brokenRequest',
            ['message', 'type', 'url'],
            urlKey,
            everyQueryKey
        );
        await saveToTable(
            data.errors['common error'],
            'commonError',
            ['message', 'type'],
            urlKey,
            everyQueryKey
        );
        await saveToTable(
            data.errors['console error'],
            'consoleError',
            ['message', 'type', 'url'],
            urlKey,
            everyQueryKey
        );
        await saveToTable(
            data.errors['large file'],
            'largeFile',
            ['contentLength', 'message', 'pageUrl', 'threshold', 'type', 'url'],
            urlKey,
            everyQueryKey
        );
        await saveToTable(
            data.errors['no gzip'],
            'noGzip',
            ['contentLength', 'message', 'type', 'url'],
            urlKey,
            everyQueryKey
        );

        if (typeof psiResult === 'object') {
            await saveToTable(psiResult, 'psi', origin, urlKey, everyQueryKey);
        }
    }
};
