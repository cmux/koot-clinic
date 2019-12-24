/*
 * @Author: your name
 * @Date: 2019-11-07 16:47:39
 * @LastEditTime : 2019-12-24 11:22:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/router.js
 */
/**
 * @module koa服务器路由配置
 */

const koaRouter = require('koa-router');

// ============================================================================

const router = new koaRouter();
module.exports = router;

// 添加路由 ====================================================================

require('./apis/test')();
require('./apis/diagnose')();
