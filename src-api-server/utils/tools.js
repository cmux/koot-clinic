const serialize = url => {
    const reg = /^(http[s]?:\/\/)?([a-zA-Z0-9\.]+)(\/)?(\S)?$/;
    const urlnew = url.replace(reg, function($0, $1, $2, $3) {
        console.log($0, $1, $2, $3);
        const str = ($1 ? $1 : 'http://') + $2 + ($3 ? $3 : '/');
        console.log(str);
        return str;
    });
    return urlnew;
};

const getDate = num => {
    const date = new Date();
    const year = date.getFullYear();

    const month = date.getMonth();

    const day = date.getDate();
    return new Date(year, month, day + num);
};

function getNodeArg(argv, name) {
    const reg = new RegExp('-' + name + '=(\\w+)');
    let result = null;
    argv.some(item => {
        if (reg.test(item)) {
            result = item.match(reg)[1];
            return true;
        }
        return false;
    });
    return result;
}
module.exports = {
    serialize,
    getDate,
    getNodeArg
};
