import { createReduxModuleStore, applyMiddleware } from 'koot-redux';
import { reduxForCreateStore } from 'koot';

import resultModule from './modules/result';
import historyModule from './modules/history';

export default () => {
    let middlewares;
    if (__CLIENT__ && __DEV__) {
        middlewares = require('redux-devtools-extension').composeWithDevTools(
            applyMiddleware(...reduxForCreateStore.middlewares)
        );
    }

    return createReduxModuleStore(
        {
            state: {
                ...reduxForCreateStore.reducers
            },
            reducers: {},
            actions: {},
            modules: {
                result: resultModule,
                history: historyModule
            }
        },
        reduxForCreateStore.initialState,
        middlewares
    );
};
