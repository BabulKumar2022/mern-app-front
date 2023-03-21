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
      { auth ?
        <ul className='nav-ul'>
            <li><Link to="/">All product</Link></li>
            <li><Link to="/add">Add</Link></li>
            <li><Link to="/update">Update</Link></li>
            <li><Link  to="/profile">Profile</Link></li>
            <li ><Link onClick={logout} to="/signup">Logout</Link> </li>
           </ul>
              :
           <ul className='nav-ul '>
            <div className='sign-log'>
                <li > <Link to="signup">Sign Up</Link></li>
                <li > <Link to="login">Login</Link></li>
            </div>

          </ul>
        }
    </div>
  )
}

export default Navbar;