import React,{useState} from 'react';

function ClickCount(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('aa');

    function handleAdd(){
        setCount(count+1);
        setName(name+'111');
    }
    return <div>
        <p>点击了{count}次</p>
<p>{name}</p>
        <button onClick={handleAdd}>add</button>
    </div>
}
export default ClickCount;