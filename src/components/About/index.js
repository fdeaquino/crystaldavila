import React from 'react';

function About() {
    return (
        <>
            <section>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className='col my-auto photo-container'>
                            <div className='cd-photo'></div>
                        </div>
                        <div className='col my-auto'>
                            <h2 className='mb-5 hero-text text-uppercase'>Latina. Woman. Educator. Mexican American. Texan.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-4 py-lg-5'>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center timeline-container">
                        <div className="col-lg-12">
                            <h3 className="join-convo-text text-center">Crystal's Story</h3>
                            <ul className="timeline">
                                <li className='py-2'>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Early Years</h4>
                                            <h5 className="subheading">PISD Student</h5>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-image d-flex justify-content-center">
                                        {/* <img className="img-circle img-responsive" src="https://via.placeholder.com/300/09f/fff.png" alt="" /> */}
                                    </div>
                                    <div className="line"></div>
                                </li>
                                <li className="py-2 timeline-inverted">
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>College Years</h4>
                                            <h5 className="subheading">UT Austin Student</h5>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-image d-flex justify-content-center">
                                        {/* <img className="img-circle img-responsive" src="https://via.placeholder.com/300/09f/fff.png" alt="" /> */}
                                    </div>
                                    <div className="line"></div>
                                </li>
                                <li className='py-2'>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Career Start</h4>
                                            <h5 className="subheading">Teacher at PHS</h5>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-image d-flex justify-content-center">
                                        {/* <img className="img-circle img-responsive" src="https://via.placeholder.com/300/09f/fff.png" alt="" /> */}
                                    </div>
                                    <div className="line"></div>
                                </li>
                                <li className="py-2 timeline-inverted">
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Student Advocacy</h4>
                                            <h5 className="subheading">PISD School Board Campaign</h5>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-image d-flex justify-content-center">
                                        {/* <img className="img-circle img-responsive" src="https://via.placeholder.com/300/09f/fff.png" alt="" /> */}
                                    </div>
                                    <div className="line"></div>
                                </li>
                                <li className='py-2'>
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h4>Trustee</h4>
                                            <h5 className="subheading">Current</h5>
                                        </div>
                                        <div className="timeline-body">
                                            <p className="text-muted">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="timeline-image d-flex justify-content-center">
                                        {/* <img className="img-circle img-responsive" src="https://via.placeholder.com/300/09f/fff.png" alt="" /> */}
                                    </div>
                                    {/* <div className="line"></div> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;