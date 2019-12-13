import { Result as PSIResult } from 'koot-diagnose/psi';

import React, { useRef } from 'react';

import Markdown from '@components/markdown';
import Audits from './audits';

import { AuditGroup, BodyRefs, getGradeFromScore } from './';
import { wrapper as classNameModule } from './index.module.less';

// ============================================================================

interface BodyProps {
    category: string;
    className?: string;
    result?: PSIResult;
    score?: string | number;
}
const Body = React.memo(
    ({ result, category, score }: BodyProps): JSX.Element | null => {
        const props = {
            className: `${classNameModule}-category`,
            'data-category': category
        };
        if (category === 'OTHER_INFO') {
            return (
                <div {...props}>
                    <Markdown
                        className="infos"
                        source={__('views.result.psi.markdown_ending_msg')}
                    />
                </div>
            );
        }

        BodyRefs[category] = useRef(null);
        const grade = getGradeFromScore(score || 0);

        Object.assign(props, {
            ref: BodyRefs[category],
            'data-grade': grade
        });

        if (category === 'loadingExperience') {
            return (
                <div {...props}>
                    <h3 className="title">
                        {__('views.result.psi.loadingExperience')}
                    </h3>
                </div>
            );
        }

        if (!result) return null;

        const { lighthouseResult } = result;
        const { audits, categories, categoryGroups } = lighthouseResult;
        const {
            title,
            description,
            // manualDescription,
            auditRefs = {}
        } = categories[category];
        const auditGroups: {
            [group: string]: AuditGroup;
        } = {};
        const auditGroupsSorted: AuditGroup[] = [];

        for (const audit of Object.values(auditRefs)) {
            const { id, weight, group = '.' } = audit;
            const thisAudit = audits[id];

            if (
                (group !== 'metrics' &&
                    typeof thisAudit.score === 'number' &&
                    thisAudit.score > 0.9) ||
                thisAudit.scoreDisplayMode === 'notApplicable' ||
                thisAudit.scoreDisplayMode === 'informative'
            )
                continue;

            if (!auditGroups[group]) {
                const {
                    title = __('views.result.psi.group_other'),
                    description
                } = categoryGroups[group] || {};
                auditGroups[group] = {
                    group,
                    title,
                    description,
                    audits: []
                };
                auditGroupsSorted.push(auditGroups[group]);
            }

            auditGroups[group].audits.push({
                id,
                weight,
                ...thisAudit
            });
        }

        auditGroupsSorted.sort((a, b) => {
            if (a.group === '.') return 1;
            if (b.group === '.') return -1;
            return 1;
        });

        if (
            auditGroupsSorted.length === 1 &&
            auditGroupsSorted[0].group === '.'
        ) {
            auditGroupsSorted[0].title = undefined;
        }

        return (
            <div {...props}>
                <h3 className="title">{title}</h3>
                {description && (
                    <Markdown className="description" source={description} />
                )}
                {auditGroupsSorted.map(g => (
                    <Audits group={g} key={g.group} />
                ))}
            </div>
        );
    }
);

export default Body;
