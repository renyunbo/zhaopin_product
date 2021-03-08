/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-08 16:48:37
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-08 17:30:20
 */
import React, { useState, useEffect, useRef } from 'react';

function UseEffectChangeState() {
    const [count, setCount] = useState(0);
    // 模拟componentDidMount
    const countRef = useRef(0);
    useEffect(()=>{
        let timer = ()=>{
            setCount(++countRef.current);
        }
        window.setInterval(timer,1000);
    },[])

    return <div>{count}</div>
}
export default UseEffectChangeState;