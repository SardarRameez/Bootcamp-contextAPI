import React,{ useReducer } from 'react';
import numReducer from './numReducer';

function Child_2(){
    let [state,dispatch]=useReducer(numReducer,52)
    return (
        <div>
            Child_2 {state}
            <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
        </div>
    );
}
export default Child_2;