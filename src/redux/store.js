import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

// eslint-disable-next-line no-undef
if (module.hot) {
    // eslint-disable-next-line no-undef
    module.hot.accept('./reducers', () => {
        // eslint-disable-next-line no-undef
        const nextCombineReducers = require('./reducers').default;
        store.replaceReducer(nextCombineReducers);
    });
}

export default store;
