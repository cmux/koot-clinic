import { DiagnoseHistory } from '@types';

import React, { PropsWithChildren } from 'react';
import { extend } from 'koot';
import { Link, IndexLink } from 'react-router';
import prettyMs from 'pretty-ms';
import classNames from 'classnames';
import md5 from 'md5';

import { pathnames } from '@constants/app';
import Icon from '@components/icon';

import { tabs } from '../main';
import styles, { wrapper as classNameModule } from './index.module.less';

// ============================================================================

const menuCheckboxId = md5('menuCheckboxId');
interface ComponentProps {
    history: DiagnoseHistory;
    resultId: string;
}

// Functional Component =======================================================

const Aside = extend<ComponentProps>({
    styles
})(
    React.memo(
        ({ className, history, resultId }): JSX.Element => {
            const { domain, nextScheduledTimestamp, results = [] } = history;
            const latestResultId = results.sort(
                (a, b) =>
                    new Date(b.clinic.createTime).valueOf() -
                    new Date(a.clinic.createTime).valueOf()
            )[0].clinic.everyQueryKey;
            return (
                <React.Fragment>
                    <PhoneViewController />
                    <div className={className}>
                        <Site domain={domain} />
                        <Options
                            resultId={resultId}
                            latestResultId={
                                resultId !== latestResultId
                                    ? latestResultId
                                    : undefined
                            }
                        />
                        <Remaining
                            nextScheduledTimestamp={nextScheduledTimestamp}
                        />
                    </div>
                </React.Fragment>
            );
        }
    )
);

export default Aside;

// ============================================================================

interface SiteProps {
    domain: string;
    icon?: string;
    name?: string;
}
const Site = React.memo(
    ({ domain, icon, name }: SiteProps): JSX.Element => (
        <div className={`${classNameModule}-site`}>
            <div
                className="icon"
                style={{
                    backgroundImage: icon ? `url(${icon})` : undefined
                }}
            >
                <div className="wrapper" />
                {!icon && <Icon className="no-icon" icon="sphere" />}
            </div>
            {!!name ? <h1 className="name">{name}</h1> : null}
            <strong className="domain">{domain}</strong>
        </div>
    )
);

// ============================================================================

interface OptionsProps {
    latestResultId?: string;
    resultId: string;
}
const Options = React.memo(
    ({ latestResultId, resultId }: OptionsProps): JSX.Element => (
        <div className={`${classNameModule}-options`}>
            {!!latestResultId ? (
                <React.Fragment>
                    <Option resultId={latestResultId}>
                        {__('views.result.aside_options.latest')}
                    </Option>
                    <Option resultId={resultId}>
                        {__('views.result.aside_options.current')}
                    </Option>
                </React.Fragment>
            ) : (
                <Option resultId={resultId}>
                    {__('views.result.aside_options.latest')}
                </Option>
            )}
            <Option resultId={resultId} type="history">
                {__('views.result.aside_options.history')}
            </Option>
        </div>
    )
);

interface OptionProps {
    resultId: string;
    type?: string;
    currentPathname?: string;
}
const Option = extend<OptionProps>({
    connect: state => ({
        currentPathname: state.routing.locationBeforeTransitions.pathname
    })
})(
    React.memo(
        ({
            resultId,
            type,
            children,
            currentPathname
        }: PropsWithChildren<OptionProps>): JSX.Element => {
            const Component = !!type ? Link : IndexLink;
            const link = `${pathnames.result}/${resultId}${
                type ? `/${type}` : ''
            }`;
            const result = new RegExp(`^${link}/*(.*)`).exec(
                currentPathname || ''
            );
            const isActive =
                !type &&
                Array.isArray(result) &&
                tabs.some(([uri]) => uri === result[1]);
            return (
                <Component
                    to={link}
                    className={classNames([
                        'option',
                        {
                            'is-active': isActive
                        }
                    ])}
                    activeClassName="is-active"
                >
                    {children}
                </Component>
            );
        }
    )
);

// ============================================================================

interface RemainingProps {
    nextScheduledTimestamp: number;
}
interface RemainingState {
    remaining: number;
}
class Remaining extends React.PureComponent<RemainingProps, RemainingState> {
    countdown?: NodeJS.Timeout;
    constructor(props: RemainingProps) {
        super(props);
        this.state = {
            remaining: this.getRemaining()
        };
    }
    getRemaining(
        nextScheduledTimestamp = this.props.nextScheduledTimestamp
    ): number {
        return nextScheduledTimestamp - Date.now();
    }
    componentDidMount(): void {
        this.countdown = setInterval(() => {
            this.setState({
                remaining: this.getRemaining()
            });
        }, 1000);
    }
    componentWillUnmount(): void {
        if (this.countdown) clearInterval(this.countdown);
    }
    render(): React.ReactNode {
        return (
            <div className={`${classNameModule}-remaining`}>
                {__('views.result.next_scheduled_in')}
                <strong className="time">
                    {prettyMs(this.state.remaining, {
                        secondsDecimalDigits: 0,
                        unitCount: 2
                    })}
                </strong>
            </div>
        );
    }
}

// ============================================================================

interface PhoneViewControllerProps {
    pathname?: string;
}
@extend({
    connect: state => ({
        pathname: state.routing.locationBeforeTransitions.pathname
    }),
    ssr: null
})
class PhoneViewController extends React.PureComponent<
    PhoneViewControllerProps,
    {
        renderMask: boolean;
    }
> {
    CheckboxRef = React.createRef<HTMLInputElement>();

    constructor(props: {}) {
        super(props);
        this.state = {
            renderMask: false
        };

        this.labelOnClick = this.labelOnClick.bind(this);
        this.maskOnTransitionEnd = this.maskOnTransitionEnd.bind(this);
    }

    labelOnClick(): void {
        setTimeout(() => {
            if (
                this.CheckboxRef &&
                this.CheckboxRef.current &&
                this.CheckboxRef.current.checked
            )
                this.setState({
                    renderMask: true
                });
        }, 1);
    }
    maskOnTransitionEnd(
        evt: React.SyntheticEvent<HTMLDivElement, TransitionEvent>
    ): void {
        if (
            evt.nativeEvent.propertyName === 'opacity' &&
            parseFloat(getComputedStyle(evt.currentTarget).opacity || '0') < 0.1
        ) {
            this.setState({
                renderMask: false
            });
        }
    }

    componentDidUpdate(prevProps: PhoneViewControllerProps): void {
        if (
            this.props.pathname !== prevProps.pathname &&
            this.CheckboxRef &&
            this.CheckboxRef.current &&
            this.CheckboxRef.current.checked
        ) {
            this.CheckboxRef.current.checked = false;
        }
    }

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <input
                    id={menuCheckboxId}
                    className={`${classNameModule}-controller-checkbox`}
                    type="checkbox"
                    defaultChecked={false}
                    ref={this.CheckboxRef}
                />
                <label
                    className={`${classNameModule}-controller-switch`}
                    htmlFor={menuCheckboxId}
                    onClick={this.labelOnClick}
                >
                    <div className="switch">
                        <Icon icon="menu7" className="icon" />
                    </div>
                    {this.state.renderMask && (
                        <div
                            className="mask"
                            onTransitionEnd={this.maskOnTransitionEnd}
                        ></div>
                    )}
                </label>
            </React.Fragment>
        );
    }
}
