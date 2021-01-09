/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-05 16:24:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-05 17:26:47
 */
// import * as types from './constants/ActionTypes';
import * as types from '../constant/ActionTypes';
const initialState = {
    cart: [
        {
          product: 'bread 700g',
          quantity: 2,
          unitCost: 90
        },
        {
          product: 'milk 500ml',
          quantity: 1,
          unitCost: 47
        }
      ]
};
export default function(state=initialState,action){
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                cart:[...state.cart,action.payload]
            }
        case types.UPDATE_CART:
            return {
              ...state,
              cart: state.cart.map(item => item.product === action.payload.product ? action.payload : item)
            }
        case types.DELETE_FROM_CART:
            return {
              ...state,
              cart:state.cart.filter(item=>item.product !== action.payload.product)
            }
        default:
            return state;
    }
}