import { Result } from '@types';
import request from '@utils/request';

export const get = (resultId: string): Promise<Result> =>
    request<Result>('get', {
        url: `/api/result?id=${resultId}`
    });
