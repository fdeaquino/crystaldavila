import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Nav(props) {
    const [currentComponent, setCurrentComponent] = useState('');
    const [openMenu, setOpenMenu] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const location = useLocation();


    useEffect(() => {
        const menu = document.getElementById("menu");
        const mobileMenu = document.querySelector(".animated-mobile-menu");

        if (openMenu) {
            const rightDistance = window.innerWidth - mobileMenu.getBoundingClientRect().right;
            menu.classList.add("openmenu");
            mobileMenu.style.position = "fixed";
            mobileMenu.style.top = "15px";
            mobileMenu.style.right = rightDistance + "px";
            
        } else if (!openMenu && !scrolled) {
            mobileMenu.style.transitionProperty = "top";
            menu.classList.remove("openmenu");
            mobileMenu.style.position = "absolute";
            mobileMenu.style.top = "-81px";
            mobileMenu.style.right = "12px";
            
        } else if (!openMenu && scrolled) {
            menu.classList.remove("openmenu");
            mobileMenu.style.position = "absolute";
            mobileMenu.style.top = "-71px";
            mobileMenu.style.right = "12px";
            
        } else {
            menu.classList.remove("openmenu");
            setTimeout(() => {
                mobileMenu.style.position = "absolute";
                mobileMenu.style.top = "-81px";
                mobileMenu.style.right = "12px";
                
            }, 500); // matches the transition in the CSS
        }
    }, [openMenu, scrolled]);



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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentComponent]);

    useEffect(() => {
        setCurrentComponent(location.pathname.split('/')[2] || '');
    }, [location.pathname]);

    useEffect(() => {
        const handlePopstate = () => {
            setOpenMenu(false);
        };

        window.addEventListener('popstate', handlePopstate);
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);



    const toggleMenu = (component) => {
        if (!openMenu) {
            setOpenMenu(true);
            setMenuVisible(true);
            setCurrentComponent(component);
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
                            <h1 className='d-inline-flex brand' style={{ zIndex: '9999' }} onClick={() => {
                                setCurrentComponent('');
                                setOpenMenu(false);
                                setMenuVisible(false);
                                setActiveMenuItem('');
                            }}>
                                <Link to='/crystaldavila'>
                                    Crystal Davila
                                </Link>
                            </h1>

                            <span className='d-inline-flex text-uppercase secondary-brand-styles secondary-brand-size' style={{ zIndex: '9999' }}>
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
                                        <Link
                                            className={activeMenuItem === 'About' ? 'activeComponent' : ''}
                                            to='/crystaldavila/about'
                                            onClick={() => {
                                                setCurrentComponent('About');
                                                setActiveMenuItem('About');
                                            }}
                                        >
                                            Meet Crystal
                                        </Link>
                                    </li>
                                    <li className='nav-item nav-link-custom-css me-4'>
                                        <Link
                                            className={activeMenuItem === 'OnTheIssues' ? 'activeComponent' : ''}
                                            to='/crystaldavila/on-the-issues'
                                            onClick={() => {
                                                setCurrentComponent('OnTheIssues');
                                                setActiveMenuItem('OnTheIssues');
                                            }}
                                        >
                                            On The Issues
                                        </Link>
                                    </li>
                                    <li className='nav-item nav-link-custom-css me-4'>
                                        <Link
                                            className={activeMenuItem === 'Vision' ? 'activeComponent' : ''}
                                            to='/crystaldavila/vision'
                                            onClick={() => {
                                                setCurrentComponent('Vision');
                                                setActiveMenuItem('Vision');
                                            }}
                                        >
                                            Vision
                                        </Link>
                                    </li>
                                    <li className='nav-item nav-link-custom-css'>
                                        <Link
                                            className={activeMenuItem === 'GetInvolved' ? 'activeComponent' : ''}
                                            to='/crystaldavila/get-involved'
                                            onClick={() => {
                                                setCurrentComponent('GetInvolved');
                                                setActiveMenuItem('GetInvolved');
                                            }}
                                        >
                                            Get Involved
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </nav>
            </header>

            <div className={`overlay-menu${menuVisible ? ' d-flex' : ''}${openMenu ? ' open' : ''}`}>
                <ul>
                    <li className={currentComponent === 'About' ? 'activeComponent' : ''}>
                        <Link
                            to="/crystaldavila/about"
                            onClick={() => {
                                setCurrentComponent('About');
                                setOpenMenu(false);
                                setActiveMenuItem('About');
                                setMenuVisible(false);
                            }}
                            className={activeMenuItem === 'About' ? 'activeComponent' : ''}
                        >
                            Meet Crystal
                        </Link>
                    </li>
                    <li className={currentComponent === 'OnTheIssues' ? 'activeComponent' : ''}>
                        <Link
                            to="/crystaldavila/on-the-issues"
                            onClick={() => {
                                setCurrentComponent('OnTheIssues');
                                setOpenMenu(false);
                                setActiveMenuItem('OnTheIssues');
                                setMenuVisible(false);
                            }}
                            className={activeMenuItem === 'OnTheIssues' ? 'activeComponent' : ''}
                        >
                            On The Issues
                        </Link>
                    </li>
                    <li className={currentComponent === 'Vision' ? 'activeComponent' : ''}>
                        <Link
                            to="/crystaldavila/vision"
                            onClick={() => {
                                setCurrentComponent('Vision');
                                setOpenMenu(false);
                                setActiveMenuItem('Vision');
                                setMenuVisible(false);
                            }}
                            className={activeMenuItem === 'Vision' ? 'activeComponent' : ''}
                        >
                            Vision
                        </Link>
                    </li>
                    <li className={currentComponent === 'GetInvolved' ? 'activeComponent' : ''}>
                        <Link
                            to="/crystaldavila/get-involved"
                            onClick={() => {
                                setCurrentComponent('GetInvolved');
                                setOpenMenu(false);
                                setActiveMenuItem('GetInvolved');
                                setMenuVisible(false);
                            }}
                            className={activeMenuItem === 'GetInvolved' ? 'activeComponent' : ''}
                        >
                            Get Involved
                        </Link>
                    </li>
                </ul>
            </div>


        </>
    )
}

export default Nav;
