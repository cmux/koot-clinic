/* eslint-disable no-console */

const config = require('../config');
const mysql = require('mysql');
const moment = require('moment'); //数据库时间转js时间格式

if (process.env.WEBPACK_BUILD_ENV === 'dev') console.log(config.sql_config);
//// promise
const connection = mysql.createPool(config.sql_config);

// 正常数据库操作
const query = sql => {
    return new Promise((resolve, reject) => {
        connection.getConnection((err, connect) => {
            connect.query(sql, (sqlerr, rows, fields) => {
                // console.log(sqlerr);
                if (err) {
                    console.log(`✖ SQL query error! Query:`);
                    console.log(sqlerr);
                    console.error(err);
                    reject(err);
                    connect.release(); //释放数据库链接
                    return;
                }

                if (!rows) {
                    reject(err);
                    connect.release(); //释放数据库链接
                    return;
                }
                resolve(rows);
                connect.release(); //释放数据库链接
            });
        });
    });
};

// 读取操作
const read = sql => {
    return new Promise((resolve, reject) => {
        query(sql)
            .then(data => {
                // 转换时间；

                if (
                    data &&
                    data.length > 0 &&
                    typeof data[0].time !== 'undefined'
                ) {
                    data = data.map(i => {
                        i.time = moment(i.time).format('YYYY-MM-DD HH:mm:ss');
                        return i;
                    });
                }

                resolve(data);
            })
            .catch(err => {
                reject(new Error('read data error'));
            });
    });
};

// 增加操作
const add = sql => {
    return new Promise((resolve, reject) => {
        const error = new Error('add data error');
        query(sql)
            .then(data => {
                // console.log(110, data);
                if (data.affectedRows > 0) {
                    resolve('ok');
                } else {
                    reject(error);
                }
            })
            .catch(err => {
                console.error(err);
                reject(error);
            });
    });
};

// 修改操作
const put = sql => {
    return new Promise((resolve, reject) => {
        const error = new Error('put data error');
        query(sql)
            .then(data => {
                if (data.affectedRows > 0) {
                    resolve('ok');
                } else {
                    reject(error);
                }
            })
            .catch(err => {
                console.error(err);
                reject(error);
            });
    });
};

// 删除操作
const remove = sql => {
    return new Promise((resolve, reject) => {
        const error = new Error('remove data error');
        query(sql)
            .then(data => {
                if (data.affectedRows > 0) {
                    resolve('ok');
                } else {
                    reject(error);
                }
            })
            .catch(err => {
                console.error(err);
                reject(error);
            });
    });
};

// 检索判断数据库是否有此值(有值为false)
const searchHandle = sql => {
    return new Promise((resolve, reject) => {
        query(sql)
            .then(data => {
                // 转换时间；
                if (data.length > 0) {
                    reject('有值');
                } else {
                    resolve('无值');
                }
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
};

// 检索判断数据库是否有此值(有值为true)
const searchHandleNormal = sql => {
    return new Promise((resolve, reject) => {
        query(sql)
            .then(data => {
                // 转换时间；
                if (data.length > 0) {
                    resolve('有值');
                } else {
                    reject('无值');
                }
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
};

// 检索判断数据库是否有此值(无论有无值都是返回length长度)
const searchTest = sql => {
    return new Promise((resolve, reject) => {
        query(sql)
            .then(data => {
                resolve(data.length);
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
};

/**
 * 确保数据表存在。如果不存在，创建
 * @async
 * @param {string} tableName
 * @return {Promise<void>}
 */
const ensureTable = tableName => {
    const columns = {
        DEFAULT: [
            ['id', 'varchar(255) NOT NULL'],
            ['urlKey', 'varchar(255) NOT NULL'],
            ['everyQueryKey', 'varchar(255) NOT NULL']
        ],
        DEFAULT_LAST: [['createTime', 'datetime NOT NULL']],
        psi: [
            ['result', 'longtext'],
            ['url', 'varchar(255) NOT NULL']
        ]
    };
    return new Promise((resolve, reject) => {
        // if (!columns[tableName])
        //     return reject(new Error(`NO TABLE FOUND: ${tableName}`));

        const sql =
            `CREATE TABLE IF NOT EXISTS \`${tableName}\` (` +
            [
                ...columns.DEFAULT,
                ...(columns[tableName] || []),
                ...columns.DEFAULT_LAST
            ]
                .map(([key, prop]) => `\`${key}\` ${prop}`)
                .join(',    ') +
            `,` +
            `    PRIMARY KEY (\`id\`),` +
            `    UNIQUE KEY \`id_UNIQUE\` (\`id\`)` +
            `) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`;

        query(sql)
            .then(data => {
                resolve(data.length);
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
};

module.exports = {
    read,
    add,
    put,
    remove,
    searchHandle,
    searchHandleNormal,
    searchTest,
    query,
    ensureTable
};
