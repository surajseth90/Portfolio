import './style.scss'
// import HeaderLogo from "../../assets/images/logo.webp"
import HeaderLogo from "../../assets/images/header-logo.png"
import CloseIcon from "../../assets/images/close.png"
import { motion } from 'framer-motion';

function Header() {

    const toggleNavbar = () => {
        const menu = document.querySelector(".menu-links-wrapper");
        menu.classList.toggle("open");
        document.body.classList.toggle("overflow-hidden")
    }

    return (
        <header>
            <div className="container nav-container flex-center">
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 1
                    }}
                    className="nav-wrapper d-flex">
                    <img src={HeaderLogo} alt="logo" className="logo-img" />

                    <ul className="nav-links flex-center">
                        <li><a href="#about" className="navbar-menu">About</a></li>
                        <li><a href="#skills" className="navbar-menu">Skills</a></li>
                        <li><a href="#experience" className="navbar-menu">Experience</a></li>
                        <li><a href="#projects" className="navbar-menu">Projects</a></li>
                        <li><a href="#contact" className="navbar-menu">Contact</a></li>
                    </ul>
                </motion.div>

                <div className='d-none mobile-navbar'>
                    <img src={HeaderLogo} alt="logo" className="logo-img" />
                    <div className="hamburger-icon" onClick={toggleNavbar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links-wrapper">

                        <button className='mobile-close-btn' onClick={toggleNavbar} aria-label='close' title='close'>
                            <img src={CloseIcon} aria-hidden alt='close' />
                        </button>

                        <ul className="menu-links">
                            <li><a href="#about" className='navbar-menu' onClick={toggleNavbar}>About</a></li>
                            <li><a href="#skills" className='navbar-menu' onClick={toggleNavbar}>Skills</a></li>
                            <li><a href="#experience" className='navbar-menu' onClick={toggleNavbar}>Experience</a></li>
                            <li><a href="#projects" className='navbar-menu' onClick={toggleNavbar}> Projects</a></li>
                            <li><a href="#contact" className='navbar-menu' onClick={toggleNavbar}>Contact</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;