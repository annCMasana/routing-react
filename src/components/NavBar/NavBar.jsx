import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contacts">Contacts</Link>
    </nav>
  )
}

export default NavBar