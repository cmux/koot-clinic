/**
 * 页面: 提交信息 (首页)
 */

import React from 'react';
import { extend, ExtendedProps } from 'koot';
import classNames from 'classnames';
import axios, { AxiosRequestConfig, Method } from 'axios';

import getTitle from '@utils/get-title';
import getDescription from '@utils/get-description';

import Center from '@components/center';

import styles from './index.module.less';
import Form from './form';
import Overlay from './overlay';

//

export type formOnSubmit = (evt: React.FormEvent<HTMLFormElement>) => false;
/**
 * 表单结果
 * - `undefined` 未提交
 * - `true` 提交成功
 * - `false` 提交失败，原因未知
 * - _string_ 提交失败的原因
 */
export type SubmitResult = undefined | true | false | string;

//

interface ViewSubmitState {
    /** 表单结果 */
    result: SubmitResult;
    /** 是否正在进行提交 */
    submitting: boolean;
}
@extend({
    pageinfo: () => ({
        title: getTitle(),
        metas: [{ description: getDescription() }]
    }),
    styles
})
class ViewSubmit extends React.Component<ExtendedProps> {
    state: ViewSubmitState = {
        result: undefined,
        submitting: false
    };
    onSubmit: formOnSubmit = evt => {
        evt.preventDefault();

        // 必要信息
        const $form = evt.target as HTMLFormElement;
        const method = $form.getAttribute('method');
        const url = $form.getAttribute('action');
        const data = new FormData($form);

        // FormData -> params
        interface Params {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            [key: string]: any;
        }
        const params: Params = {};
        data.forEach((value, key) => {
            params[key] = value;
        });

        // 提交
        const axiosConfig: AxiosRequestConfig = {
            url: url !== null ? url : undefined,
            method: method as Method,
            params
        };
        this.setState(
            {
                submitting: true
            },
            () => {
                Promise.all([
                    axios(axiosConfig),
                    new Promise((resolve): void => {
                        setTimeout(resolve, 1000);
                    })
                ]).then(([res]) => {
                    // console.log({ $form, method, url, data, this: this, res });
                    // 判断请求是否成功 & 获取请求结果
                    if (
                        !res ||
                        typeof res !== 'object' ||
                        typeof res.data !== 'object'
                    ) {
                        return this.setState({
                            submitting: false,
                            result: false
                        });
                    }

                    this.setState({
                        submitting: false,
                        result: true
                    });
                });
            }
        );

        //

        return false;
    };
    render(): JSX.Element {
        const hasResult = Boolean(typeof this.state.result !== 'undefined');
        const isSubmittingOrHasResult = Boolean(
            this.state.submitting || hasResult
        );
        return (
            <div
                className={classNames([
                    this.props.className,
                    {
                        'is-submitting': this.state.submitting,
                        'mod-success': this.state.result === true,
                        'mod-fail':
                            this.state.result === false ||
                            typeof this.state.result === 'string'
                    }
                ])}
            >
                <Center className="wrapper">
                    <h1 className="logo">Koot Clinic</h1>
                    <Form onSubmit={this.onSubmit} />
                    {isSubmittingOrHasResult && (
                        <Overlay result={this.state.result} />
                    )}
                </Center>
                {hasResult && <div className="result-background" />}
            </div>
        );
    }
}
export default ViewSubmit;
