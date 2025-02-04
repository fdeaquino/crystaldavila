import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ConfirmationPopup from '../ConfirmationPopup';
import communityMeeting from '../../assets/images/community-meeting.jpg';
import coffeeCrystal from '../../assets/images/coffee-crystal.jpg';
import fundraisingDinner from '../../assets/images/fundraising-dinner.jpg';
import walkingAtPark from '../../assets/images/walking-at-park-new.webp';
import runAtPark from '../../assets/images/run-at-park-new.webp';
import cdBdayCelebration from '../../assets/images/cd-bday-celebration.jpg';
import voterRegistration from '../../assets/images/voter-registration.jpg';
import earlyVoting from '../../assets/images/early-voting.jpg';
import pollingLocation from '../../assets/images/polling-location.jpg';

function GetInvolved() {
    const { t } = useTranslation();
    const [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
    });

    const isFormValid = () => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.phoneNumber.trim() !== ''
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            setErrorMessage(t('form_validation_check_msg'));
            return;
        }

        const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailPattern.test(formData.email)) {
            setErrorMessage(t('invalid_email_error_msg'));
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xpwqrrgd", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: '', email: '', phoneNumber: '' });
                setShowPopup(true);
                setErrorMessage('');
            } else {
                const result = await response.json();
                console.error("Formspree Error:", result);
                setErrorMessage(result.error || t('error_submission_msg'));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage(t('error_submission_msg'));
        }
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleFormButtonClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            handleSubmit(e);
        }, 700);
    };

    const handleButtonClick = (e, url) => {
        e.preventDefault();
        setTimeout(() => {
            window.location.href = url;
        }, 700);
    };

    const events = [
        {
            title: t('getinvolved_event_data_title_1'),
            date: t('getinvolved_event_date_1'),
            time: '6:00 PM',
            location: t('getinvolved_event_location_1'),
            imageUrl: communityMeeting
        },
        {
            title: t('getinvolved_event_data_title_2'),
            date: t('getinvolved_event_date_2'),
            time: '11:00 AM',
            location: t('getinvolved_event_location_2'),
            imageUrl: coffeeCrystal
        },
        {
            title: t('getinvolved_event_data_title_3'),
            date: t('getinvolved_event_date_3'),
            time: '7:00 PM',
            location: t('getinvolved_event_location_3'),
            imageUrl: fundraisingDinner
        },
        {
            title: t('getinvolved_event_data_title_4'),
            date: t('getinvolved_event_date_4'),
            time: '4:00 PM',
            location: t('getinvolved_event_location_4'),
            imageUrl: walkingAtPark
        },
        {
            title: t('getinvolved_event_data_title_5'),
            date: t('getinvolved_event_date_5'),
            time: '2:00 PM',
            location: t('getinvolved_event_location_5'),
            imageUrl: runAtPark
        },
        {
            title: t('getinvolved_event_data_title_6'),
            date: t('getinvolved_event_date_6'),
            time: '7:00 PM',
            location: t('getinvolved_event_location_6'),
            imageUrl: cdBdayCelebration
        }
    ];

    return (
        <>
            {showPopup && <ConfirmationPopup onClose={handleClosePopup} />}

            {/* 🔹 Keeping All Visuals and Layout the Same */}

            {/* First section - Get Involved header */}
            <section>
                <div className='container container-padding h-100'>
                    <div className='row cd-getinvolved-photo h-100 justify-content-center hero-container'>
                        <div className='col my-auto'>
                            <h2 id='text-padding' className='mb-5 mb-10 about-photo-margins getinvolved-hero-text text-uppercase'>{t('h2_title_getinvolved1')}<span><p>{t('h2_title_getinvolved2')}</p></span></h2>
                        </div>
                        <div className='col my-auto photo-container'>
                            <div className=''></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Second section - Intro for Get Involved Page */}
            <section className="py-4 py-lg-5">
                <div className="container h-100 card custom-card-styles" >
                    <div className='row justify-content-center align-items-center stack-quote-photo'>

                        <div className="col-6 h-100 card-body card-width text-center">

                            <h3 className="card-title text-uppercase">{t('h3_title_active_participation')}
                            </h3>
                            <p className="card-subtitle mb-2 text-muted d-flex">{t('subtitle_active_participation')}</p>
                        </div>

                    </div>
                </div>

            </section>

            <div className='blue-wrapper rectangle-section container h-100 py-4 py-lg-5'>
                {/* Third section - Volunteer With Us */}
                <section className="volunteer-section py-4 py-lg-5">
                    <div className="container text-center h-100 ">
                        <h3 className='volunteer-title'>{t('h3_title_volunteer_with_us')}</h3>
                        <p className='volunteer-content-text volunteer-card-text'>{t('subtitle_volunteer_with_us')}</p>
                        {/* TODO: Add working url */}
                        <button onClick={(e) => handleButtonClick(e, "/volunteer-sign-up")} className="btn btn-moving-gradient btn-moving-gradient--blue">{t('sign_up_btn')}</button>
                        <div className="row mt-4 h-100 justify-content-center ">
                            <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                <div className="volunteer-card volunteer-card-background card p-4">
                                    <div className='d-flex flex-column align-items-center'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                            className="bi bi-house-door-fill mb-3 responsive-icon"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
                                        </svg>
                                    </div>
                                    <h4>{t('volunteer_card_title_1')}</h4>
                                    <p className="text-muted volunteer-card-text">{t('volunteer_card_subtitle_1')}</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                <div className="volunteer-card volunteer-card-background card p-4">
                                    <div className='d-flex flex-column align-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-headset responsive-icon mb-3" viewBox="0 0 16 16">
                                            <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
                                        </svg>
                                    </div>
                                    <h4>{t('volunteer_card_title_2')}</h4>
                                    <p className="text-muted volunteer-card-text">{t('volunteer_card_subtitle_2')}</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                                <div className="volunteer-card volunteer-card-background card p-4">
                                    <div className='d-flex flex-row justify-content-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook responsive-icon mb-3 me-3" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram responsive-icon mb-3 me-3" viewBox="0 0 16 16">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                        </svg>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter responsive-icon mb-3 me-3" viewBox="0 0 16 16">
                                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp responsive-icon mb-3" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                        </svg>
                                    </div>
                                    <h4>{t('volunteer_card_title_3')}</h4>
                                    <p className="text-muted volunteer-card-text">{t('volunteer_card_subtitle_3')}.</p>
                                </div>
                            </div>
                            {/* Add more volunteer cards as needed */}
                        </div>
                    </div>
                </section>
                {/* Fourth section - Event Calendar */}
                <section className="event-calendar py-4 py-lg-5">
                    <div className="container text-center ">
                        <h3 className='mb-5 events-title'>{t('h3_title_upcoming_events')}</h3>
                        <div className="row mt-4 h-100 justify-content-center">
                            {events.map((event, index) => (
                                <div key={index} className="col-md-6 col-lg-4 py-3 ">
                                    <div className=" event-card bg-light-gray event-styles">
                                        <img src={event.imageUrl} alt={event.title} className="card-img-top mb-2" />
                                        <div className="card-body">
                                            <h4 className="card-title my-2">{event.title}</h4>
                                            <p className='volunteer-card-text mt-3'>{event.date} at {event.time}</p>
                                            <p className='volunteer-card-text'>{event.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* TODO: Add working url */}

                        <button onClick={(e) => handleButtonClick(e, "")} className="btn btn-primary btn-moving-gradient btn-moving-gradient--blue w-50 mt-3 mb-4">{t('view_calendar_btn')}</button>

                    </div>
                </section>
                {/* Fifth section - Voter Registration Information */}
                <section className="voter-registration py-4 py-lg-5 ">
                    <div className="container text-center">
                        <h3 className='mb-5 voter-registration-title'>{t('h3_title_voter_and_election')}</h3>
                        <div className="row mt-4 h-100 justify-content-center">
                            <div className='col-md-6 col-lg-4 py-3 justify-content-center'>
                                <div className="volunteer-card election-registration-information-background voter-reg-election-info card h-100 voter-info">
                                    <img src={voterRegistration} alt="Registration Icon" className="card-img-top mb-2" id='voting-info-photos' />
                                    <h4 className="my-2">{t('getinvolved_voter_and_election_data_title_1')}</h4>
                                    <p className='volunteer-card-text mt-3'>{t('getinvolved_voter_and_election_data_content_1')}</p>
                                    <a href="">
                                        <button onClick={(e) => handleButtonClick(e, "https://www.vote.org/register-to-vote/")} className="btn btn-moving-gradient btn-moving-gradient--blue mt-3 mb-4">{t('register_now_btn')}</button>
                                    </a>
                                </div>
                            </div>
                            <div className='col-md-6 col-lg-4 py-3 justify-content-center'>
                                <div className="volunteer-card election-registration-information-background voter-reg-election-info card h-100 voter-info">
                                    <img src={earlyVoting} alt="Early Voting Icon" className="card-img-top mb-2" id='voting-info-photos' />
                                    <h4 className="my-2">{t('getinvolved_voter_and_election_data_title_2')}</h4>
                                    <p className='volunteer-card-text mt-3'>{t('getinvolved_voter_and_election_data_content_2')}</p>
                                </div>
                            </div>

                            <div className='col-md-6 col-lg-4 py-3 justify-content-center'>
                                <div className="volunteer-card election-registration-information-background voter-reg-election-info card h-100 voter-info">
                                    <img src={pollingLocation} alt="Polling Location Icon" className="card-img-top mb-2" id='voting-info-photos' />
                                    <h4 className="my-2">{t('getinvolved_voter_and_election_data_title_3')}</h4>
                                    <p className='volunteer-card-text mt-3'>{t('getinvolved_voter_and_election_data_content_3')}</p>
                                    <a>
                                        <button onClick={(e) => handleButtonClick(e, "https://www.vote.org/polling-place-locator/")} className="btn btn-moving-gradient btn-moving-gradient--blue mt-3 mb-4">{t('find_polling_location_btn')}</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Sixth section - Donations */}
                <section className="donate-section py-4 py-lg-5 ">
                    <div className="container text-center">
                        <h3 className='mb-5 contribution-title'>{t('h3_title_make_a_contribution')}</h3>
                        <p className='volunteer-card-text mt-3 contribution-content-text'>{t('subtitle_contribution')}</p>

                        <button onClick={(e) => handleButtonClick(e, "https://secure.actblue.com/donate/crystal-davila-1")} className="btn btn-moving-gradient btn-moving-gradient--donate mt-3 mb-4">{t('donate_today_btn')}</button>

                    </div>
                </section>

            </div>
            
            <section className="contact-info py-4 py-lg-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className='mb-4'>{t('h3_title_get_in_touch')}</h3>
                            <p className='volunteer-card-text mt-3'>{t('subtitle_get_in_touch_phone')}: (123) 456-7890</p>
                            <p className='volunteer-card-text mt-3'>{t('email')}: info@campaignwebsite.com</p>
                            <p className='volunteer-card-text mt-3'>{t('subtitle_get_in_touch_address')}: 1234 Main St, Pasadena, TX 77506</p>
                        </div>
                        <div className="col-md-6">
                            <h3 className='mb-4'>{t('h3_title_contact_us')}</h3>
                            <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label className='volunteer-card-text mb-1 bold-form-label' htmlFor="name">
                                        {t('name')}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control volunteer-card-text text-muted"
                                        id="name"
                                        placeholder={t('your_name')}
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label className='volunteer-card-text mt-3 mb-1 bold-form-label' htmlFor="email">
                                        {t('email')}
                                    </label>
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
                                    <label className='volunteer-card-text mt-3 mb-1 bold-form-label' htmlFor="phone">
                                        {t('phone_number')}
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control volunteer-card-text text-muted"
                                        id="phone"
                                        placeholder={t('your_phone_number')}
                                        required
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    />
                                </div>

                                {errorMessage && (
                                    <div className="alert alert-danger mt-2" role="alert">
                                        {errorMessage}
                                    </div>
                                )}

                                <button className="btn btn-moving-gradient btn-moving-gradient--blue mt-3 mb-4" type="submit">
                                    {t('submit')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GetInvolved;
