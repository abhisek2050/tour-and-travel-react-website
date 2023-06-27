import React, { useState } from 'react'
import './NavbarStyle.css';
import menuItems from "../repeat/menuItems"
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [click , setClick] = useState(false);
  const barClicked =()=>{
    setClick(!click);
  }
  return (
    <div>
        <nav className="navbarItems">
            <h1 className="navbar-logo">Tripx</h1>
            <div className="menu-icons" onClick={barClicked}>
              <i className={click? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={click?"nav-menu active" : "nav-menu"}>
              {
                menuItems.map((obj,index)=>{
                  return(                  
                      <li key={index}>
                        <NavLink to={obj.url} className={obj.clsName}>
                          <i className={obj.icon}></i>
                          {obj.title}</NavLink>
                      </li>
                  )
                })
              }
            </ul>
        </nav>
    </div>
  )
}

export default Navbar