const addAPI = require('../utils/add-api');
const { read, add } = require('../utils/db_connect');
// ============================================================================

module.exports = () => {
    // if (process.env.WEBPACK_BUILD_ENV === 'dev') {
    addAPI('get', '/test', async ctx => {
        await add(`insert into users(name,age) values('nihao','341')`);
        const data = await read(`select * from users`);
        ctx.body = data;
    });
    // }
};
