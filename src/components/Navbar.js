import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Navbar = () => {
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">All product</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/signup">Signup</Link></li>

        </ul>
    </div>
  )
}

export default Navbar