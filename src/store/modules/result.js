/*
 * @Author: your name
 * @Date: 2019-12-24 11:18:24
 * @LastEditTime: 2019-12-24 11:21:27
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /liebao/koot-clinic/src/store/modules/result.js
 */
import { FETCH_RESULT } from '@constants/actions';
import { get as getResult } from '@api/result';

const reducerUpdateById = '__RESULT_UPDATE_BY_ID__';

export default {
    state: {},
    reducers: {
        [reducerUpdateById](state, payload = {}) {
            const { result, id } = payload;
            if (result && id) state[id] = result;
            return state;
        }
    },
    actions: {
        [FETCH_RESULT](
            {
                commit,
                state
                //rootState, dispatch
            },
            payload = {}
        ) {
            const { id } = payload;
            if (!id) return;

            // 如果存在处理完毕的结果，直接返回
            if (typeof state[id] === 'object')
                return new Promise(resolve => resolve(state[id]));

            return getResult(id)
                .then(result => commit(reducerUpdateById, { result, id }))
                .then(r => r.payload.result);
        }
    },
    modules: {}
};
