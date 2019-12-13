/**
 * 生成完整的页面标题
 * @param {String} title
 * @returns {String}
 */
export default (pageTitle?: string): string => {
    if (pageTitle) return `${pageTitle} - ${__NAME__}`;
    return __NAME__;
};
