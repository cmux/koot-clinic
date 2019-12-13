import { CrawlerError } from 'koot-diagnose/crawler';

import React from 'react';
import { extend } from 'koot';
import filesize from 'filesize';
import classNames from 'classnames';

import Empty from '../empty';

import styles from './index.module.less';

// ============================================================================

const getColumns = (type: string): Array<string> => {
    if (type === 'no gzip') return ['url', 'contentLength'];
    if (type === 'console error') return ['message', 'url'];
    if (type === 'broken request') return ['url', 'pageUrl'];
    if (type === 'large file') return ['url', 'contentLength', 'pageUrl'];
    if (type === 'common error') return ['message'];
    return ['url'];
};
interface ComponentProps {
    errors: CrawlerError[];
    type: string;
}

// Functional Component =======================================================

const Table = extend<ComponentProps>({
    styles
})(
    React.memo(
        ({ className, errors, type }): JSX.Element => {
            if (!errors.length) return <Empty />;

            if (__CLIENT__ && __DEV__) console.warn(errors);

            return (
                <div className={className}>
                    <div className="header">
                        {getColumns(type).map((column, index) => (
                            <div
                                className="cell"
                                key={column}
                                data-column={index ? column : undefined}
                            >
                                {__('views.result.table_columns', column)}
                            </div>
                        ))}
                    </div>
                    {errors.map(error => (
                        <Item error={error} key={error.id} />
                    ))}
                </div>
            );
        }
    )
);

export default Table;

// ============================================================================

interface ItemProps {
    key?: React.Key;
    error: CrawlerError;
}
const Item = React.memo(
    ({ error }: ItemProps): JSX.Element => {
        const getContent = (
            column: string
        ): JSX.Element | null | string | number => {
            if (!error[column]) return null;
            if (column === 'pageUrl' || column === 'url')
                return (
                    <a
                        href={error[column]}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {error[column]}
                    </a>
                );
            if (column === 'contentLength')
                return filesize(error.contentLength || 0);
            return error[column];
        };

        const [main, ...columns] = getColumns(error.type || '');

        return (
            <div className="item">
                <div className="main">
                    {main === 'message' ? (
                        <div className="msg">{error.message}</div>
                    ) : (
                        <a
                            href={error.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {error.url}
                        </a>
                    )}
                </div>
                {columns.map(column => {
                    const content = getContent(column);
                    return (
                        <dl
                            className={classNames([
                                'info',
                                {
                                    'is-empty': !content
                                }
                            ])}
                            key={column}
                            data-column={column}
                        >
                            <dt>{__('views.result.table_columns', column)}</dt>
                            <dd>{getContent(column)}</dd>
                        </dl>
                    );
                })}
            </div>
        );
    }
);
