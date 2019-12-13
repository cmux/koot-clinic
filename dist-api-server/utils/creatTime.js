// 创建时间
var createTime = function(time) {
    //author: meizz
    var date = time ? new Date(time) : new Date();

    const getUTC = process.env.WEBPACK_BUILD_ENV === 'dev' ? false : true;

    var fmt = 'yyyy-MM-dd hh:mm:ss';
    var o = {
        'M+': date[`get${getUTC ? 'UTC' : ''}Month`]() + 1, //月份
        'd+': date[`get${getUTC ? 'UTC' : ''}Date`](), //日
        'h+': date[`get${getUTC ? 'UTC' : ''}Hours`](), //小时
        'm+': date[`get${getUTC ? 'UTC' : ''}Minutes`](), //分
        's+': date[`get${getUTC ? 'UTC' : ''}Seconds`](), //秒
        'q+': Math.floor((date[`get${getUTC ? 'UTC' : ''}Month`]() + 3) / 3), //季度
        S: date[`get${getUTC ? 'UTC' : ''}Milliseconds`]() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(
            RegExp.$1,
            (date.getFullYear() + '').substr(4 - RegExp.$1.length)
        );
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1
                    ? o[k]
                    : ('00' + o[k]).substr(('' + o[k]).length)
            );
    return fmt;
};
module.exports = createTime;
