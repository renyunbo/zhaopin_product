/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-22 14:25:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2021-02-09 07:41:46
 */
import React from 'react';
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




function App() {
  return (
    <div className="App">
     
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
      <ClickCount></ClickCount>
    </div>
  );
}

export default App;
