import React from 'react'
import { Hidden } from '@mui/material';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
export default function Navbar() {
  return (
    <div>
          <Hidden smDown>
          <div className='navbarSection'> 
<NavDropdown />
                <ul className='navList'>
                <li> 
                </li>
                <li><Link className='link' to='/vehicles'>House</Link></li>
                 <li><Link className='link' to='/phone'>Aptments</Link></li>
                  <li><Link className='link' to='/bike'>Tiny Home</Link></li>
                  <li><Link className='link' to='/electronics'>Mixed-Use Properties</Link></li>
                  <li><Link className='link' to='/house-plot'>Agricultural Properties</Link></li>
                  <li><Link className='link' to='/tablet'>Industrial Properties</Link></li>
                  <li><Link className='link' to='/animals'>Industrial Properties</Link></li>
                </ul>
                </div>
                </Hidden>
        </div>
  )
}
