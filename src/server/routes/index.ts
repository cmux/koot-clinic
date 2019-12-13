import koaRouter, { RouterContext } from 'koa-router';
import fs from 'fs-extra';
import path from 'path';
import getDistPath from 'koot/utils/get-dist-path';

import addToDiagnoseQueue from '../api/add-to-diagnose-queue';

/** 服务器路由对象 (koa-router) */
export const router = new koaRouter();

/** 服务器路由表 */
export default router.routes();

// ----------------------------------------------------------------------------

type Method = 'get' | 'post';

/** 添加 API */
const addAPI = (
    method: Method,
    url: string,
    func: koaRouter.IMiddleware
): void => {
    router[method](url, async (ctx: RouterContext, next) => {
        ctx.set('Access-Control-Allow-Origin', __DEV__ ? '*' : __DOMAIN__);
        try {
            await func(ctx, next);
        } catch (e) {
            ctx.status = 500;
            ctx.body = e.message;
        }
    });
};

// ----------------------------------------------------------------------------

addAPI('get', '/api/test', async ctx => {
    ctx.body = '测试';
});
addAPI('get', '/api/diagnose', async ctx => {
    const result = await addToDiagnoseQueue(ctx.query.url, ctx.query.email);
    ctx.body = result;
});

addAPI('get', '/api/result', async ctx => {
    const { id } = ctx.query;
    if (!id) throw new Error('MISSING_PARAMETER: id');

    const filename = `${id}.json`;
    const dir = path.resolve(getDistPath(), 'results/crawler/');
    const file = path.resolve(dir, filename);

    if (!fs.existsSync(file)) ctx.body = {};
    else {
        ctx.body = await fs.readJson(file);
    }
});
