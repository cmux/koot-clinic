import React from 'react';
import { extend, ExtendedProps } from 'koot';
import { CrawlerResult, CrawlerError } from 'koot-diagnose/crawler';
import axios from 'axios';
import bindEvent from 'bind-event';

import getTitle from '@utils/get-title';
import getDescription from '@utils/get-description';
// import request from '@utils/request';

import Header from './header';
import Table from './table';
import styles from './index.module.less';

//

interface ViewResultProps extends ExtendedProps {
    params: {
        resultId: string;
        type?: string;
    };
}
interface ViewResultState {
    data?: Results;
    tab?: string;
}
export interface DiagnoseError extends CrawlerError {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [metaKey: string]: any;
}
export interface DiagnoseResult extends CrawlerResult {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [metaKey: string]: any;
}
export interface Results {
    emails: string[];
    url: string;
    errors: DiagnoseResult;
}
export type ViewResultUpdateTab = (newTab?: string) => void;

//

@extend({
    pageinfo: (state, props: ViewResultProps) => ({
        title: getTitle(
            `${__('views.result.title')} (${props.params.resultId})`
        ),
        metas: [
            {
                description: getDescription(
                    `${__('views.result.description')} (${
                        props.params.resultId
                    })`
                )
            }
        ]
    }),
    // TODO: 使用 getData 服务器获取数据，UI 仍为 CSR。无需 API，只需要异步读取文件
    // data:
    styles
})
class ViewResult extends React.Component<ViewResultProps, ViewResultState> {
    constructor(props: ViewResultProps) {
        super(props);

        this.state = {
            data: undefined,
            tab: undefined
        };

        this.updateTab = this.updateTab.bind(this);
    }

    updateTab(newTab?: string): ViewResultUpdateTab | void {
        if (!newTab) return;
        this.setState({ tab: newTab });
    }

    componentDidMount(): void {
        // * 获取结果 JSON
        Promise.all([
            axios.get(`/api/result?id=${this.props.params.resultId}`),
            new Promise((resolve): void => {
                setTimeout(resolve, 2000);
            })
        ]).then(([res]) => {
            const { data = {} } = res;

            // eslint-disable-next-line no-console
            if (__DEV__) console.log(data, this.props);

            // * setState
            this.setState({ data, tab: Object.keys(data.errors)[0] });

            // * 隐藏顶级 loader
            const loader = document.querySelector('#__result-loader');
            if (loader) {
                bindEvent(loader, 'transitionend', function(evt) {
                    if (
                        evt.propertyName === 'opacity' &&
                        !evt.target.style.opacity
                    )
                        evt.target.parentNode.removeChild(evt.target);
                });
                loader.classList.add('die');
            }
        });
    }
    render(): JSX.Element | null {
        if (!this.state.data) return null;
        if (!this.state.tab) return null;

        return (
            <div className={this.props.className}>
                <Header
                    results={this.state.data}
                    id={this.props.params.resultId}
                    currentTab={this.state.tab}
                    updateTab={this.updateTab}
                />
                <Table
                    errors={this.state.data.errors[this.state.tab]}
                    type={this.state.tab}
                    url={this.state.data.url}
                />
            </div>
        );
    }
}

export default ViewResult;
