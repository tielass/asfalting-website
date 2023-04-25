import Logo from '../assets/logo.png'
import { NavLink, Link } from 'react-router-dom'
// import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import '../style/Navbar.css'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext';
import Switch from '@mui/material/Switch';


function Navbar() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className='navbar'>
      <div className="leftSide">
        <Link className='logoLink' to="/">
          <img src={ Logo } alt="Logo" />
        </Link>
      </div>
      <div className="rightSide">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/contact">CONTACT US</NavLink>
        <Switch
        checked={ theme === "dark" }
        onChange={ toggleTheme }
        color="warning"
        />
        {/* <button>
          <ReorderOutlinedIcon />
        </button> */}
      </div>
    </div>
  )
}

export default Navbar
