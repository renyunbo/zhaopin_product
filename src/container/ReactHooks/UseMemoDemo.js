/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2021-03-03 16:48:41
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-05 14:37:46
 */
import React,{useState,memo,useMemo, useCallback} from 'react';

const Child = memo(({userInfo,onChange})=>{
    console.log('child render。。。');

    return <div>
        <p>this is child {userInfo.name} --- {userInfo.age}</p>
        <input type='text' onChange={onChange} />
    </div>
});

function App(){
    console.log('parent render。。。');
    const [age,setAge] = useState(0);
    const [name,setName] = useState('zhangsan');

    //用useMemo缓存数据
    const userInfo = useMemo(()=>{
        return {age,name};
    },[name]);//依据哪个元素重新渲染

    //用useCallback缓存函数
    const onChange = useCallback(e=>{
        console.log(e.target.value);
    },[]);
    return <div>
        age is {age}

        <button onClick={()=>{setAge(age+1)}}>age++</button>
        <Child userInfo={userInfo} onChange={onChange}></Child>
    </div>
}

export default App;