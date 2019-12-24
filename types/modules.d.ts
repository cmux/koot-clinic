/*
 * @Author: your name
 * @Date: 2019-12-24 11:18:24
 * @LastEditTime: 2019-12-24 11:23:54
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/types/modules.d.ts
 */
import { HTMLAttributes } from 'react';

declare module 'redux' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    interface Dispatch<Result extends any = any, A extends Action = AnyAction> {
        <T extends A>(actionId: string, action: T): Promise<Result>;
    }
}

declare module 'react' {
    // 扩展 JSX: HTML 标签属性 =====================================================
    interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
        /**
         * Native lazy-loading
         * https://web.dev/native-lazy-loading
         */
        loading?: 'lazy' | 'auto' | 'eager';
    }
}
