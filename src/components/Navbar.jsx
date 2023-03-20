import React, { useState } from 'react';
import './navbar.css';
import logo from './../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import {GoThreeBars} from 'react-icons/go';
import {MdOutlineClose} from 'react-icons/md';

const Navbar = () => {
    const [navShowing, setNavShowing] = useState(false);
  return (
      <nav>
          <div className="container nav_container">
            <Link to="/" className='logo' onClick={() => setNavShowing(false)}>
                <img src={logo} alt="Navbar Logo" />
            </Link> 

              <ul className={`nav_links ${navShowing ? 'show_nav' : 'hide_nav'}`}>
                {
                    links.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setNavShowing(prev => !prev)}>{ name }</NavLink>
                            </li>
                        )}
                )}
            </ul>

              <button className="nav_toggle-btn" onClick={() => setNavShowing(prev => !prev)}>
                  {
                      navShowing ? <MdOutlineClose /> : <GoThreeBars />
                  }
              
            </button>
          </div>
          
    </nav>
  )
}

export default Navbar