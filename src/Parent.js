import React from 'react';
import Child from './Child.js';


function Parent(){
    return (
        <div>
            Hello from parent.js 
            <Child></Child>
        </div>
    );
}
export default Parent;