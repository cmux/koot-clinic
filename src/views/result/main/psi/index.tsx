import { Result as PSIResult, Audit as PSIAudit } from 'koot-diagnose/psi';

import React, { useRef } from 'react';
import { extend } from 'koot';

import scrollTo from '@utils/client/scroll-to';

import Empty from '../empty';
import Switch from './switch';
import Category from './category';

import styles from './index.module.less';

import { HeaderRef } from '../index';

// ============================================================================

let ContainerRef: React.RefObject<HTMLDivElement>;
let SwitchContainerRef: React.RefObject<HTMLDivElement>;
export const BodyRefs: {
    [typeName: string]: React.RefObject<HTMLDivElement>;
} = {};
export const scrollToCategory = (category: string): void => {
    const containerEl = ContainerRef.current;
    if (!containerEl) return;
    const bodyEl = BodyRefs[category].current;
    if (!bodyEl) return;
    const headerEl = HeaderRef.current;
    if (!headerEl) return;
    const switchContainerEl = SwitchContainerRef.current;
    if (!switchContainerEl) return;

    const rect = bodyEl.getBoundingClientRect();
    const toY =
        rect.top +
        window.pageYOffset -
        (parseInt(getComputedStyle(containerEl).paddingTop || '0') +
            switchContainerEl.offsetHeight +
            headerEl.offsetHeight +
            parseInt(getComputedStyle(headerEl).top || '0') +
            parseInt(getComputedStyle(bodyEl).marginTop || '0'));
    scrollTo(toY);
};
export const getGradeFromScore = (score: number | string): string => {
    if (typeof score === 'number') {
        return score < 0.6 ? 'bad' : score < 0.85 ? 'average' : 'good';
    }
    if (typeof score === 'string') {
        switch (score.toLowerCase()) {
            case 'slow':
                return 'bad';
            case 'fast':
                return 'good';
        }
        return score.toLowerCase();
    }
    return 'unknown';
};

// ============================================================================

export interface AuditGroup {
    group: string;
    title?: string;
    description?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    audits: Array<AuditGroupItem>;
}
export interface AuditGroupItem extends PSIAudit {
    id: string;
    weight: number;
}

// Functional Component =======================================================

interface ComponentProps {
    result?: PSIResult;
}
const Psi = extend<ComponentProps>({
    styles
})(
    React.memo(
        ({ className, result }): JSX.Element => {
            if (!result) return <Empty text={__('views.result.no_psi')} />;

            ContainerRef = useRef(null);
            SwitchContainerRef = useRef(null);

            // if (__CLIENT__ && __DEV__) console.warn(result);
            const { lighthouseResult } = result;
            const { categories = {} } = lighthouseResult;

            const allCategories = [
                'loadingExperience',
                ...Object.keys(categories)
            ];
            // const [currentType, switchType] = useState(allCategories[0]);

            return (
                <div className={className} ref={ContainerRef}>
                    <div
                        className={`${className}-switches`}
                        ref={SwitchContainerRef}
                    >
                        {allCategories.map(category => (
                            <Switch
                                category={category}
                                title={
                                    category === 'loadingExperience'
                                        ? __(
                                              'views.result.psi.loadingExperience'
                                          )
                                        : categories[category].title
                                }
                                key={category}
                                score={
                                    category === 'loadingExperience'
                                        ? result.loadingExperience
                                              .overall_category
                                        : categories[category].score
                                }
                            />
                        ))}
                    </div>
                    <div className="wrapper">
                        {allCategories.map(category => (
                            <Category
                                category={category}
                                key={category}
                                result={result}
                                score={
                                    category === 'loadingExperience'
                                        ? result.loadingExperience
                                              .overall_category
                                        : categories[category].score
                                }
                            />
                        ))}
                    </div>
                </div>
            );
        }
    )
);

export default Psi;
