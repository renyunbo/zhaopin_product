/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-01 15:07:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-01 17:34:36
 */
import React,{useState,useEffect} from 'react';

function LifeCycles(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('老师');

    // 模拟class组件的 ComponentDidMount 和 ComponentDidUpdate
    // useEffect(()=>{
    //     console.log('再次发送一个ajax请求');
    // })

    // 模拟class组件的ComponentDidMount
    useEffect(()=>{
        console.log('加载完了');
    },[]);//第二个参数是[]，（不依赖于任何state）

    // 模拟 class 中的ComponentUpdateMount
    useEffect(()=>{
        console.log('更新了');
    },[count,name]);//第二个参数表示依赖state，表示那个参数改变了才会去更新
    
    useEffect(()=>{
        let timerId = window.setInterval(()=>{
            console.log(Date.now());
        },1000);
        // 返回一个函数，模拟componentWillUnMount
        return ()=>{
            window.clearInterval(timerId);
        }
    },[]);
    function handleAdd(){
        setCount(count+1);
        setName(name+'aa');
    }
    return <div>
        {count}{name}
        <button onClick={handleAdd}>添加</button>
    </div>
}

export default LifeCycles;