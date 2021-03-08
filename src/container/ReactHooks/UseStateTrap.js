/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-05 17:27:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-08 16:31:05
 */
import React, { useState } from 'react';

// 子组件
function Child({ userInfo }) {
    // render：初始化state
    // re-render:只恢复初始化state值，不会再重新设置新的值
    // 只能用setName修改
    const [name, setName] = useState(userInfo.name);

    return <div>
        <p>Child,props name is:{userInfo.name}</p>
        <p>Child,state name is:{name}</p>
    </div>
}

function App(){
    const [name,setName] = useState('zhangsan');
    const userInfo = {name};

    return <div>
        parent:
        <button onClick={()=>{setName('慕课网')}}>setName</button>
        <Child userInfo={userInfo} />
    </div>
}

export default App;