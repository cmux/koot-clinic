import { Audit as PSIAudit } from 'koot-diagnose/psi';

import React, { useRef } from 'react';
import { extend } from 'koot';
import classNames from 'classnames';
import filesize from 'filesize';
import prettyMs from 'pretty-ms';

import Markdown from '@components/markdown';
import Icon from '@components/icon';

import { AuditGroup, AuditGroupItem, getGradeFromScore } from './';
import styles, { wrapper as classNameModule } from './audits.module.less';

// ============================================================================

interface AuditsProps {
    group: AuditGroup;
}
const Audits = extend<AuditsProps>({
    styles
})(
    React.memo(
        ({ group, className }): JSX.Element => {
            const { title, audits } = group;

            const ContainerRef: React.RefObject<HTMLDivElement> = useRef(null);

            return (
                <div className={className} ref={ContainerRef}>
                    {title && <h4 className="title">{title}</h4>}
                    <div className="audits">
                        {audits.map(audit => (
                            <Audit key={audit.title} audit={audit} />
                        ))}
                    </div>
                </div>
            );
        }
    )
);

export default Audits;

// ============================================================================

interface AuditProps {
    audit: AuditGroupItem;
    className?: string;
}
interface AuditState {
    showDetails: boolean;
}
class Audit extends React.PureComponent<AuditProps, AuditState> {
    hasDetails: boolean;
    hasWarnings: boolean;
    detailsType?: 'table' | 'opportunity-table' | 'unknown';

    constructor(props: AuditProps) {
        super(props);
        this.state = {
            showDetails: false
        };

        const { details, warnings } = this.props.audit;

        this.hasDetails = typeof details === 'object';
        this.hasWarnings = Array.isArray(warnings) && warnings.length > 0;
        this.detailsType = this.hasDetails
            ? details.type === 'table'
                ? 'table'
                : details.type === 'opportunity' &&
                  Array.isArray(details.items) &&
                  Array.isArray(details.headings)
                ? 'opportunity-table'
                : 'unknown'
            : undefined;

        if (__DEV__ && __CLIENT__) {
            const unrecognized = [];
            if (this.detailsType === 'unknown') unrecognized.push('details');
            if (this.hasWarnings) unrecognized.push('warnings');
            if (unrecognized.length) {
                console.warn(this.props.audit, ...unrecognized);
            }
            if (this.detailsType) {
                console.log(this.props.audit, this.detailsType);
            }
        }

        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails(evt: React.SyntheticEvent<HTMLButtonElement>): void {
        this.setState(prevState => ({
            showDetails: !prevState.showDetails
        }));
        evt.currentTarget.blur();
    }

    render(): React.ReactNode {
        const {
            title,
            score,
            displayValue,
            description,
            details
        } = this.props.audit;

        return (
            <div
                className={`${classNameModule}-audit`}
                data-grade={getGradeFromScore(score)}
                data-score={score}
            >
                <span className="title">
                    <span className="text">{title}</span>
                    {displayValue && (
                        <span className="value">{displayValue}</span>
                    )}
                </span>
                {description && (
                    <Markdown className="description" source={description} />
                )}
                {this.hasDetails && this.detailsType !== 'unknown' && (
                    <button
                        className={classNames([
                            'toggle-details',
                            {
                                'is-active': this.state.showDetails
                            }
                        ])}
                        type="button"
                        onClick={this.toggleDetails}
                    >
                        <Icon icon="arrow-right3" className="icon" />
                        {this.state.showDetails
                            ? __('views.result.psi.button_hide_details')
                            : __('views.result.psi.button_show_details')}
                    </button>
                )}
                {this.state.showDetails && (
                    <div className="details">
                        {this.detailsType === 'table' ||
                        this.detailsType === 'opportunity-table' ? (
                            <DetailsTable details={details} />
                        ) : (
                            this.detailsType
                        )}
                    </div>
                )}
            </div>
        );
    }
}

// ============================================================================

interface DetailsTableProps {
    details: PSIAudit['details'];
}
const DetailsTable = ({ details }: DetailsTableProps): JSX.Element | null => {
    const { headings, items } = details;

    if (!Array.isArray(headings)) return null;
    if (!Array.isArray(items)) return null;

    if (__CLIENT__ && __DEV__) console.warn(headings);

    return (
        <table className="details-table">
            {Array.isArray(headings) && (
                <thead>
                    <tr>
                        {headings.map(
                            (
                                { key, label, text, valueType, itemType },
                                index
                            ) => {
                                return (
                                    <td
                                        key={index}
                                        data-key={key}
                                        data-type={valueType || itemType}
                                    >
                                        {label || text}
                                    </td>
                                );
                            }
                        )}
                    </tr>
                </thead>
            )}
            {Array.isArray(items) && (
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            {headings.map(
                                ({ key, valueType, itemType }, index) => {
                                    const type = valueType || itemType;
                                    const props = {
                                        key: index,
                                        'data-type': type
                                    };
                                    const content = item[key];
                                    switch (type) {
                                        case 'url': {
                                            return (
                                                <td {...props}>
                                                    <a
                                                        href={content}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {content}
                                                    </a>
                                                </td>
                                            );
                                        }
                                        case 'bytes': {
                                            return (
                                                <td {...props}>
                                                    {filesize(content || 0)}
                                                </td>
                                            );
                                        }
                                        case 'ms':
                                        case 'timespanMs': {
                                            return (
                                                <td {...props}>
                                                    {prettyMs(content, {
                                                        secondsDecimalDigits: 0
                                                    })}
                                                </td>
                                            );
                                        }
                                        case 'text': {
                                            return (
                                                <td {...props}>{content}</td>
                                            );
                                        }
                                        case 'code': {
                                            return (
                                                <td {...props}>
                                                    <pre>{content}</pre>
                                                </td>
                                            );
                                        }
                                        case 'thumbnail': {
                                            return (
                                                <td {...props}>
                                                    <img
                                                        src={content}
                                                        alt={content}
                                                    />
                                                </td>
                                            );
                                        }
                                    }
                                    return (
                                        <td
                                            className="error-unknown-type"
                                            {...props}
                                        >
                                            {__(
                                                'views.result.psi.details_unkown_type',
                                                '0',
                                                {
                                                    type: type || ''
                                                }
                                            )}
                                            <br />
                                            {__(
                                                'views.result.psi.details_unkown_type',
                                                '1'
                                            )}
                                        </td>
                                    );
                                }
                            )}
                        </tr>
                    ))}
                </tbody>
            )}
        </table>
    );
};
