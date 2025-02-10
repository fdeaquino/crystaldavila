import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Popup from '../Popup';

function ContactUs() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [showPopup, setShowPopup] = useState(false);
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
    
        const response = await fetch("https://formspree.io/f/xpwqrgrd", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
            setShowPopup(true);
        } else {
            setStatus('Error sending message. Please try again.');
        }
    };
   

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <section className="contact-info py-4 py-lg-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3 className='mb-4'>{t('h3_title_get_in_touch')}</h3>
                        <p className='volunteer-card-text mt-3'>{t('subtitle_get_in_touch_phone')}: (713) 518-8029</p>
                        <p className='volunteer-card-text mt-3'>{t('email')}: info@crystaldavila.com</p>
                        {/* <p className='volunteer-card-text mt-3'>{t('subtitle_get_in_touch_address')}: 1234 Main St, Pasadena, TX 77506</p> */}
                    </div>
                    <div className="col-md-6">
                        <h3 className='mb-4'>{t('h3_title_contact_us')}</h3>
                        <form className="contact-form"
                            autoComplete='off'
                            onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className='volunteer-card-text mb-1 bold-form-label' htmlFor="name">
                                    {t('name')}
                                </label>
                                <input
                                    type="text"
                                    className="form-control volunteer-card-text text-muted"
                                    id="name"
                                    name="name"
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
                                    name="email"
                                    placeholder={t('your_email')}
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className='volunteer-card-text mt-3 mb-1 bold-form-label' htmlFor="message">
                                    {t('message')}
                                </label>
                                <textarea
                                    className="form-control volunteer-card-text text-muted"
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder={t('your_message')}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="btn btn-moving-gradient btn-moving-gradient--blue mt-3 mb-4">
                                {t('submit')}
                            </button>

                            <p className="volunteer-card-text mt-2">{status}</p>
                        </form>
                    </div>
                </div>
            </div>
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
