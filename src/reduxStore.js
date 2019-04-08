import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import statisticsReducer from './reducer/statisticsReducer'

let getMiddleware = () => {
    if (process.env.NODE_ENV === 'development') {
        return applyMiddleware(thunk, logger);
    } else {
        return applyMiddleware(thunk);
    }
}

let store = createStore(
    combineReducers({
        statistics : statisticsReducer
    }),
    getMiddleware(),
);

export default () => {
    return store;
}
