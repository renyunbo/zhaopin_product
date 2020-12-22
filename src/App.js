/*
 * @Descripttion: 
 * @version: 
 * @Author: sueRimn
 * @Date: 2020-12-22 14:25:07
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-12-22 14:36:37
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import DragDemo from './Drag/DragDemo';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <DragDemo></DragDemo>
    </div>
  );
}

export default App;
