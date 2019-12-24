/*
 * @Author: your name
 * @Date: 2019-11-07 16:47:39
 * @LastEditTime : 2019-12-23 12:10:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/utils/add-to-diagnose-queue.js
 */
const queue = require('./diagnose');
/**
 * 登记 URL，添加到分析队列
 */
const queueWebapp = async (url, email) => {
    // * 创建 URL 对象
    const _url = new URL(url);

    // * 检查 URL 是否合法
    if (!_url.href) throw new Error('INVALID_URL');
    // * 添加到队列
    await queue.add(_url.href, email);

    // * 如果分析进程没有启动，在此启动
    queue.start();

    return {
        result: true,
        timestamp: Date.now()
    };
};

module.exports = queueWebapp;
