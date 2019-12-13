/**
 * 滚动至指定 Y 坐标或目标元素的位置
 */
const scrollTo = (YorElement: number | HTMLElement, offset = 0): void => {
    let y = offset;
    if (typeof YorElement === 'number') {
        y += YorElement;
    } else if (YorElement instanceof Element) {
        const rect = YorElement.getBoundingClientRect();
        y += rect.top + window.pageYOffset;
    }
    doScroll(y);
};

export default scrollTo;

// ============================================================================

const doScroll = (y: number): void => {
    if (typeof window.scroll === 'function') {
        try {
            window.scroll({
                top: y,
                left: 0,
                behavior: 'smooth'
            });
        } catch (e) {
            doScrollFallback(y);
        }
    } else {
        doScrollFallback(y);
    }
};

const doScrollFallback = (y: number): void => {
    window.scrollTo(0, y);
};
