/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-01-09 17:39:13
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-10 11:28:23
 */
import React from 'react';
import { connect } from 'react-redux';

class ReduxDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { cartReducer } = this.props;
        console.log('this.props::::::::::',cartReducer);

        return (
            <div>
                <div>redux demo</div>
                {
                    cartReducer.cart && cartReducer.cart.map((item,i)=>{
                        return <div key={i}>
                            {item.product}-{item.quantity}-{item.unitCost}
                        </div>
                    })
                }
            </div>

        )
    }
}


const mapState = (state) => {
    const { cartReducer } = state;
    return {
        cartReducer
    }
}
// 利用connect连接react组件与Redux store，允许我们将store中的数据作为props绑定盗组件上
export default connect(mapState)(ReduxDemo)