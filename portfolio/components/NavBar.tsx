import Image from 'next/image';
import mrnJojo from '../assets/Images/Avatar1.png';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useState, useEffect } from 'react';


const NavBar = () => {
    const [navBarActive, setNavBarActive] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (typeof window !== 'undefined' && window.scrollY >= 80) {
                setNavBarActive(true);
            } else {
                setNavBarActive(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header className={`navBar ${navBarActive ? 'active' : 'navBar'}`}>
            <div className='navBar__flex'>
                <Image
                    src={mrnJojo}
                    alt='Dessin de moi en version Jojo Bizarre Adventure'
                    width={100}
                    height={100}
                />
                <nav className='navBar__nav'>
                    <ul>
                        <li>
                            <ScrollLink to="home" smooth={true} duration={100}>Accueil</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth={true} duration={100}>À Propos</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="myProjects" smooth={true} duration={100}>Mes Projets</ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contact" smooth={true} duration={100}>Contact</ScrollLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;
