const fs = require('fs-extra');
const path = require('path');

// ============================================================================

const url =
    process.env.WEBPACK_BUILD_ENV === 'dev'
        ? `http://127.0.0.1:3088`
        : `http://clinic.cmcm.com`;

const { sql_config, page_speed_api_key } = fs.readJsonSync(
    path.resolve(
        __dirname,
        '../sh',
        `secret.${
            process.env.WEBPACK_BUILD_ENV === 'dev' ? 'dev' : 'prod'
        }.json`
    )
);

module.exports = {
    /** Koot Clinic 域名 */
    url,

    /** API 服务器端口 */
    port:
        process.env.KOOT_CLINIC_API_SERVER_PORT ||
        (process.env.WEBPACK_BUILD_ENV === 'dev'
            ? 3089 // 开发环境
            : 8081), // 生产环境

    /** SQL 服务器相关设置 */
    sql_config,

    /** PageSpeed Insights API Key */
    page_speed_api_key,

    /** 结果存储路径，在使用数据库操作前临时采用 */
    dirResults: path.resolve(__dirname, '.results'),

    /** 计划任务自动执行时间间隔 */
    autoTaskTime: 7
};
