import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from './Images/Hipppie3.png';
import './css/NavBar.css'
import './css/home.css'
import './css/about.css'
import './css/media.css'
import './css/adventure.css'
import './css/comments.css'
import './css/adventureCard.css'
import './css/app.css'


const NavBar = () => {
  return (
  <nav class="navBar">
    <img src={logo} alt="Hipppie3 image"/>
    <ul>
      <li>
      <NavLink to='/home' className="home">Home</NavLink>
     </li>
     <li>
      <NavLink to='/about' className="about">About</NavLink>
     </li>
     <li>
      <NavLink to='/adventure' className="adventure">Adventure</NavLink>
     </li>
     <li>
      <NavLink to='/comments' className="comments">Comments</NavLink>
      </li>
     <li>
      <NavLink to='/media' className="media">Media</NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default NavBar
