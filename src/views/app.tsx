import React from 'react';
import { extend } from 'koot';

import styles from './app.module.less';

// const { wrapper: moduleClassName } = styles;

// ----------------------------------------------------------------------------

const App = extend({
    styles
})(
    ({ className, children, ...props }): JSX.Element => (
        <main id="main" className={className} children={children} />
    )
);
export default App;
