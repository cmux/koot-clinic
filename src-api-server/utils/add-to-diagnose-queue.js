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
    queue.add(_url.href, email);

    // * 如果分析进程没有启动，在此启动
    queue.start();

    return {
        result: true,
        timestamp: Date.now()
    };
};

module.exports = queueWebapp;
