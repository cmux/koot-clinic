/** 生成完整的页面简介 */
export default (description?: string): string => {
    const _des = __('description');
    if (description) return `${description} - ${_des}`;
    return _des;
};
