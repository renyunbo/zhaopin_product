/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-05 16:23:42
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-10 11:40:32
 */
import * as types from '../constant/ActionTypes';

// 添加购物车
export function addToCart(product,quantity,unitCost){
    return{
        type:types.ADD_TO_CART,
        payload:{product,quantity,unitCost}
    }
}
// 更新购物车
export function updateCart(product,quantity,unitCost){
    return{
        type:types.UPDATE_CART,
        payload:{
            product,
            quantity,
            unitCost
        }
    }
}
// 删除
export function deleteFromCart(product){
    return{
        type:types.DELETE_FROM_CART,
        payload:{
            product
        }
    }
}
// 测试异步添加购物车
export function asyncAddToCart(product,quantity,unitCost){
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(addToCart(1,2,3));
        }, 1000);
    }
}
