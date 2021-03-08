/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-22 14:25:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-08 17:50:50
 */
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import DragDemo from './container/Drag/DragDemo';
// import DragOrder from './container/DragOrder/DragOrder';
// import CrossArea from './container/CrossAreaDrag/CrossArea/CrossArea';
// import CanvasSignature from './container/CanvasSignature/CanvasSignature';
// import Signature from './container/Signature/Signature';
// // import ReduxDemo from './container/ReduxDemo/ReduxDemo';
// import AsyncRedux from './container/AsyncRedux/AsyncRedux';
// import ClickCount from './container/ReactHooks/ClickCount';
// import LifeCycles from './container/ReactHooks/LifeCycles';
// import FriendStatusClass from './container/ReactHooks/FriendStatusClass';
// import FriendStatusFn from './container/ReactHooks/FriendStatusFn';
// import UseRefDemo from './container/ReactHooks/UseRefDemo';
// import UseContextDemo from './container/ReactHooks/UseContextDemo';
// import UseReducerDemo from './container/ReactHooks/UseReducerDemo';

// import UseMemoDemo from './container/ReactHooks/UseMemoDemo';

import CustomHookUse from './container/ReactHooks/CustomHookUse';

// import UseStateTrap from './container/ReactHooks/UseStateTrap';

// import UseEffectChangeState from './container/ReactHooks/UseEffectChangeState';




function App() {
  const [flag,setFlag] = useState(true);
  const [id,setId] = useState(1);
  
  return (
    <div className="App">
     {/* <button onClick={()=>{setFlag(false)}}>显示/隐藏</button> */}
      {/* <DragDemo></DragDemo> */}
      {/* <DragOrder></DragOrder> */}
      {/* <CrossArea /> */}
      {/* 拖拽排序 */}
      {/* <CanvasSignature /> */}

      {/* 企业签章 */}
      {/* <Signature /> */}
      {/* redux demo */}
      {/* <ReduxDemo></ReduxDemo> */}
      {/* <AsyncRedux></AsyncRedux> */}
      {/* <ClickCount></ClickCount> */}
      {
        // flag &&  <LifeCycles />
      }
      {/* <FriendStatusClass /> */}


      {/* <div>
        <button onClick={()=>{setFlag(false)}}>flag = false</button>
        <button onClick={()=>{setId(id+1)}}>id++</button>
      </div> */}
      {/* {
        flag && <FriendStatusFn friendId={id} />
      }
      <FriendStatusFn /> */}

      {/* <UseRefDemo /> */}
      {/* <UseContextDemo /> */}
     {/* <UseReducerDemo /> */}
     {/* <UseMemoDemo /> */}
     <CustomHookUse />
     {/* <UseStateTrap /> */}
     {/* <UseEffectChangeState /> */}
    </div>
  );
}

export default App;
