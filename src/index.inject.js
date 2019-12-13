/* global
    __SVG_ICON_PACK__:false
*/

export default {
    performanceInfos: () => `<!-- rendered: ${new Date().toISOString()} -->`,
    svgIconPack: __SVG_ICON_PACK__,

    resultLoading: (template, state, ctx) => {
        if (
            /^\/result\/[^/]+?/.test(ctx.path) ||
            /^\/result-new\/[^/]+?/.test(ctx.path)
        ) {
            const icons = ['ruler', 'tools', 'knife'];
            return `<div id="__result-loader">
            <div class="icons">
            <div class="wrapper">${icons
                .concat(icons[0])
                .map(icon =>
                    `
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <use xlink:href="#icon-${icon}"></use>
                    </svg>
                </div>
                `
                        .replace(/\n/g, '')
                        .replace(/\s{2}/g, '')
                )
                .join('')}
                </div></div></div>`;
        }
        return '';
    }
};
