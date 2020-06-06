import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import { rootReducer } from '../reducers';
const sagaMiddleware = createSagaMiddleware();
const devTools = process.env.NODE_ENV === 'development';
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
export const Store = configureStore({
    reducer: rootReducer,
    devTools,
    middleware
})
sagaMiddleware.run(rootSaga);
