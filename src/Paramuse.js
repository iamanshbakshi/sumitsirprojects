import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { useParams } from 'react-router-dom';

function Paramuse(){

    // const [name, setName] = useState();
    let { id } = useParams();
return <div>

   User detail {id} 

</div>
}


export default Paramuse;