import Image from 'next/image';
import mrnJojo from '../assets/Images/mrnJojo1.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';


const NavBar = () => {
    const [navBarActive, setNavBarActive] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const onScroll = () => {
        if (window.scrollY >= 80) {
            setNavBarActive(true);
        } else {
            setNavBarActive(false)
        }
    }

    window.addEventListener('scroll', onScroll)

    return (
        <header className={`navBar ${navBarActive ? 'active' : 'navBar'}`}>
            <div className='navBar__flex'>
                <ScrollLink to="home" smooth={true} onClick={scrollToTop}>
                    <Image
                        src={mrnJojo}
                        alt='Dessin de moi en version Jojo Bizarre Adventure'
                        width={100}
                        height={100}
                    />
                </ScrollLink>
                <nav className='navBar__nav'>
                    <ul>
                        <li>
                            <ScrollLink to="home" smooth={true}>Accueil</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth={true}>À Propos</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="myProjects" smooth={true}>Mes Projets</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contact" smooth={true}>Contact</ScrollLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
