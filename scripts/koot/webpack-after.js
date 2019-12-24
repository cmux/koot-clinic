/*
 * @Author: your name
 * @Date: 2019-12-23 11:15:35
 * @LastEditTime : 2019-12-23 14:47:18
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/scripts/koot/webpack-after.js
 */
/* eslint-disable no-console */

const fs = require('fs-extra');
const path = require('path');
const forever = require('forever-monitor');
const spawn = require('../libs/spawn');

// ============================================================================

module.exports = async ({ dist }) => {
    dist = path.resolve(dist, '../');
    await modifyDistProd(dist);
    await apiServer(dist);
};

// ============================================================================

const modifyDistProd = async dist => {
    if (process.env.___PROD_DIST_MODIFIED) return;
    if (process.env.WEBPACK_BUILD_STAGE === 'client') return;
    if (process.env.WEBPACK_BUILD_ENV === 'dev') return;

    // 复制 PM2 启动脚本定义 JSON
    await fs.copy(
        path.resolve(__dirname, './dist-files/pm2.json'),
        path.resolve(dist, 'pm2.json')
    );
    // 复制 dockerfile
    await fs.copy(
        path.resolve(__dirname, '../../dockerfile'),
        path.resolve(dist, 'dockerfile')
    );
    // 复制 package.json
    await fs.copy(
        path.resolve(dist, './dist-ssr-server/package.json'),
        path.resolve(dist, 'package.json')
    );
    // 复制 .gitignore
    await fs.copy(
        path.resolve(__dirname, './dist-files/.gitignore'),
        path.resolve(dist, '.gitignore')
    );
    await fs.remove(path.resolve(dist, './dist-ssr-server/package.json'));

    // 修改 package.json scripts
    {
        const file = path.resolve(dist, 'package.json');
        const p = await fs.readJson(file);
        // delete p.dependencies['koot-diagnose']
        p.scripts['start:pm2'] = 'pm2 startOrGracefulReload pm2.json';
        await fs.writeJson(file, p);
    }

    process.env.___PROD_DIST_MODIFIED = true;
};

// ============================================================================

let childProcessApiServer;
const apiServer = async dist => {
    if (process.env.___API_SERVER_PROCESSED) return;
    if (process.env.WEBPACK_BUILD_STAGE === 'client') return;

    const srcApiServer = path.resolve(__dirname, '../../src-api-server');

    if (process.env.WEBPACK_BUILD_ENV === 'prod') {
        const distApiServer = path.resolve(dist, './dist-api-server');

        // 清理 dist 目录中已有的 API 服务器代码
        await fs.remove(distApiServer);

        // 复制 API 服务器代码到 dist 目录
        await fs.copy(srcApiServer, distApiServer);
    }

    // [开发环境] 启动 API 服务器
    if (process.env.WEBPACK_BUILD_ENV === 'dev') {
        // let apiServer=await spawn('nodemon ' + path.resolve(distApiServer, 'run.js')+" --inspect");
        const apiServer = require('child_process').spawn("nodemon", ["--inspect-brk=9229",path.resolve(srcApiServer, 'run.js')], {
            stdio: 'inherit',
            shell: true
        });
        apiServer.on('data', (data) => {
            console.log("data")
        });
        apiServer.on('close', () => {
            console.log("apiserver is close")
        });
        apiServer.on('error', (...args) => {
            console.log("apiserver is error")
        });

        const exitHandler = async (...args) => {
            if (apiServer) {
                console.log('Killing API server...');
                apiServer.kill();
            }
        };
        process.on('exit', exitHandler);
        process.on('SIGINT', exitHandler);
        process.on('SIGUSR1', exitHandler);
        process.on('SIGUSR2', exitHandler);
        process.on('uncaughtException', exitHandler);

    }

    process.env.___API_SERVER_PROCESSED = true;
};
