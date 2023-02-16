import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footerLinks">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p>Copyright &copy; 2023</p>
      <p className='reserved'>All rights reserved</p>
    </div>
  )
}

export default Footer
