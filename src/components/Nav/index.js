import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const [currentComponent, setCurrentComponent] = useState('');
    const [openMenu, setOpenMenu] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const menu = document.getElementById("menu");
        const mobileMenu = document.querySelector(".animated-mobile-menu");

        if (openMenu) {
            const rightDistance = window.innerWidth - mobileMenu.getBoundingClientRect().right;
            menu.classList.add("openmenu");
            mobileMenu.style.position = "fixed";
            mobileMenu.style.top = window.pageYOffset + 15 + "px";
            mobileMenu.style.right = rightDistance + "px";
        } else {
            menu.classList.remove("openmenu");
            setTimeout(() => {
                mobileMenu.style.position = "absolute";
                mobileMenu.style.top = "-80px";
                mobileMenu.style.right = "12px";
            }, 500); // matches the transition in the CSS
        }
    }, [openMenu]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const toggleMenu = () => {
        if (!openMenu) {
            setOpenMenu(true);
            setMenuVisible(true);
        } else {
            setOpenMenu(false);
            setTimeout(() => {
                setMenuVisible(false);
            }, 500); //matches the transition in the CSS
        }
    };


    return (
        <>
            <header>
                <nav className={`navbar navbar-dark navbar-expand-lg navbar-fixed-top navigation-clean-button navbar-custom-css${openMenu ? '' : (scrolled ? ' navbar-scrolled' : '')}`}>
                    <div className='container-fluid container nav-container-custom-css p-0'>
                        <div className='container-for-mediaquery'>
                            <h1 className='d-inline-flex brand'>
                                <Link to='/crystaldavila'>
                                    Crystal Davila
                                </Link>
                            </h1>

                            <span className='d-inline-flex text-uppercase secondary-brand-styles'>
                                For P.I.S.D. School Board
                            </span>
                        </div>

                        <div className='container position-relative'>
                            <div className=' animated-mobile-menu'>
                                <div className='menu' id='menu' onClick={toggleMenu}>
                                    <div>
                                        <span className='line-1'></span>
                                        <span className='line-2'></span>
                                        <span className='line-3'></span>
                                    </div>
                                </div>
                            </div>

                            <div className={`row collapse navbar-collapse navMenu${openMenu ? ' openmenu' : ''}`} id='navbarToggleExternalContent'>
                                <ul className='col navbar-nav p-0 text-uppercase'>
                                    <li className='nav-item nav-link-custom-css me-4'>
                                        {currentComponent === 'About' ? (
                                            <Link style={{ color: 'red' }} to='/crystaldavila/about'>
                                                Meet Crystal
                                            </Link>
                                        ) : (
                                            <Link style={{ background: 'transparent' }} to='/crystaldavila/about' onClick={() => {
                                                setCurrentComponent('About')
                                            }}>
                                                Meet Crystal
                                            </Link>
                                        )}
                                    </li>

                                    <li className='nav-item nav-link-custom-css me-4'>
                                        {currentComponent === 'OnTheIssues' ? (
                                            <Link style={{ color: 'red' }} to='/crystaldavila/on-the-issues'>
                                                On The Issues
                                            </Link>
                                        ) : (
                                            <Link style={{ background: 'transparent' }} to='/crystaldavila/on-the-issues' onClick={() => {
                                                setCurrentComponent('OnTheIssues')
                                            }}>
                                                On The Issues
                                            </Link>
                                        )}
                                    </li>

                                    <li className='nav-item nav-link-custom-css me-4'>
                                        {currentComponent === 'Vision' ? (
                                            <Link style={{ color: 'red' }} to='/crystaldavila/vision'>
                                                Vision
                                            </Link>
                                        ) : (
                                            <Link style={{ background: 'transparent' }} to='/crystaldavila/vision' onClick={() => {
                                                setCurrentComponent('Vision')
                                            }}>
                                                Vision
                                            </Link>
                                        )}
                                    </li>

                                    <li className='nav-item nav-link-custom-css'>
                                        {currentComponent === 'GetInvolved' ? (
                                            <Link style={{ color: 'red' }} to='/crystaldavila/get-involved'>
                                                Get Involved
                                            </Link>
                                        ) : (
                                            <Link style={{ background: 'transparent' }} to='/crystaldavila/get-involved' onClick={() => {
                                                setCurrentComponent('GetInvolved')
                                            }}>
                                                Get Involved
                                            </Link>
                                        )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            {openMenu && (
                <div className={`overlay-menu${menuVisible ? ' d-flex' : ''}${openMenu ? ' open' : ''}`}>
                    <ul>
                        <li>
                            <Link
                                to="/crystaldavila/about"
                                onClick={() => {
                                    setCurrentComponent("About");
                                    setOpenMenu(false);
                                }}
                            >
                                Meet Crystal
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/crystaldavila/on-the-issues"
                                onClick={() => {
                                    setCurrentComponent("OnTheIssues");
                                    setOpenMenu(false);
                                }}
                            >
                                On The Issues
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/crystaldavila/vision"
                                onClick={() => {
                                    setCurrentComponent("Vision");
                                    setOpenMenu(false);
                                }}
                            >
                                Vision
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/crystaldavila/get-involved"
                                onClick={() => {
                                    setCurrentComponent("GetInvolved");
                                    setOpenMenu(false);
                                }}
                            >
                                Get Involved
                            </Link>
                        </li>
                    </ul>
                </div>
            )}

        </>
    )
}

export default Nav;
