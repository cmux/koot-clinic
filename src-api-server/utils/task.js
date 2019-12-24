/*
 * @Author: chenyuanguang@cmcm.com
 * @Date: 2019-11-08 16:47:28
 * @LastEditTime: 2019-12-13 12:15:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/utils/task.js
 */
const { read, add, put, remove, query } = require('../utils/db_connect');
const { getDate } = require('./tools');
const queue = require('./diagnose');
const { autoTaskTime } = require('../config');
/**
 * @description: 找出应该重新诊断的队列
 * @param {type}
 * @return:
 */

const getQueue = async () => {
    const queryIds = await read(
        `select * from clinic order by createTime desc`
    );
    const curTime = getDate(0 - autoTaskTime).getTime();
    const arr = queryIds.reduce((pre, cur) => {
        const state = pre.every(item => item.urlKey !== cur.urlKey);
        if (state) {
            pre.push(cur);
        }
        return pre.filter(cur => curTime > new Date(cur.createTime).getTime());
    }, []);

    console.log('===========get Queur url=============');

    return arr;
};

const task = () => {
    let time;
    const stop = () => {
        clearInterval(time);
    };
    const run = async () => {
        const queueList = await getQueue();
        console.log(queueList);

        queueList.forEach(element => {
            const { url, email } = element;
            // * 添加到队列
            queue.add(url, email);
        });
        queue.start();
    };

    //任务条件
    const goList = curDay => {
        const cur = new Date();
        const hour = cur.getHours();
        const day = cur.getDate();
        //每天只限查询一次
        if (curDay === day) {
            return day;
        }
        //在凌晨0点到6点允许执行
        if (hour >= 0 && hour <= 6) {
            run();
            console.log('===========auto task is runing=============');
            return day;
        }
    };
    const start = () => {
        let curDay = null;
        // 默认30分钟检查一次
        time = setInterval(() => {
            curDay = goList(curDay);
            console.log('===========auto task is testTime=============');
        }, 1000 * 60 * 30);

        console.log('===========auto task is run=============');
    };
    return {
        stop,
        start
    };
};

module.exports = task();
