import React from 'react';
import { extend } from 'koot';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    text?: string;
}

// Functional Component =======================================================

const Empty = extend<ComponentProps>({
    styles
})(
    React.memo(
        ({ className, text }): JSX.Element => (
            <div className={className}>
                {text || __('views.result.no_error')}
            </div>
        )
    )
);

export default Empty;
