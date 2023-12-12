import { Link, Outlet } from "react-router-dom";
import React from 'react';

function NavLink(){
    return <div>

        <Link to="about">About</Link> <br/>
        <Link to="hello">Hello</Link> <br/>
        <Link to="home">Home</Link> <br/>
        <Link to="register">Register</Link> <br/>
        <Link to="login">Login</Link> <br/>
        <Link to="contact">Contact</Link> <br/>
        <Link to="notfound">NotFound</Link> <br/>
        <Link to="userinfo">UserDetail</Link> <br/>
        {/* <Link to="experiments">Array_Obj_exp</Link> */}
        <Link to="props_drill">Props_drill</Link> <br/>

        <Link to="accessweather">Weather</Link><br/>
        
        <Link to="accessweather2">Weather2</Link> <br/>

        <Link to="accessweather3">Weather3</Link> <br/>
        
        
      





        {/* <a href="about">About</a> <br />
        <a href="hello">Hello</a>  */}

        <Outlet />

    </div>
}

export default NavLink;