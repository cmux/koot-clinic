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
                ctx.body = e.message;
                console.error(e);
            }
        }
    );
};

module.exports = addAPI;
