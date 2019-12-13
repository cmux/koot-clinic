import React from 'react';
import filesize from 'filesize';
import classNames from 'classnames';

import Center from '@components/center';

import { DiagnoseError } from './index';
import { wrapper as moduleClassName } from './index.module.less';

//

interface TableProps {
    errors: DiagnoseError[];
    type: string;
    url: string;
}
interface ItemProps {
    key?: React.Key;
    error: DiagnoseError;
}

//

const getColumns = (type: string): Array<string> => {
    if (type === 'no gzip') return ['url', 'contentLength'];
    if (type === 'console error') return ['message', 'url'];
    if (type === 'broken request') return ['url', 'pageUrl'];
    if (type === 'large file') return ['url', 'contentLength', 'pageUrl'];
    if (type === 'common error') return ['message'];
    return ['url'];
};

//

const Table = ({ errors, type }: TableProps): JSX.Element => (
    <Center className={`${moduleClassName}-table`}>
        <div className="wrapper">
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
            {errors.map((o, index) => (
                <Item key={index} error={o} />
            ))}
        </div>
    </Center>
);
export default Table;

//

const Item = ({ error }: ItemProps): JSX.Element => {
    // eslint-disable-next-line no-console
    if (__DEV__) console.log(error);

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
};

//
