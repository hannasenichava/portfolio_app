import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <div className='nav-container'>
            <div className='logo-container'>Hanna Senichava</div>
            <div className='menu-container'>
                    <Link className='menu-links' to='/'>
                        Home
                    </Link>
                    <Link className='menu-links' to='/about'>
                        About
                    </Link>
                    <Link className='menu-links' to='/projects'>
                        Projects
                    </Link>
                    <Link className='menu-links' to='/contact'>
                        Contact
                    </Link>
             </div>
        </div>
    )
}

export default Navbar