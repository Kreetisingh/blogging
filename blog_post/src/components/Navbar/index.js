import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/


const Navbar = (props) => {
  
  const[search,setSearch] = useState(false);

  const submitSearch = (e) =>{
    e.preventDefault();
    alert("Searched");
  }

  const openSearch = () =>{
    setSearch(true);
  }

  const searchClass=search?'searchInput active':'searchInput';

  return(
    <div className="navbar">
        <ul >
            <li> <NavLink to="/"> Home</NavLink></li>
            <li><NavLink to="/about-us">About us</NavLink></li>
            <li><a href="https://www.youtube.com/channel/UCCDjoOPSNiuLJX06HirPjOA?sub_confirmation=1">Learn Blogging</a></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
    <div className="search">
      <form onSubmit={submitSearch}>
        <input type="text" className={searchClass} placeholder="Search"/>
        <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search_icon.png')} alt="Search"/>
      </form>
    </div>
    </div>
   )

 }

export default Navbar