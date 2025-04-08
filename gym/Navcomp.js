import React from 'react'
import { Link } from 'react-router-dom'
import hello from "../img/Readyimg";
import './Ram.css';
import './home.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import "./abhi.css"
import logo from "../img/logogym.jpg";
const Navcomp = () => {
    return (
        <div className='header-bgcolor' >
            <p className="Ram"> WELCOME TO THE NEW GYM MANTRA</p>
          <div ><img src={logo} className="abhi" /></div>
           
            {"   "}<p className='home'> <LinkContainer to="/Home">
  <Link  to="Home">Home</Link>
</LinkContainer>{"   "}{"   "}
            <Link  to="About" > About</Link>{"   "}
            <Link to="Contact" > Contact</Link>{"   "}
            <Link to="Login" > Login</Link> </p>
            
        </div>
    )
}

export default Navcomp
