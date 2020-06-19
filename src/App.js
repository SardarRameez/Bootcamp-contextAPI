import React, {useState} from 'react';
import './App.css';
import Parent from './Parent.js';

function App() {
  let [num,setNum]=useState(6);
  return (
    <div>
      Hello World App.js
      <Parent num={num}></Parent>
      <button onClick={()=>setNum(++num)}>Increment</button>
    </div>
  );
}

export default App;
