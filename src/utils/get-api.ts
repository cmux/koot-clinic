import { pathnames } from '@constants/app';

/**
 * 获取完整的 API 地址
 * - 如果传入的地址以 `/api` 开头，直接返回
 */
function getApi(url: string): string {
    if (url.includes('://')) return url;

    const uri = new RegExp(`^${pathnames.api}`).test(url)
        ? url
        : pathnames.api + ((url || '').substr(0, 1) !== '/' ? '/' : '') + url;

    if (__CLIENT__) return uri;

    return `http://127.0.0.1:${
        __DEV__ ? process.env.SERVER_PORT_DEV_MAIN : process.env.SERVER_PORT
    }${uri}`;
}

export default getApi;
