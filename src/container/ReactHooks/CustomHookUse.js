/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-05 16:02:40
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-05 16:08:07
 */
import React from 'react';
import useMousePosition from './useMousePosition';

function App(){
    const [x,y] = useMousePosition();

    return <div style={{height:'500px',background:'green'}}>
        当前位置：{x} {y}
    </div>
}

export default App;