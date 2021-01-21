/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-05 16:24:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-10 11:01:48
 */
import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productReducer from './productReducer';

const allReducers = {
    productReducer,
    cartReducer,
};
const rootReducer = combineReducers(allReducers);
export default rootReducer;