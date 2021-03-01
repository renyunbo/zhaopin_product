/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-22 14:25:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-03-01 17:32:50
 */
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import DragDemo from './container/Drag/DragDemo';
import DragOrder from './container/DragOrder/DragOrder';
import CrossArea from './container/CrossAreaDrag/CrossArea/CrossArea';
import CanvasSignature from './container/CanvasSignature/CanvasSignature';
import Signature from './container/Signature/Signature';
import ReduxDemo from './container/ReduxDemo/ReduxDemo';
import AsyncRedux from './container/AsyncRedux/AsyncRedux';
import ClickCount from './container/ReactHooks/ClickCount';
import LifeCycles from './container/ReactHooks/LifeCycles';




function App() {
  const [flag,setFlag] = useState(true);
  
  return (
    <div className="App">
     <button onClick={()=>{setFlag(false)}}>显示/隐藏</button>
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
        flag &&  <LifeCycles />
      }
     
    </div>
  );
}

export default App;
