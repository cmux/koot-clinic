import { Result, DiagnoseHistory } from '@types';

import React, { useRef } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import { Link, IndexLink } from 'react-router';

import { pathnames } from '@constants/app';
import getTimeDiff from '@utils/get-time-diff';

import ChildHistory from './history';
import ChildPSI from './psi';
import ChildTable from './table';

import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

export const tabs = [
    ['', 'psi'],
    // ['', 'psi-loading'],
    // ['psi-performance', 'psi-performance'],
    // ['psi-best-practices', 'psi-best-practices'],
    // ['psi-seo', 'psi-seo'],
    ['broken-request', 'broken request'],
    ['common-error', 'common error'],
    ['console-error', 'console error'],
    ['large-file', 'large file'],
    ['no-gzip', 'no gzip']
];
export let HeaderRef: React.RefObject<HTMLDivElement>;

// Functional Component =======================================================

interface ComponentProps {
    result: Result;
    history: DiagnoseHistory;
    resultId: string;
    tab: string;
}
const Main = extend<ComponentProps>({
    styles
})(
    React.memo(
        ({ className, tab = '', history, result, resultId }): JSX.Element => {
            HeaderRef = useRef(null);

            const isHistory = tab === 'history';

            const currentTabArr = tabs.filter(([uri]) => uri === tab)[0] || [];
            const currentType = currentTabArr[1];

            const isPsi = /^psi((-.+)|$)/.test(currentType);

            return (
                <div className={className}>
                    <div
                        className={classNames([
                            `${classNameModule}-header`,
                            {
                                'mod-history': isHistory
                            }
                        ])}
                        ref={HeaderRef}
                    >
                        <h2 className="title">
                            {isHistory
                                ? __('views.result.aside_options.history')
                                : __('views.result.history_title', {
                                      timediff: getTimeDiff(
                                          history.results.filter(
                                              item =>
                                                  item.clinic.everyQueryKey ===
                                                  resultId
                                          )[0].clinic.createTime
                                      )
                                  })}
                        </h2>
                        {!isHistory && (
                            <div className="tabs">
                                <div className="wrapper">
                                    {tabs.map(
                                        ([uri, type]): JSX.Element => (
                                            <Tab
                                                key={uri}
                                                uri={uri}
                                                type={type}
                                                resultId={resultId}
                                                count={
                                                    type === 'psi'
                                                        ? undefined
                                                        : (
                                                              result.errors[
                                                                  type
                                                              ] || []
                                                          ).length
                                                }
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={`${classNameModule}-body`}>
                        {isHistory ? (
                            <ChildHistory
                                history={history}
                                currentId={resultId}
                            />
                        ) : isPsi ? (
                            <ChildPSI result={result.psi} />
                        ) : (
                            <ChildTable
                                errors={result.errors[currentType]}
                                type={currentType}
                            />
                        )}
                    </div>
                </div>
            );
        }
    )
);

export default Main;

// ============================================================================

interface TabProps {
    resultId: string;
    uri: string;
    type: string;
    count?: number;
}
const Tab = React.memo(
    ({ resultId, uri, type, count }: TabProps): JSX.Element => {
        const children = (
            <React.Fragment>
                {__('error_types', type)}
                {typeof count !== 'undefined' && (
                    <small
                        className={classNames([
                            'count',
                            {
                                'is-zero': !count,
                                'is-not-zero': !!count
                            }
                        ])}
                    >
                        {count}
                    </small>
                )}
            </React.Fragment>
        );
        const props = {
            className: 'tab',
            activeClassName: 'is-active',
            to: `${pathnames.result}/${resultId}${uri ? `/${uri}` : ''}`,
            children
        };
        if (!uri) return <IndexLink {...props} />;
        return <Link {...props} />;
    }
);
