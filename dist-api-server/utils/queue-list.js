/*
 * @Author: chenyuanguang
 * @Date: 2019-12-13 12:57:24
 * @LastEditTime : 2019-12-23 14:20:01
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/utils/queue-list.js
 */
const { read, add, query } = require('./db_connect');
const Unique = require('./Unique');

module.exports = {
    async addQueueUrl({ url = '', emails = '' }) {
        const sql = `insert into queueList(id,url,emails,status) values('${Unique()}','${url}','${JSON.stringify(
            emails
        )}',0)`;
        console.log(sql);
        await add(sql);
    },
    async getQueueByUrl(url) {
        const sql = `select * from queueList where url='${url}'`;
        const result = await read(sql);
        if (result.length > 0) {
            result[0].emails = JSON.parse(result[0].emails);
            return result[0];
        } else {
            return undefined;
        }
    },
    async updateQueueByUrl(url, data) {
        const sql = `update queueList set emails=${JSON.stringify(
            data.emails
        )} where url='${url}'`;
        return await query(sql);
    },
    async getQueueOne() {
        const sql = `select * from queueList`;
        const result = await read(sql);
        if (result.length > 0) {
            result[0].emails = JSON.parse(result[0].emails);
            return result[0];
        } else {
            return undefined;
        }
    },

    async updateQueue(type) {
        const sql = `update queueList set status=${type}`;
        return await query(sql);
    },
    async removeQueue(id) {
        const sql = `delete from queueList where id='${id}'`;
        return query(sql);
    }
};
