//4-december 2023(4-12-2023)// thik kiya yeh code ko 11-12-23

import { Link, Outlet } from "react-router-dom";
import React from 'react';
import Child1 from "./Child1";

function Props_drill(obj_props){
    console.log("Hey i am in Props Drilling")

    console.log(obj_props.age)
    console.log(obj_props.name)
    




    return <div>

        
      <h1> hey this is page of Propsdrilling ,here parameters re passed in function() </h1>
      <Child1 naam="Ansh" umar="21"/>;

        
      






    </div>
}

export default Props_drill;