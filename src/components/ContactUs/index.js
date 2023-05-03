import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../../api';
import Popup from '../Popup';


function ContactUs() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitContactForm(formData.name, formData.email, formData.message);
        // Resets the form data after successful submission
        setFormData({ name: '', email: '', message: '' });
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleFormButtonClick = (e) => {
        e.preventDefault();
        setTimeout(() => {
            handleSubmit(e);
        }, 700); // 700 milliseconds (0.7 second) delay
    };


    return (
        <section className="contact-info py-4 py-lg-5 ">
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
                        <form className="contact-form"
                            autoComplete='off'
                            onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label
                                    className='volunteer-card-text mb-1 bold-form-label'
                                    htmlFor="name">
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
                                <label
                                    className='volunteer-card-text mt-3 mb-1 bold-form-label'
                                    htmlFor="email">
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
                                <label
                                    className='volunteer-card-text mt-3 mb-1 bold-form-label'
                                    htmlFor="message">
                                    {t('message')}
                                </label>
                                <textarea
                                    className="form-control volunteer-card-text text-muted"
                                    id="message"
                                    rows="4"
                                    placeholder={t('your_message')}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}>

                                </textarea>
                            </div>
                            {/* TODO: Add working href */}

                            <button onClick={handleFormButtonClick} className="btn btn-moving-gradient btn-moving-gradient--blue mt-3 mb-4">{t('submit')}</button>

                        </form>
                    </div>
                </div>
            </div>
            {/* Add a Popup component if showPopup is true */}
            {showPopup && (
                <Popup
                    title={t('popup_title')}
                    message={t('popup_message')}
                    handleClosePopup={handleClosePopup}
                />
            )}
        </section>
    );
}

export default ContactUs;
