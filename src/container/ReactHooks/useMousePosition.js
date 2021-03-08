/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-05 15:57:10
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-08 18:06:48
 */
// import { useState, useEffect } from 'react';

import { useState, useEffect } from "react";


function useMousePosition(){
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    useEffect(()=>{
        function mouseMoveHandle(event){
            setX(event.clientX);
            setY(event.clinetY);
        }
        // 绑定事件
        document.body.addEventListener('mousemove',mouseMoveHandle);
        // 解绑事件
        return ()=>{
            document.removeEventListener('mousemove',mouseMoveHandle);
        }
    },[])
    return [x,y];
}

export default useMousePosition;