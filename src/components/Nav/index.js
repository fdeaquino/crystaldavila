import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// go back a few more times
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
            mobileMenu.style.top = "15px"; // Set a fixed value
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
                <nav className={`navbar navbar-expand-lg navbar-fixed-top navigation-clean-button navbar-custom-css${openMenu ? '' : (scrolled ? ' navbar-scrolled' : '')}`}>
                    <div className='container-fluid container nav-container-custom-css p-0' style={{ position: 'relative', zIndex: '9999' }}>
                        <div className='container-for-mediaquery'>
                            <h1 className='d-inline-flex brand' style={{ zIndex: '9999' }}>
                                <Link to='/crystaldavila'>
                                    Crystal Davila
                                </Link>
                            </h1>

                            <span className='d-inline-flex text-uppercase secondary-brand-styles' style={{ zIndex: '9999' }}>
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

                            {openMenu && (
                                <div className={`overlay-menu${menuVisible ? ' d-flex' : ''}${openMenu ? ' open' : ''}`}>
                                    <ul>
                                        <li className={currentComponent === 'About' ? 'active' : ''}>
                                            <Link
                                                to="/crystaldavila/about"
                                                onClick={() => {
                                                    setCurrentComponent('About');
                                                    setOpenMenu(false);
                                                }}
                                            >
                                                Meet Crystal
                                            </Link>
                                        </li>
                                        <li className={currentComponent === 'OnTheIssues' ? 'active' : ''}>
                                            <Link
                                                to="/crystaldavila/on-the-issues"
                                                onClick={() => {
                                                    setCurrentComponent('OnTheIssues');
                                                    setOpenMenu(false);
                                                }}
                                            >
                                                On The Issues
                                            </Link>
                                        </li>
                                        <li className={currentComponent === 'Vision' ? 'active' : ''}>
                                            <Link
                                                to="/crystaldavila/vision"
                                                onClick={() => {
                                                    setCurrentComponent('Vision');
                                                    setOpenMenu(false);
                                                }}
                                            >
                                                Vision
                                            </Link>
                                        </li>
                                        <li className={currentComponent === 'GetInvolved' ? 'active' : ''}>
                                            <Link
                                                to="/crystaldavila/get-involved"
                                                onClick={() => {
                                                    setCurrentComponent('GetInvolved');
                                                    setOpenMenu(false);
                                                }}
                                            >
                                                Get Involved
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

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
