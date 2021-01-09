/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-05 16:26:01
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-06 14:35:02
 */
import {createStore} from 'redux';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools());

export default store;
