import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    const [currentComponent, setCurrentComponent] = useState('');

    return (
        <header>
            <nav className='navbar navbar-dark navbar-expand-lg navbar-fixed-top navigation-clean-button navbar-custom-css'>
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
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="true" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon position-absolute top-0 end-0 me-4"></span>
                        </button>

                        <div className='row collapse navbar-collapse navMenu' id='navbarToggleExternalContent'>
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
    )
}

export default Nav;