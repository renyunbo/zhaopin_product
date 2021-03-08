/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-03 15:47:46
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-03 16:28:24
 */
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count = 1 }
            break;
        case 'decrement':
            return { count: state.count + 1 }
            break;
        default:
            break;
    }
}
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <div>
        count：{state.count}
        <button onClick={() => { dispatch({ type: 'increment' }) }}>increment</button>
        <button onClick={() => { dispatch({ type: 'decrement' }) }}>decrement</button>
    </div>
}
export default App;