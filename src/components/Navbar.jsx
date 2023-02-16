import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import '../style/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="leftSide">
        <img src={ Logo } alt="Logo" />
      </div>
      <div className="rightSide">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT US</Link>
        <Link to="/projects">PROJECTS</Link>
        <Link to="/contact">CONTACT US</Link>
        <button>
          <ReorderOutlinedIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
