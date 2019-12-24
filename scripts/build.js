/* eslint-disable no-console */

/**
 * This script is a replacement for _Koot.js_'s default `build` command.
 */

const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const prettyMilliseconds = require('pretty-ms');
const spinner = require('koot/utils/spinner');

const spawn = require('./libs/spawn');
const { dist: distWebServer } = require('../koot.config');

const repo = 'git@github.com:cmux/koot-clinic.git';
const branchDist = 'dist';

// ============================================================================
(async () => {
    const timeStart = Date.now();

    console.log('\n ');
    console.log('  🚀 打包并提交生产环境代码');

    const pathnameDist = path.resolve(distWebServer, '..');

    // * 准备 dist 目录
    {
        const msg = '📁 准备本地打包目录';
        const waiting = spinner(`${msg}...`);

        // * 确保 dist 目录为 git 仓库的 dist branch
        if (!fs.existsSync(path.resolve(pathnameDist, '.git'))) {
            // * 清空目录
            await fs.remove(pathnameDist);
            await fs.ensureDir(pathnameDist);
            waiting.stop();
            console.log(`  ${msg}`);
            // * git clone
            await spawn(
                `git clone ${repo} --branch ${branchDist} --single-branch ${pathnameDist}`
            );
        }

        /** simple-git 操作实例 */
        const git = require('simple-git/promise')(pathnameDist);

        /** @type {Boolean} 是否有 git repo 操作权限 */
        const hasGitAccess = await (async () => {
            let err;

            git.silent(true);

            await git.push('origin', 'master').catch(e => {
                err = e;
            });

            git.silent(false);

            if (err instanceof Error) err = err.message;
            if (typeof err === 'string')
                return !/permission.+denied/i.test(err);

            return true;
        })();

        // * 如果没有权限，报错
        if (!hasGitAccess) {
            waiting.fail('No permission for git repo');
            return;
        }

        // * 重置 dist 内的所有提交
        await git.reset('hard');
        await git.clean('f');

        // * 拉取最新代码
        await git.pull();

        waiting.stop();
        spinner(msg).succeed();
    }

    // * 执行 koot-build
    console.log('  🔩 即将开始打包流程...');
    await spawn('koot-build', {
        cwd: path.resolve(__dirname, '..')
    });

    // * 询问是否提交本次结果
    const { answer } = await inquirer.prompt({
        type: 'confirm',
        name: 'answer',
        message: '是否提交本次打包结果',
        default: true
    });
    if (answer) {
        const msg = '🔗 执行 git commit & push';
        const waiting = spinner(`${msg}...`);
        const git = require('simple-git/promise')(pathnameDist);
        await git.add('./*');
        await git.commit(`Build ${new Date().toLocaleString()} (Local time)`);
        // await git.push('origin', branchDist);
        waiting.stop();
        // spinner(msg).succeed();
        console.log(`  ${msg}`);
        // * git clone
        await spawn(`git push origin ${branchDist}`, {
            cwd: pathnameDist
        });
    }

    // * DONE!
    console.log('\n ');
    spinner(
        `完成 (用时 ${prettyMilliseconds(Date.now() - timeStart)})`
    ).succeed();
    console.log('\n ');
})().catch(err => {
    spinner(' ').fail();
    console.error(err);
});
