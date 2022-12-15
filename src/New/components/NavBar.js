import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/navbar.scss';
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineRight } from 'react-icons/ai';
import logo from "../logo/logo.png"
const NavBar = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };




    return (


        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>


            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <NavLink to="/"><img src={logo} alt="Crybox" /></NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">
                            <li><Link class="hover-underline-animation" smooth to="#home">Home</Link></li>
                            <li><Link class="hover-underline-animation" smooth to="#about">About</Link></li>
                            <li><Link class="hover-underline-animation" smooth to="#service">Service</Link></li>
                            <li><Link smooth to="#blog">Bolg</Link></li>
                            <li><Link smooth to="#detail">Details</Link></li>
                            <li><Link smooth to="#contact">Contact</Link></li>

                        </ul>
                    </nav>
                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default NavBar;