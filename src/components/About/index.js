import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import earlyYears from '../../assets/images/cd-photo-student.jpg';
import collegeYears from '../../assets/images/cd-photo-collegeyears.jpeg';
import workTeacher from '../../assets/images/cd-photo-teacher.jpeg';
import firstCampaign from '../../assets/images/cd-photo-firstcampaign.jpeg';
import trusteeSwearingIn from '../../assets/images/cd-photo-sb-swearing-in.jpeg';






function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    const timelineData = [
        {
            title: 'Early Years',
            subtitle: 'PISD Student',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imageUrl: earlyYears,
            inverted: false
        },
        {
            title: 'College Years',
            subtitle: 'UT Austin Student',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imageUrl: collegeYears,
            inverted: true
        },
        {
            title: 'Career Start',
            subtitle: 'Teacher at PHS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imageUrl: workTeacher,
            inverted: false
        },
        {
            title: 'Student Advocacy',
            subtitle: 'PISD School Board Campaign',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imageUrl: firstCampaign,
            inverted: true
        },
        {
            title: 'Trustee',
            subtitle: 'PISD School Board Member',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            imageUrl: trusteeSwearingIn,
            inverted: false
        },
    ]

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <section>
                <div className='container container-padding h-100'>
                    <div className='row cd-about-photo h-100 justify-content-center hero-container'>
                        <div className='col my-auto photo-container'>

                        </div>
                        <div className='col my-auto'>
                            <h2 id='text-padding' className='mb-5 mb-10 about-photo-margins hero-text about-hero-text text-uppercase'>Latina. Woman. Educator. Mexican American. Texan.</h2>
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
                                {timelineData.map((item, index) => (
                                    <li className={`py-2 ${item.inverted ? ' timeline-inverted' : ''}`} key={index}>
                                        <div className="timeline-panel" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                            <div className="timeline-heading">
                                                <h4 className='text-dark'>{item.title}</h4>
                                                <h5 className="text-muted">{item.subtitle}</h5>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">{item.text}</p>
                                            </div>
                                        </div>
                                        {/* Container for image */}
                                        <div className="timeline-image d-flex justify-content-center" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                                            {/* circle with image inside it */}
                                            <img className="circle-image" src={item.imageUrl} alt="" onClick={() => setSelectedImage(item.imageUrl)} />
                                        </div>
                                        {index !== timelineData.length - 1 && (
                                            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                                <div className="line"></div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div className="modal show d-block" tabIndex="-1" onClick={() => setSelectedImage(null)}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content ms-2 me-2">
                            <div className="close-button-container">
                                <button type="button" className="circular-close-button" onClick={() => setSelectedImage(null)}>
                                    X
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedImage} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop show"></div>
                </div>
            )}

        </>
    )
}

export default About;