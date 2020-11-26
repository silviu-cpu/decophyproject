import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)
    
    
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    const scrollingtop = () => {scroll.scrollToTop()}
   
    
    return (
        <>
            <nav className="navbar">
               <div className="navbar-container">
                    
                    <div className="logo a-bounce"  onClick={scrollingtop}>
                
                    </div>                    

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='hero' className='nav-links'  onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='product' className='nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                                Our Products
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='story' className='nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                                Our Story
                            </Link>
                        </li>
                        
                        <li className='nav-item'>
                            <Link to='contact' className='nav-links' smooth={true} duration={1000} onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                   
                    <hr className="line"></hr>
                    
               </div>
            </nav>
        
                    
            
        </>
    )
}

export default Navbar
