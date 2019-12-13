/**
 * **服务器端生命周期**
 *
 * _创建 Koa 实例后、挂载任何中间件之前_
 */

import Koa, { DefaultState, ExtendableContext } from 'koa';
import koaBetterHttpProxy from 'koa-better-http-proxy';
import koaMount from 'koa-mount';

import { pathnames } from '@constants/app';
import { port as apiServerPort } from '@srcApiServer/config';

// import mock from './mock';
// import routes from './routes';

export default async (app: Koa): Promise<void> => {
    // if (__DEV__) mock(app);

    // API 代理服务器 =========================================================
    const proxyApiServer = new Koa<
        DefaultState,
        ExtendableContext & { state: {} }
    >();
    proxyApiServer.use(koaBetterHttpProxy(`localhost:${apiServerPort}`, {}));
    proxyApiServer.use(async () => {});
    app.use(koaMount(pathnames.api, proxyApiServer));

    // 挂载路由 ===============================================================
    // app.use(routes);
};
