import React, { useState, useEffect } from 'react';
import './App.css';
import Editor from './style-editor';
import Cat from './cat';
import Boy from './boy';

const isPc = (function () {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
})();

function App() {
  const fullStyle = [
    `  .drawing-holder{
    width: 100px;
    height: 100px;
    position: absolute;
    margin-top: -50px;
    margin-left: -50px;
    top: 50%;
    left: 50%;
  }
  .cat-face{
    background-color: #E58C56;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: block;
    position: relative;
    float: left;
  }
  
  .cat-nose{
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: 4px;
    width: 0px;
    height: 0px;
    border-right: 46px solid transparent;
    border-left: 46px solid transparent;
    border-bottom: 82px solid #fff;
    border-radius: 50%;
  }
  
  .cat-nose:after{
    display: block;
    content: "";
    position: absolute;
    top: 50px;
    left: 50%;
    margin-left: -5px;
    width: 0;
    height: 0;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    border-top: 5px solid #000;
  }
  
  .cat-mouth{
    width: 50px;
    height: 11px;
    position: absolute;
    top: 73px;
    left: 50%;
    margin-left: -25px;
    z-index: 2;
    overflow: hidden;
  }
  
  .cat-mouth:before{
    content: "";
    display: block;
    position: absolute;
    left: 3px;
    bottom: 0;
    border: 2px solid #000;
    width: 19px;
    height: 13px;
    border-radius: 50%;
  }
  
  .cat-mouth:after{
    content: "";
    display: block;
    position: absolute;
    right: 3px;
    bottom: 0;
    border: 2px solid #000;
    width: 19px;
    height: 13px;
    border-radius: 50%;
  }
  
  .cat-eyes{
    position: absolute;
    top: 50px;
    width: 55px;
    left: 50%;
    margin-left: -27px;
    z-index: 2;
  }
  
  .cat-eyes:before{
    position: absolute;
    display: block;
    content: "";
    width: 13px;
    height: 13px;
    background-color: #000;
    left: 0;
    top: 0;
    border-radius: 50%;
  }
  
  .cat-eyes:after{
    position: absolute;
    display: block;
    content: "";
    width: 13px;
    height: 13px;
    background-color: #000;
    right: 0;
    top: 0;
    border-radius: 50%;
  }
  
  .cat-face:before{
    position: absolute;
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 40px solid #E58C56;
    border-radius: 5px;
    left: -15px;
    top: -5px;
    transform: rotate(-40deg);
  }
  
  .cat-face:after{
    position: absolute;
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 40px solid #E58C56;
    border-radius: 5px;
    right: -15px;
    top: -5px;
    transform: rotate(40deg);
  }`
  ];
  let [currentStyleCode, setCurrentStyleCode] = useState('');

  const progressiveShowStyle = async (n = 0) => {
    const showStyle = (i) =>
      new Promise((resolve) => {
        const style = fullStyle[n];
        const char = style[i];
        if (!style || !char) {
          resolve();
          return;
        }
        currentStyleCode += char;
        setCurrentStyleCode(currentStyleCode);
        // if (char === '\n' && this.styleEditor) {
        //   this.styleEditor.toBottom();
        // }
        setTimeout(() => {
          resolve(showStyle(i + 1));
        }, 30);
      });
    return showStyle(0);
  };

  const start = async () => {
    await progressiveShowStyle(0);
  };

  useEffect(() => {
    if (!currentStyleCode) {
      // start();
    }
  }, [currentStyleCode]);

  return (
    <div>
      <div style={{ display: isPc ? 'flex' : '' }}>
        {/* <Editor code={fullStyle} /> */}
        <Cat />
        {/* <Boy /> */}
      </div>
    </div>
  );
}

export default App;
