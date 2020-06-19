import React, {useContext} from 'react';
import ValueContext from './newContext';

function Child(){
    let value=useContext(ValueContext);
    return (
        <div>
            Child component {value[0]}
            <button onClick={()=>{value[1](++value[0])}}>Update Value</button>
        </div>
    );
}
export default Child;