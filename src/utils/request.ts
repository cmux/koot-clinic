import axios, { Method, AxiosResponse, AxiosRequestConfig } from 'axios';

import getApi from '@utils/get-api';

function request<T, R = AxiosResponse<T>>(
    method: Method,
    config: AxiosRequestConfig
): Promise<T>;
function request<T, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
): Promise<T>;
function request<T, R = AxiosResponse<T>>(
    config: Method | AxiosRequestConfig = {},
    config2?: AxiosRequestConfig
): Promise<T> {
    if (typeof config === 'string') {
        return request({
            ...(config2 || {}),
            method: config
        });
    }

    if (config.url) config.url = getApi(config.url);

    return axios(config).then(res => {
        if (res.status !== 200 || res.statusText !== 'OK') {
            const err = new Error('REQUEST_FAIL');
            Object.assign(err, {
                response: res
            });
            throw err;
        }
        return res.data;
    });
}

export default request;
