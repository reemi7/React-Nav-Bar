import React  from 'react'
import { useState } from 'react'

function Navbar() {
    const [active, setactive] = useState('nav__menu')

    const [toggleIcon,setToggleIcon] =useState('nav__toggler')

    const navtoggler =()=>{
        active=='nav__menu'?setactive('nav__menu nav__active'):setactive('nav__menu')

        // Toggler Icon

        toggleIcon === "nav__toggler"
        ? setToggleIcon("nav__toggler toggle")

        : setToggleIcon("nav__toggler");
    }

    return (
        <nav className="nav">
            <a href="" className="nav__brand">logo</a>
            <ul className={active}>
                <li className="nav__item">
                    <a href="/" className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a href="/About" className="nav__link">About</a>
                </li>
                <li className="nav__item">
                    <a href="/Skills" className="nav__link">Skills</a>
                </li>
                <li className="nav__item">
                    <a href="/Portfolio" className="nav__link">Portfolio</a>
                </li>
                <li className="nav__item">
                    <a href="/Contact" className="nav__link">Contact</a>
                </li>
            </ul>
            <div  onClick={navtoggler} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
    )
}
export default Navbar;