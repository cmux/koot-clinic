import routeCheck from 'koot/React/route-check';

import { pathnames } from '@constants/app';

import App from '@views/app';
import ViewSubmit from '@views/submit';

/**
 * @type {Object} 路由配置对象
 * 原则上支持任何与 `react-router` (v3) 兼容的对象
 * - 可使用 koot-router 提供的方法封装路由配置对象
 */
const routes = {
    path: '/',
    component: App, // 项目的根层组件

    indexRoute: {
        /**
         * 标准写法: 打包后，该组件会存在于核心包中
         * - 推荐小型项目或大型项目的小型页面使用
         */
        component: ViewSubmit

        /**
         * 代码分割写法: 打包后，该组件会存在于独立的 .js 文件中
         * - 推荐大型项目使用
         * - 推荐使用 koot 提供的 `routeCheck()` 方法保证路由组件的正确渲染 (详情请查阅文档)
         */
        // getComponent: (nextState, cb) => {
        //     import(
        //         /* webpackChunkName: "PageHome" */
        //         '@views/home'
        //     ).then(module => {
        //         if (routeCheck(nextState)) cb(null, module.default);
        //     });
        // }
    },

    childRoutes: [
        // {
        //     path: 'result/:resultId',
        //     getComponent: (nextState, cb) => {
        //         import(
        //             /* webpackChunkName: "PageStart" */
        //             '@views/result-old'
        //         ).then(module => {
        //             if (routeCheck(nextState)) cb(null, module.default);
        //         });
        //     }
        // },
        // {
        //     path: 'result/:resultId/:type',
        //     getComponent: (nextState, cb) => {
        //         import(
        //             /* webpackChunkName: "PageStart" */
        //             '@views/result-old'
        //         ).then(module => {
        //             if (routeCheck(nextState)) cb(null, module.default);
        //         });
        //     }
        // },
        {
            path: `${pathnames.result.substr(1)}/:resultId`,
            getComponent: (nextState, cb) => {
                import(
                    /* webpackChunkName: "PageResult" */
                    '@views/result'
                ).then(module => {
                    if (routeCheck(nextState)) cb(null, module.default);
                });
            },
            childRoutes: [
                {
                    path: ':tab'
                }
            ]
        }
    ]
};

if (__DEV__) {
    routes.childRoutes.push({
        path: '__dev-test-api',
        getComponent: (nextState, cb) => {
            import('@views/dev-test-api').then(module => {
                if (routeCheck(nextState)) cb(null, module.default);
            });
        }
    });
}

export default routes;
