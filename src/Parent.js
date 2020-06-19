import React from 'react';
import Child from './Child.js';


function Parent(props){
    return (
        <div>
            Hello from parent.js {props.num}
            <Child num={props.num}></Child>
        </div>
    );
}
export default Parent;