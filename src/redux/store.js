/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-05 16:26:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-10 11:16:41
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    composeWithDevTools()
);

export default store;
