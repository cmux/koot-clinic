import React, { useState } from 'react';
import { extend } from 'koot';

import request from '@utils/request';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    customProps?: string;
}

// Functional Component =======================================================

const DevTestApi = extend<ComponentProps>({
    styles
})(
    React.memo(
        ({ className }): JSX.Element => {
            const [result, updateResult] = useState('');

            const resetResult = (): void => {
                updateResult('LOADING...');
            };
            const onClickTest = (
                evt: React.SyntheticEvent<HTMLButtonElement>
            ): void => {
                resetResult();
                request({
                    url: '/api/test',
                    method: 'get'
                }).then(res => {
                    updateResult(JSON.stringify(res));
                });
            };

            return (
                <div className={className}>
                    <h2>TEST API</h2>
                    <button type="button" onClick={onClickTest}>
                        /api/test
                    </button>

                    <h3>RESULT</h3>
                    <textarea defaultValue={result} readOnly></textarea>
                </div>
            );
        }
    )
);

export default DevTestApi;

// ============================================================================
