/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-03 13:56:54
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-03 14:27:47
 */
import React,{useRef,useEffect} from 'react';

function UseRefDemo(){
    const btnRef = useRef(null);//初始值
    useEffect(()=>{
        console.log(btnRef.current);//DOM节点
    });

    return <div>
        <div ref={btnRef}>aa</div>
    </div>
}
export default UseRefDemo;