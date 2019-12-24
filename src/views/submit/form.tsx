import React from 'react';
import classNames from 'classnames';

import Icon from '@components/icon';

import { formOnSubmit } from './index';
import { wrapper as moduleClassName } from './index.module.less';

//

interface FormProps extends React.InputHTMLAttributes<HTMLFormElement> {
    onSubmit: formOnSubmit;
}
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
    icon?: string;
}

//

/**
 * 提交表单
 */
const Form = ({ onSubmit }: FormProps): JSX.Element => (
    <form
        action="/api/diagnose"
        method="get"
        onSubmit={onSubmit}
        className={`${moduleClassName}-form`}
    >
        <div className="body">
            <Input
                label={__('views.submit.labels.url')}
                name="url"
                type="url"
                autoComplete="url"
                icon="sphere"
                placeholder="https://..."
                required={true}
            ></Input>
            <Input
                label={__('views.submit.labels.email')}
                name="email"
                type="email"
                autoComplete="email"
                icon="envelop2"
                placeholder="someone@web.site"
                required={true}
            ></Input>
        </div>
        <button type="submit">{__('views.submit.buttons.submit')}</button>
    </form>
);
export default Form;

//

const inputClassName = `${moduleClassName}-input`;
const Input = ({
    className,
    label,
    type = 'text',
    icon,
    ...props
}: InputProps): JSX.Element => (
    <label className={classNames([className, inputClassName])}>
        <input className={`${inputClassName}-input`} type={type} {...props} />
        {icon && (
            <Icon
                icon={icon}
                className={`${inputClassName}-icon`}
                title={label}
            />
        )}
        {label && !icon && (
            <span className={`${inputClassName}-label`}>{label}</span>
        )}
    </label>
);
