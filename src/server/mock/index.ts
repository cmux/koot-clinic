/**
 * @module mock部分数据请求
 */

import Koa from 'koa';
import mockData from './mock-data.json';

function mock(app: Koa): void {
    app.use(async (ctx, next) => {
        if (ctx.path === '/api/result') {
            // for (const [key, value] of Object.entries(ctx.request)) {
            //     console.log(key);
            // }
            const { id } = ctx.request.query;
            if (!id) await next();
            else {
                ctx.set('Content-Type', 'application/json');
                ctx.body = mockData;
            }
        } else {
            await next();
        }
    });
}

export default mock;
