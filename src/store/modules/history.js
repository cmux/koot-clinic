import { FETCH_HISTORY } from '@constants/actions';
import { get as getHistory } from '@api/history';

const reducerUpdateByOrigin = '__HISTORY_UPDATE_BY_DOMAIN__';

export default {
    state: {},
    reducers: {
        [reducerUpdateByOrigin](state, payload = {}) {
            const { list, origin } = payload;
            if (list && origin) state[origin] = list;
            return state;
        }
    },
    actions: {
        [FETCH_HISTORY](
            {
                commit,
                state
                //rootState, dispatch
            },
            payload = {}
        ) {
            const { origin } = payload;
            if (!origin) return;

            // 如果存在处理完毕的结果，直接返回
            if (typeof state[origin] === 'object')
                return new Promise(resolve => resolve(state[origin]));

            return getHistory(origin).then(list =>
                commit(reducerUpdateByOrigin, { list, origin })
            );
        }
    },
    modules: {}
};
