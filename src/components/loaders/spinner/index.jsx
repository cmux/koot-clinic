import React from 'react';
import { extend } from 'koot';

const Spinner = extend({
    styles: require('./index.module.less')
})(({ className, component, style, size, ...props }) => {
    const Component = component || 'span';

    if (size && typeof style !== 'object') style = {};
    if (size) {
        const s = parseInt(size);
        style.width = `${s}px`;
        style.height = `${s}px`;
    }

    return <Component className={className} style={style} {...props} />;
});

export default Spinner;
