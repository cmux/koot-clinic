const addAPI = require('../utils/add-api');
const creatTime = require('../utils/creatTime.js');
const path = require('path');
// const getDistPath = require('koot/utils/get-dist-path');

// ============================================================================
const { read, add, put, remove, query } = require('../utils/db_connect');
const Url = require('url');

const otplib = require('otplib');
const qrcode = require('qrcode');


module.exports = () => {
    // 部署页面
    addAPI('get', '/deploy', async ctx => {
        await ctx.render('index', {
            title: '部署'
        });
    });

    //生成新的秘钥

    addAPI('get', '/newSecret', async ctx => {
        const secret = otplib.authenticator.generateSecret();
        const sql = `insert into secret(secret,createTime) values('${secret}','${creatTime()}')`;
        console.log(sql);
        await add(sql);

        ctx.body = {
            code: 200,
            msg: 'has create new secret'
        };
    });

    //获取二维码

    addAPI('get', '/qrcode', async ctx => {
        const user = 'chenyuanguang, chenyuanguang@cmcm.com';
        const service = 'koot-clinic';

        const secrets = await read(
            `select * from secret order by createTime desc`
        );
        console.log(secrets);
        const secret = secrets.length != 0 ? secrets[0].secret : '';
        console.log(secret);

        const otpauth = otplib.authenticator.keyuri(user, service, secret);
        const imageUrl = await new Promise((resolve, reject) => {
            qrcode.toDataURL(otpauth, (err, imageUrl) => {
                if (err) {
                    reject(err);
                    console.log('Error with QR');
                    return;
                }
                console.log(imageUrl);
                resolve(imageUrl);
            });
        });

        await ctx.render('qrcode', { imageUrl });
    });

    // 部署接口
    addAPI('get', '/deployapi', async ctx => {
        const { password } = ctx.query;
        const secrets = await read(
            'select * from secret order by createTime desc'
        );
        let secret = null;
        if (secrets.length === 0) {
            secret = otplib.authenticator.generateSecret();
            await add(
                `insert into secret(secret,createTime) values('${secret}','${creatTime()}')`
            );
        } else {
            secret = secrets[0].secret;
        }
        const isValid = otplib.authenticator.check(password, secret);
        console.log(isValid);
        if (isValid) {
            // const data=await runDeploy();
            ctx.body = {
                code: 200,
                msg: 'deploy is start',
                data:data
            };
            runDeploy()
            function runDeploy() {
                return new Promise((resolve, reject) => {
                    const child = require('child_process').spawn(
                        'sh',
                        [path.resolve(__dirname, '../../sh/test.sh')],
                        {
                            stdio: 'inherit',
                            shell: true
                        }
                    );

                    child.on('message', (err, data) => {
                        console.log(err, data);
                        // resolve(err,data)
                    });
                    child.on('close', () => {
                        console.log('over');
                        resolve("over");
                    });
                    child.on("error",(err)=>{
                        resolve("err",err)

                        // require('child_process').spawn(
                        //     'sh',
                        //     [path.resolve(__dirname, '../../sh/docker.sh')],
                        //     {
                        //         stdio: 'inherit',
                        //         shell: true
                        //     }
                        // );
                    })
                });
            }
            
        } else {
            ctx.body = {
                code: 200,
                msg: 'secret is err'
            };
        }
    });
};
