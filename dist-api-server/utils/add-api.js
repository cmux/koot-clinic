/*
 * @Author: your name
 * @Date: 2019-11-07 16:47:39
 * @LastEditTime: 2019-12-13 15:42:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src-api-server/utils/add-api.js
 */
const koaBody = require('koa-body');
const router = require('../router');

// ============================================================================

/**
 * 添加 API
 * - 会默认经过 koa-body 封装
 * @param {string} method
 * @param {string} uri
 * @param {Function} func
 * @void
 */
const addAPI = (method, uri, func) => {
    if (method === 'post') {
        addAPI('options', uri, async ctx => {
            ctx.set('Access-Control-Allow-Origin', ctx.origin);
        });
    }
    router[method](
        uri,
        koaBody({
            multipart: true
        }),
        async (ctx, next) => {
            if (process.env.WEBPACK_BUILD_ENV === 'dev') {
                ctx.set('Access-Control-Allow-Origin', '*');
                ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
            }
            try {
                await func(ctx, next);
            } catch (e) {
                ctx.status = 500;
                ctx.body = e ? e.message : '';
                console.error(e);
            }
        }
    );
};

module.exports = addAPI;
