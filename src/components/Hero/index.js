import React, { useEffect, useState } from 'react';
import Popup from '../Popup/index.js';

import { submitVoterInfo, submitContactForm } from '../../api';

import tasbConferenceImage from '../../assets/images/cd-photo-tasb-conference.jpeg';
import womenInPoliticsImage from '../../assets/images/cd-photo-womeninpolitics.jpeg';
import advocacyAtCapitolImage from '../../assets/images/cd-photo-advocacyatcapitol.jpeg';



function Hero() {
    const [showForm, setShowForm] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isHorizontal, setIsHorizontal] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitVoterInfo(formData.name, formData.phoneNumber, formData.email);
        // Reset the form data after successful submission
        setFormData({ name: '', email: '', phoneNumber: '' });
    };


    const closePopup = () => {
        setShowPopup(false);
    };

    const pastworks = [
        {
            title: 'District Level: Fostering Student Leadership in PISD',
            description: 'Supported PISD students as they presented on school safety at the TASB Governance Conference in Galveston, providing them with opportynities to engage with School Board Members and develop leadership skills.',
            imageUrl: tasbConferenceImage
        },
        {
            title: 'Local Level: Women in Politics Panel',
            description: 'Participated in a panel discussion with women in elected office to share their experiences and accomplishments. The event aimed to promote diversity, equity, and inclusion in leadership and foster a welcoming community for all. The panel provided a platform for women to share insights and inpire others to pursue leadership roles.',
            imageUrl: womenInPoliticsImage
        },
        {
            title: 'State Level: Advocated for Increasing Funding to Public Schools',
            description: 'Proposed increasing funding to improve the quality of education provided to students. Worked with educators and school administrators to identify areas where additional funding could be most effectively utilized.',
            imageUrl: advocacyAtCapitolImage
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const { width, height } = window.screen;
            setIsHorizontal(width >= 550 && width <= 920 && height < width);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setShowForm(width >= 992);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
            <section className='large-screen-mb-2'>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className={`col my-auto photo-container ${isHorizontal ? 'cd-photo' : ''}`}>
                            <div id={isHorizontal ? 'horizontal-cd-photo' : ''} className={isHorizontal ? 'hidden' : 'cd-photo'}></div>


                        </div>
                        <div className='col my-auto'>
                            <h2 className={`mb-5 mb-10 hero-text text-uppercase about-hero-text ${showForm ? 'centered-h2' : ''}`}>Fighting For a Better Future For Our Students</h2>
                            {showForm && (
                                <div className='col my-auto text-center'>
                                    <div className="col-10 mx-auto">
                                        <h3 className='mt-4'>Join Our Campaign!</h3>
                                        <form 
                                        className="contact-form d-block mx-auto" 
                                        autoComplete="off"
                                        onSubmit={handleSubmit}
                                        >
                                            <div className="form-group">
                                                <label className='volunteer-card-text mb-1 bold-form-label' htmlFor="name">Name</label>
                                                <input type="text"
                                                    className="form-control volunteer-card-text text-muted"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <label className='volunteer-card-text mt-3 mb-1 bold-form-label' htmlFor="email">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control volunteer-card-text text-muted"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='volunteer-card-text mt-3 mb-1 bold-form-label' htmlFor="phone">Phone Number</label>
                                                <input type="tel"
                                                    className="form-control volunteer-card-text text-muted"
                                                    id="phone"
                                                    placeholder="Your Phone Number"
                                                    required
                                                    value={formData.phoneNumber}
                                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                                />
                                            </div>
                                            <p className='text-muted disclosure mt-3'>By submitting your cell phone number you are agreeing to receive periodic text messages from this organization. Message and data rates may apply.</p>
                                            <button className="btn btn-moving-gradient btn-moving-gradient--blue mb-4" type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 py-lg-5">
                <div className="container h-100 card custom-card-styles" >
                    <div className='row justify-content-center align-items-center stack-quote-photo'>
                        <div className="col-6 h-100 card-body card-width">
                            <span className="tm--quote_icon icon_quote">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="#003468" viewBox="0 0 34.01 30.64"><defs><style>.cls-1</style></defs><title>quotes</title><path className="cls-1" d="M14.56,0C4.24,2.17,0,9.45,0,18.91V30.64H12.6V17.93H7.28c0-7.28,2.17-11.84,8.91-13.69Z"></path><path className="cls-1" d="M32.38,0C22.06,2.17,17.82,9.45,17.82,18.91V30.64h12.6V17.93H25.1c0-7.28,2.17-11.84,8.91-13.69Z"></path></svg>				</span>
                            <h5 className="card-title text-uppercase">Join me in creating a brighter future for pasadena, by prioritizing education that prepares students for the world.</h5>
                            <p className="card-subtitle mb-2 text-muted">Card subtitle What we are trying to do is What we are trying to do is What we are trying to do is</p>
                            <a href="/crystaldavila/vision" className="card-link card-link-style">Learn About Crystal's Vision</a>
                        </div>
                        <div className='col-6 cd-group-photo'></div>
                    </div>
                </div>

            </section>
            <div className='blue-wrapper rectangle-section container h-100 py-4 py-lg-5'>
                <section className="py-4 py-lg-5 ">
                    <div className="container text-center h-100 rectangle-section">
                        <h3 className='volunteer-title'>Join The Conversation</h3>
                        <p className='volunteer-content-text volunteer-card-text'>Upcoming Events</p>
                        <div className='row mt-4 h-100 justify-content-center'>
                            <div className="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Café con Crystal</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Restaurant Name</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>April 4th, 2023</p>
                                {/* TODO: Add working href */}
                                <a><button className="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button></a>
                            </div>
                            <div className="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Dia De Los Niños Celebration</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Memorial Park</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>April 30th, 2023</p>
                                {/* TODO: Add working href */}
                                <a><button className="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button></a>
                            </div>
                            <div className="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Cinco de Mayo Celebration</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Strawberry Park</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>May 5th, 2023</p>
                                {/* TODO: Add working href */}
                                <a><button className="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4 py-lg-5 ">
                    <div className="container text-center h-100 rectangle-section">
                        <h3 className='work-title'>Past Work and Advocacy</h3>
                        <p className='work-content-text work-card-text'>Progress in Pasadena I.S.D.</p>
                        <div className="row mt-4 h-100 justify-content-center">
                            {pastworks.map((work, index) => (
                                <div key={index} className="col-md-6 col-lg-4 py-3 ">
                                    <div className=" bg-light-gray work-styles">
                                        <img src={work.imageUrl} alt={work.title} className="card-img-top mb-2" />
                                        <div className="card-body">
                                            <h4 className="card-title my-2">{work.title}</h4>
                                            <p className='work-card-text p-2'>{work.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="donate-section py-4 py-lg-5 ">
                    <div className="container text-center">
                        <h3 className='mb-5 contribution-title'>Make a Contribution</h3>
                        <p className='volunteer-card-text mt-3 contribution-content-text'>Your financial support will help us reach more voters, print campaign materials, and fuel our grassroots efforts. Every dollar makes a difference in ensuring a successful campaign.</p>
                        <a href="donation-page.html">
                            <button className="btn btn-moving-gradient btn-moving-gradient--donate mt-3 mb-4">Donate Today</button>
                        </a>
                    </div>
                </section>
            </div>

            {showPopup && <Popup onClose={closePopup} />}

        </>
    )
}


export default Hero;