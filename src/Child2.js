import React from 'react';
import Child35 from './Child35';
function Child2(props){
  

    return <div>  {props.naam}
    
    <br/>

    {props.umar}  i am child2    <Child35 naam={props.naam} umar={props.umar}/>  </div>
    
}

export default Child2;