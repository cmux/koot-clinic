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
require('./apis/deploy')();
