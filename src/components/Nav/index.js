import React from 'react';

function Nav() {
    return (
        <header>
            <nav className='navbar navbar-dark navbar-expand-lg navbar-fixed-top navigation-clearn-button navbar-custom-css'>
                <div className='container-fluid container nav-container-custom-css p-0'>
                    <div className='container-for-mediaquery'>
                        <h1 className='d-inline-flex brand'>
                            Crystal Davila
                        </h1>
                        <span className='d-inline-flex text-uppercase secondary-brand-styles'>
                            For School Board
                        </span>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='container'>
                        <div className='row collapse navbar-collapse navMenu' id='navbarNav'>
                            <ul className='col navbar-nav p-0'>
                                <li className='nav-item nav-link-custom-css me-4'>
                                    Meet Crystal
                                </li>
                                <li className='nav-item nav-link-custom-css me-4'>
                                    On The Issues
                                </li>
                                <li className='nav-item nav-link-custom-css me-4'>
                                    Vision
                                </li>
                                <li className='nav-item nav-link-custom-css'>
                                    Get Involved
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <h4 class="text-white">Collapsed content</h4>
                        <span class="text-muted">navbar brand-Toggleable.</span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;