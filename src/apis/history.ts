import { Result } from '@types';
import request from '@utils/request';

export const get = (domain: string): Promise<Result> =>
    request<Result>('get', {
        url: `/api/urlHistory?url=${encodeURIComponent(domain)}`
    });
