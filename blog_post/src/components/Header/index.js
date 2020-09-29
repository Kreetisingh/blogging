import React from 'react'
import SocialMedia from '../SocialMedia';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Settings</a>
        </nav>
        <div>
            <SocialMedia/>
        </div>

    </header>
   )

 }

export default Header