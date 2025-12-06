import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import {GraduationCap,Menu,House} from 'lucide-react'
import serviceIcon from '../assets/service.png'
import houseIcon from '../assets/house.png'
import infoIcon from '../assets/information.png'
import contactIcon from '../assets/phone-chat.png'
import logo from '../assets/logo.png'
import './Navbar.css'



function Navbar() {
    const [sticky,setSticky] = useState(false)

    useEffect(()=> {
    window.addEventListener('scroll',()=>{
        window.scrollY > 610 ? setSticky(true):setSticky(false);
    })
    })

    const [mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu = () => {
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`${sticky ? 'blur-nav' : ''}`} >
    <h3 className='logo1'><img src={logo} alt="" /><br />Deon Ellison Foundation</h3>

    <ul className={mobileMenu? '':'hide-mobile-menu'}>
        <li><Link to="hero" smooth={true} offset={0} duration={300}><img src={houseIcon} alt="Home" />Home</Link></li>
        <li><Link to="services" smooth={true} offset={-234} duration={300}><img src={serviceIcon} alt="Service" />Services</Link></li>
        <li><Link to="about" smooth={true} offset={-80} duration={300}><img src={infoIcon} alt="Our Work" />Our Work</Link></li>
    
        
        <li><Link to="contact" smooth={true} offset={-240} duration={300}><img src={contactIcon} alt="Contact Us" />Contact Us</Link></li>
    </ul>
        <Menu className='menu-icon' onClick=
        {toggleMenu}/>
    </nav>
  )
}


export default Navbar