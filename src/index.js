/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-22 14:25:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-01-10 09:54:22
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
// 进入redux
import store from './redux/store';
import {addToCart,updateCart,deleteFromCart} from './redux/actions/cartActions';

console.log('initial state::::',store.getState());
let unsubscribe = store.subscribe(()=>{
    console.log('subscribe:::::',store.getState());
});
store.dispatch(addToCart('aa',1,100));
store.dispatch(addToCart('bb',2,200));

store.dispatch(updateCart('aa',3,300));
store.dispatch(deleteFromCart('aa'));


unsubscribe()



// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        {<App />}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
