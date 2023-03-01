import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import '../style/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="leftSide">
        <img src={ Logo } alt="Logo" />
      </div>
      <div className="rightSide">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
        <button>
          <ReorderOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
