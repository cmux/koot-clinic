/* eslint-disable no-console */

/**
 * This script is a replacement for _Koot.js_'s default dev command.
 */

const inquirer = require('inquirer');
const fs = require('fs-extra');
const { getNodeArg } = require('../src-api-server/utils/tools');
/**
 * _spawn_ a command. Logging all messages.
 * @async
 * @param {String} cmd command
 */
const runScript = async cmd => {
    const chunks = cmd.split(' ');

    await new Promise(resolve => {
        const child = require('child_process').spawn(chunks.shift(), chunks, {
            stdio: 'inherit',
            shell: true
        });
        child.on('close', () => {
            resolve();
        });
    });
};

(async () => {
    // await fs.writeJson('./sh/sqlConfig.json', {
    //     user: getNodeArg(process.argv,"user"),
    //     password: getNodeArg(process.argv,"password"),
    //     port: getNodeArg(process.argv,"port")
    // })

    const { cmd } = await inquirer.prompt({
        type: 'list',
        name: 'cmd',
        message: 'Select development environment type',
        default: 0,
        choices: [
            new inquirer.Separator(),
            {
                name: 'Full environment',
                value: 'koot-dev ',
                short: 'Full'
            },
            {
                name: 'Full environment (Donnot auto-open page)',
                value: 'koot-dev --no-open',
                short: 'Full (Donnot auto-open page)'
            },
            new inquirer.Separator(),
            {
                name: 'Start only API server',
                value:
                    'cross-env WEBPACK_BUILD_ENV=dev node ./src-api-server/run.js',
                short: 'Only API server'
            }
        ]
    });

    console.log('💥 Koot.js starting dev...');
    await runScript(cmd);
})();
