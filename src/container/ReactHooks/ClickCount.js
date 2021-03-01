import React,{useState} from 'react';
function ClickCount(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('张三');
    
    function handleAdd(){
        setCount(count+1);
        setName(name+'2020');
    }
    return <div>
        {count} {name}
        <button onClick={handleAdd}>添加</button>
    </div>
}
export default ClickCount;