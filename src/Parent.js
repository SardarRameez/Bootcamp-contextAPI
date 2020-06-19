import React from 'react';
import Child from './Child.js';
import Child_2 from './Child_2.js'


function Parent(){
    return (
        <div>
            Hello from parent.js 
            <Child></Child>
            <Child_2></Child_2>
        </div>
    );
}
export default Parent;