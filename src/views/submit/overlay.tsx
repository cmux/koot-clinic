import React from 'react';

import Icon from '@components/icon';
import LoaderSpinner from '@components/loaders/spinner';

import { SubmitResult } from './index';
import { wrapper as moduleClassName } from './index.module.less';

interface OverlayProps {
    result: SubmitResult;
}

const Overlay = ({ result }: OverlayProps): JSX.Element => (
    <div className={`${moduleClassName}-overlay`}>
        <LoaderSpinner className="loader" />
        {typeof result !== 'undefined' && (
            <div className="result">
                <Icon className="icon" icon="hour-glass3" />
                <h2 className="title">
                    {__('views.submit.submit_success.title')}
                </h2>
                <span className="msg">
                    {__('views.submit.submit_success.msg')}
                </span>
            </div>
        )}
    </div>
);

export default Overlay;
