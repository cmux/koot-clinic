/*
 * @Author: your name
 * @Date: 2019-11-07 16:47:39
 * @LastEditTime : 2019-12-23 11:53:43
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/scripts/libs/spawn.js
 */
const spinner = require('koot/utils/spinner');

const spawn = async (cmd, options = {}) => {
    const chunks = cmd.split(' ');
    await new Promise((resolve, reject) => {
        const child = require('child_process').spawn(chunks.shift(), chunks, {
            stdio: 'inherit',
            shell: true,
            ...options
        });
        child.on('close', () => {
            resolve();
        });
        child.on('error', (...args) => {
            reject(...args);
        });
    }).catch(e => {
        spinner(cmd).fail();
        console.error(e);
    });
};

module.exports = spawn;
