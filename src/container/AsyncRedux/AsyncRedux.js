/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-10 11:08:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-10 11:28:13
 */
import React from 'react';
import {connect} from 'react-redux';
import {asyncAddToCart} from '../../redux/actions/cartActions';

class AsyncRedux extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    // 模拟异步添加购物车
    handleAddCart = ()=>{
        const {dispatch} = this.props;
        dispatch(asyncAddToCart());
    }
    render(){
        const {cartReducer={}} = this.props;
        return(
            <div>
                <p>异步action测试</p>
                <button onClick={this.handleAddCart}>添加购物车</button>
                <p>数据添加之后数据展示</p>
                {
                    cartReducer.cart &&  cartReducer.cart.map((item,i)=>{
                        return <div key={i}>
                            {item.product}-{item.quantity}-{item.unitCost}
                        </div>
                    })
                }
            </div>
        )
    }
}
const mapState = (state)=>{
    const {cartReducer} = state;
    return{
        cartReducer
    }
}
export default connect(mapState)(AsyncRedux);