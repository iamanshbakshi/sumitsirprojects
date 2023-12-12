import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Hello from './Hello';
import About from './About';
import NavLink from './NavLink';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Contact from './Contact';
import NotFound from './NotFound';
import UserDetail from './UserDetail';
import Weather from './Weather';
import Weather2 from './Weather2';
import Weather3 from './Weather3';
import Props_drill from './Props_drill';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<NavLink />}>
         <Route path="about" element={<About />} />
          <Route path="hello" element={<Hello />} />
          <Route path="*" element={<NotFound />} /> 
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} /> 
          <Route path="register" element={<Register/>} /> 
          <Route path="contact" element={<Contact />} /> 
          <Route path="accessweather" element={<Weather />}/>
        
          <Route path="userinfo" element={<UserDetail />} />

          <Route path="props_drill" element={<Props_drill age="21" name="Ansh Bakshi" />} />
          
          <Route path="accessweather" element={<Weather />} />

          <Route path="accessweather2" element={<Weather2 />}/>

          <Route path="accessweather3" element={<Weather3 />}/>
         

          
        </Route>


        {/* <Route path="/admin" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="hello" element={<Hello />} />
          <Route path="*" element={<NotFound />} />
          <Route path="user-info" element={<User_Detail}/>} />
        </Route> */}
      </Routes>
  </BrowserRouter> 
  );
}

export default App;
