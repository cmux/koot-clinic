import React from 'react';
import classNames from 'classnames';

import { scrollToCategory, getGradeFromScore } from './';

// ============================================================================

interface SwitchProps {
    className?: string;
    category: string;
    title: string;
    score: string | number;
    // switchType: React.Dispatch<React.SetStateAction<string>>;
}
class Switch extends React.PureComponent<SwitchProps> {
    constructor(props: SwitchProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(evt: React.SyntheticEvent<HTMLButtonElement>): void {
        evt.currentTarget.blur();
        scrollToCategory(this.props.category);
    }
    render(): React.ReactNode {
        const isScoreNumber = typeof this.props.score === 'number';
        const grade = getGradeFromScore(this.props.score);
        return (
            <button className="switch" onClick={this.onClick}>
                <span
                    className={classNames([
                        'score',
                        {
                            'is-number': isScoreNumber
                        }
                    ])}
                    data-score={this.props.score}
                    data-grade={grade}
                >
                    {isScoreNumber
                        ? (this.props.score as number) * 100
                        : __('views.result.psi', this.props.score as string)}
                </span>
                <span className="title">{this.props.title}</span>
            </button>
        );
    }
}

export default Switch;
