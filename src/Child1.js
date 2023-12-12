import React from 'react';
import Child2 from './Child2';
function Child1(props){
   

    return <div> {props.naam}
    <br/>

    {props.umar} i am child1 <Child2 naam={props.naam} umar={props.umar}/></div>
    
}

export default Child1;