import React, { ChangeEvent } from 'react';
import classNames from 'classnames';

import Center from '@components/center';

import { Results, ViewResultUpdateTab } from './index';
import { wrapper as moduleClassName } from './index.module.less';

//

interface HeaderProps {
    results: Results;
    id?: string;
    currentTab: string;
    updateTab: ViewResultUpdateTab;
}

//

const Header = ({
    results: { url, errors },
    currentTab,
    updateTab
}: HeaderProps): JSX.Element => {
    const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        updateTab(e.currentTarget.dataset.type);
    };
    const selectOnChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        updateTab(e.target.value);
    };
    return (
        <div className={`${moduleClassName}-header`}>
            <Center>
                <h1 className="title">
                    <small>{__('views.result.title')}</small>
                    <span>{url}</span>
                </h1>
                <div className="tabs">
                    {Object.keys(errors).map((type, index) => (
                        <button
                            key={index}
                            type="button"
                            className={classNames({
                                'is-active': type === currentTab
                            })}
                            data-type={type}
                            onClick={buttonOnClick}
                        >
                            {__('error_types', type)}
                            <span className="count">{errors[type].length}</span>
                        </button>
                    ))}
                </div>
            </Center>
            <div className="tabs-for-small-view">
                <div className="active">{__('error_types', currentTab)}</div>
                <select
                    defaultValue={currentTab}
                    key={currentTab}
                    onChange={selectOnChange}
                >
                    {Object.keys(errors).map((type, index) => (
                        <option key={index} value={type}>
                            {__('error_types', type)}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};
export default Header;
