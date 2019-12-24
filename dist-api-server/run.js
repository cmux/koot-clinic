/*
 * @Author: your name
 * @Date: 2019-12-23 11:15:41
 * @LastEditTime : 2019-12-23 15:16:11
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/run.js
 */
/* eslint-disable no-console */

const Koa = require('koa');
const chalk = require('chalk');

const { port } = require('./config');
const router = require('./router');
const task = require('./utils/task');
// const views = require('koa-views');
const render = require('koa-ejs');
const path = require('path');
const queue = require('./utils/diagnose');
const {put}=require("./utils/db_connect")
// ============================================================================

/** 启动 API 服务器 */
const run = async () => {
    const app = new Koa();
    // app.use(views(path.resolve(__dirname,'./views'), {
    //     html: 'underscore'
    // }));

    render(app, {
        root: path.join(__dirname, 'views'),
        layout: false,
        viewExt: 'html',
        cache: false,
        debug: true
    });

    //自动任务启动
    task.start();
    // 更新任务队列
    try {
        await put(`update queueList set status='0'`)
    } catch (error) {
    }
    
    // 未完成任务启动
    queue.start()

    app.use(router.routes());

    app.listen(port);

    console.log(' ');
    console.log(`${chalk.greenBright('√')} API Server listening port ${port}`);
    console.log(' ');
};

run();

// ============================================================================

module.exports = run;
