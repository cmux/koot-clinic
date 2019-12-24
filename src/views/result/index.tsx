import { RouteComponentProps, Result, DiagnoseHistory } from '@types';

import React from 'react';
import { Dispatch } from 'redux';
import { extend, ExtendedProps } from 'koot';
import bindEvent from 'bind-event';

import { FETCH_RESULT, FETCH_HISTORY } from '@constants/actions';

import getTitle from '@utils/get-title';
import getDescription from '@utils/get-description';

import Aside from './aside';
import Main from './main';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps extends RouteComponentProps, ExtendedProps {
    result: Result;
    history: DiagnoseHistory;
    dispatch: Dispatch;
}
interface ComponentState {
    loading: boolean;
}
export type ViewResultUpdateTab = (newTab?: string) => void;

// ============================================================================

const getIdFromProps = (props: ComponentProps): string | undefined => {
    const { routeParams = {}, params = {} } = props;
    return params.resultId || routeParams.resultId;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dispatchFetchResult = (
    dispatch: Dispatch,
    id?: string
): Promise<void> => {
    if (!id) new Error('NO ID');
    return dispatch(FETCH_RESULT, {
        id
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).then((r: any) => {
        const origin =
            typeof r.payload === 'object' ? r.payload.result.url : r.url;
        if (!origin) return;
        return dispatch(FETCH_HISTORY, {
            origin: origin
        });
    });
};

// Component Class ============================================================

@extend({
    connect: (state, props: ComponentProps) => {
        const { resultId } = props.params || {};
        if (!resultId) return {};
        const { [resultId]: result } = state.result;
        if (!result) return {};
        const { url: origin } = result;
        const history = state.history[origin] || {};
        return { result, history };
    },
    pageinfo: (state, props: ComponentProps) => ({
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
    data: (state, renderProps, dispatch) =>
        dispatchFetchResult(dispatch, getIdFromProps(renderProps)),
    styles
})
class ViewResult extends React.PureComponent<ComponentProps, ComponentState> {
    constructor(props: ComponentProps) {
        super(props);

        this.state = {
            loading: false
        };
    }

    componentDidUpdate(prevProps: ComponentProps): void {
        const { resultId: prevId } = prevProps.params || {};
        const { resultId: newId } = this.props.params || {};
        if (prevId !== newId) {
            this.setState({
                loading: true
            });
            dispatchFetchResult(
                this.props.dispatch,
                getIdFromProps(this.props)
            );
        }
    }

    componentDidMount(): void {
        const { result } = this.props;
        if (typeof result === 'object') {
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
        }
    }
    render(): JSX.Element | null {
        const {
            result,
            history,
            params: { resultId, tab = '' }
        } = this.props;

        if (!result || typeof result !== 'object')
            return (
                <div className={`${this.props.className}-loading`}>
                    LOADING...
                </div>
            );
        // if (__CLIENT__ && __DEV__) console.warn({ result, history });

        return (
            <div className={this.props.className}>
                <Aside history={history} resultId={resultId} />
                <Main
                    history={history}
                    resultId={resultId}
                    result={result}
                    tab={tab}
                />
            </div>
        );
    }
}

export default ViewResult;
