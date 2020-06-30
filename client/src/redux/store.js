import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root.reducer.js';
import logger from 'redux-logger';

const middleware = [];
if(process.env.NODE_ENV === 'development') middleware.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middleware));