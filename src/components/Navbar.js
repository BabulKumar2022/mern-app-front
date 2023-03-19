import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Nav.css"

const Navbar = () => {
   const auth = localStorage.getItem('user');
   const navigate = useNavigate();
   const logout = ()=>{
    localStorage.clear();
    navigate('/signup')
   }
  return (
    <div>
        <ul className='nav-ul'>
            <li><Link to="/">All product</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/update">Update</Link></li>
           
            <li><Link  to="/profile">Profile</Link></li>
            <li>{ auth ?  <Link onClick={logout} to="/signup">Logout</Link> :<Link to="/signup">Signup</Link>}</li>

        </ul>
    </div>
  )
}

export default Navbar