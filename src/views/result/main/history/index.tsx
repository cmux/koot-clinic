import { DiagnoseHistory, DiagnoseHistoryResultItem } from '@types';

import React from 'react';
import { extend } from 'koot';
import { Link } from 'react-router';

import { pathnames } from '@constants/app';
import getTimeDiff from '@utils/get-time-diff';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps {
    history: DiagnoseHistory;
    currentId: string;
}

// Functional Component =======================================================

const History = extend<ComponentProps>({
    styles
})(
    React.memo(
        ({ className, history, currentId }): JSX.Element => {
            const { results } = history;
            return (
                <div className={className}>
                    {results.map(item => (
                        <Item item={item} key={item.clinic.everyQueryKey} />
                    ))}
                </div>
            );
        }
    )
);

export default History;

// ============================================================================

interface ItemProps {
    item: DiagnoseHistoryResultItem;
}
const Item = React.memo(
    ({ item: { clinic, errors } }: ItemProps): JSX.Element => {
        return (
            <Link
                className="item"
                // activeClassName="is-active"
                to={`${pathnames.result}/${clinic.everyQueryKey}`}
            >
                <span className="diff">{getTimeDiff(clinic.createTime)}</span>
                <span className="count">
                    {__('views.result.history_item.error_count', {
                        count:
                            '' +
                            Object.values(errors).reduce(
                                (sum, currentErrorArr) =>
                                    sum + currentErrorArr.length,
                                0
                            )
                    })}
                </span>
            </Link>
        );
    }
);
