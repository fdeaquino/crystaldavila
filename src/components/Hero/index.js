import React, { useEffect, useState } from 'react';
import Popup from '../Popup/index.js';
import ConfirmationPopup from '../ConfirmationPopup/index.js';
import { useTranslation } from 'react-i18next';


import { submitVoterInfo } from '../../api';

import tasbConferenceImage from '../../assets/images/cd-photo-tasb-conference.jpeg';
import womenInPoliticsImage from '../../assets/images/cd-photo-womeninpolitics.jpeg';
import advocacyAtCapitolImage from '../../assets/images/cd-photo-advocacyatcapitol.jpeg';



function Hero() {
    const [showForm, setShowForm] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isHorizontal, setIsHorizontal] = useState(false);
    const [submissionSuccessful, setSubmissionSuccessful] = useState(false);

    const { t } = useTranslation();


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const handleHeroFormSubmit = async (e) => {
        e.preventDefault();
        await submitVoterInfo(formData.name, formData.phoneNumber, formData.email);
        // Reset the form data after successful submission
        setFormData({ name: '', email: '', phoneNumber: '' });
        setSubmissionSuccessful(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        setSubmissionSuccessful(false);
    };

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

    const handleFormButtonClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            handleHeroFormSubmit(e);
        }, 700); // 700 milliseconds (0.7 second) delay
    };

    const handleButtonClick = (e, url) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = url;
        }, 700); // 700 milliseconds (0.7 second) delay
    };

    return (
        <>
            {submissionSuccessful && (
                <ConfirmationPopup onClose={() => setSubmissionSuccessful(false)} />
            )}
            {showPopup && !submissionSuccessful && (
                <Popup
                    onClose={closePopup}
                    formData={formData}
                    setFormData={setFormData}
                    handleHeroFormSubmit={handleHeroFormSubmit}
                />
            )}

            <section className='large-screen-mb-2'>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className={`col my-auto photo-container ${isHorizontal ? 'cd-photo' : ''}`}>
                            <div id={isHorizontal ? 'horizontal-cd-photo' : ''} className={isHorizontal ? 'hidden' : 'cd-photo'}></div>


                        </div>
                        <div className='col my-auto'>
                            <h2 id='about-hero-text' className={`mb-5 mb-10 hero-text text-uppercase about-hero-text ${showForm ? 'centered-h2' : ''}`}>{t('h2_title_hero')}</h2>
                            {showForm && (
                                <div className='col my-auto text-center'>
                                    <div className="col-10 mx-auto">
                                        <h3 id='about-hero-text' className='mt-4'>{t('join_campaign')}</h3>
                                        <form
                                            className="contact-form d-block mx-auto"
                                            autoComplete="off"
                                            onSubmit={handleHeroFormSubmit}
                                        >
                                            <div className="form-group">
                                                <label className='volunteer-card-text mb-1 bold-form-label' htmlFor="name">{t('name')}</label>
                                                <input type="text"
                                                    className="form-control volunteer-card-text text-muted"
                                                    id="name"
                                                    placeholder={t('your_name')}
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                            </div>
                                            <div className="form-group">
                                                <label className='volunteer-card-text mt-3 mb-1 bold-form-label' htmlFor="email">{t('email')}</label>
                                                <input
                                                    type="email"
                                                    className="form-control volunteer-card-text text-muted"
                                                    id="email"
                                                    placeholder={t('your_email')}
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className='volunteer-card-text mt-3 mb-1 bold-form-label' htmlFor="phone">{t('phone_number')}</label>
                                                <input type="tel"
                                                    className="form-control volunteer-card-text text-muted"
                                                    id="phone"
                                                    placeholder={t('your_phone_number')}
                                                    required
                                                    value={formData.phoneNumber}
                                                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                                />
                                            </div>
                                            <p className='text-muted disclosure mt-3'>{t('disclosure')}</p>
                                            <button onClick={handleFormButtonClick} className="btn btn-moving-gradient btn-moving-gradient--blue mb-4" type="submit">{t('submit')}</button>
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
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="##000000" viewBox="0 0 34.01 30.64"><defs><style>.cls-1</style></defs><title>quotes</title><path className="cls-1" d="M14.56,0C4.24,2.17,0,9.45,0,18.91V30.64H12.6V17.93H7.28c0-7.28,2.17-11.84,8.91-13.69Z"></path><path className="cls-1" d="M32.38,0C22.06,2.17,17.82,9.45,17.82,18.91V30.64h12.6V17.93H25.1c0-7.28,2.17-11.84,8.91-13.69Z"></path></svg>				</span>
                            <h5 className="card-title text-uppercase">{t('h5_title_hero')}</h5>
                            {/* <p className="card-subtitle mb-2 text-muted">Card subtitle What we are trying to do is What we are trying to do is What we are trying to do is</p> */}
                            <a href="/crystaldavila/vision" className="card-link card-link-style">{t('learn_about_cd_vision')}</a>
                        </div>
                        <div className='col-6 cd-group-photo'></div>
                    </div>
                </div>

            </section>
            <div className='blue-wrapper rectangle-section container h-100 py-4 py-lg-5'>
                <section className="py-4 py-lg-5 ">
                    <div className="container text-center h-100 rectangle-section">
                        <h3 className='volunteer-title'>{t('h3_title_join_convo')}</h3>
                        <p className='volunteer-content-text volunteer-card-text'>{t('subtitle_upcoming_events')}</p>
                        <div className='row mt-4 h-100 justify-content-center'>
                            <div className="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Café con Crystal</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Restaurant Name</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>April 4th, 2023</p>
                                {/* TODO: Add working href */}
                                <button onClick={(e) => handleButtonClick(e, "")} className="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button>
                            </div>
                            <div className="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Dia De Los Niños Celebration</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Memorial Park</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>April 30th, 2023</p>
                                {/* TODO: Add working href */}
                                <button onClick={(e) => handleButtonClick(e, "")} className="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button>
                            </div>
                            <div className="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Cinco de Mayo Celebration</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Strawberry Park</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>May 5th, 2023</p>
                                {/* TODO: Add working href */}
                                <button onClick={(e) => handleButtonClick(e, "")} className="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-4 py-lg-5 ">
                    <div className="container text-center h-100 rectangle-section">
                        <h3 className='work-title'>{t('h3_title_pastwork_advocacy')}</h3>
                        <p className='work-content-text work-card-text'>{t('subtitle_pisd_progress')}</p>
                        <div className="row mt-4 h-100 justify-content-center">

                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={tasbConferenceImage} alt={t('past_works_title_1')} className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('past_works_title_1')}</h4>
                                        <p className='work-card-text p-2'>{t('past_works_description_1')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={womenInPoliticsImage} alt={t('past_works_title_2')} className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('past_works_title_2')}</h4>
                                        <p className='work-card-text p-2'>{t('past_works_description_2')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={advocacyAtCapitolImage} alt={t('past_works_title_3')} className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('past_works_title_3')}</h4>
                                        <p className='work-card-text p-2'>{t('past_works_description_3')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="donate-section py-4 py-lg-5 ">
                    <div className="container text-center">
                        <h3 className='mb-5 contribution-title'>{t('h3_title_make_a_contribution')}</h3>
                        <p className='volunteer-card-text mt-3 contribution-content-text'>{t('subtitle_contribution')}</p>

                        <button onClick={(e) => handleButtonClick(e, "https://secure.actblue.com/donate/crystal-davila-1")} className="btn btn-moving-gradient btn-moving-gradient--donate mt-3 mb-4">{t('donate_today_btn')}</button>

                    </div>
                </section>
            </div>

            {showPopup && (
                <Popup
                    onClose={closePopup}
                    formData={formData}
                    setFormData={setFormData}
                    handleHeroFormSubmit={handleHeroFormSubmit}
                />
            )}

        </>
    )
}


export default Hero;