import React from 'react';
import { extend, ExtendedProps } from 'koot';
import marked from 'marked';

import styles from './index.module.less';

// ============================================================================

interface ComponentProps extends ExtendedProps {
    source: string;
}

// Functional Component =======================================================
@extend({
    styles
})
class Markdown extends React.PureComponent<ComponentProps> {
    ContainerRef: React.RefObject<HTMLDivElement> = React.createRef();
    componentDidMount(): void {
        if (this.ContainerRef.current) {
            const links = this.ContainerRef.current.querySelectorAll(
                'a[href*="//"]'
            );
            for (let i = 0; i < links.length; i++) {
                links[i].setAttribute('target', '_blank');
            }
        }
    }
    render(): React.ReactNode {
        return (
            <div
                className={this.props.className}
                dangerouslySetInnerHTML={{
                    __html: marked(this.props.source)
                }}
                ref={this.ContainerRef}
            />
        );
    }
}

export default Markdown;
