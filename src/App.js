import React, {useState} from 'react';
import './App.css';
import Parent from './Parent.js';
import ValueContext from './newContext.js';

function App() {
  //let [num,setNum]=useState(6);
  let value=useState(6)
  return (
    <ValueContext.Provider value={value}>
        <div>
          Hello World App.js
          <Parent></Parent>
        </div>
    </ValueContext.Provider>
  );
}

export default App;
