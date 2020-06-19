import React, {useContext} from 'react';
import ValueContext from './newContext';

function Child(){
    let value=useContext(ValueContext);
    return (
        <div>
            Child component {value}
        </div>
    );
}
export default Child;