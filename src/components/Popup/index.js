import React, { useState } from 'react';
import ConfirmationPopup from '../ConfirmationPopup';
import { useTranslation } from 'react-i18next';


function Popup({ onClose, formData, setFormData, handleHeroFormSubmit }) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { t } = useTranslation();


    const handlePopupFormSubmit = async (e) => {
        e.preventDefault();
        await handleHeroFormSubmit(e);
        setIsSubmitted(true);
    };

    const popupContainerClass = isSubmitted
        ? "popup-background popup-hidden"
        : "popup-background popup-container";

    return (
        <>
            <div className={popupContainerClass}>
                <div className="popup-content">
                    <div className="close-button-container">
                        <div className="popup-photo"></div>
                        <button
                            className="circular-close-button"
                            onClick={onClose}
                        >
                            X
                        </button>
                    </div>
                    <div className='col my-auto text-center'>
                        <div className="col mx-1">
                            <h3 className='my-3 input-form-title'>{t('join_campaign')}</h3>
                            <form className="contact-form d-block mx-auto" autoComplete="off" onSubmit={(e) => handlePopupFormSubmit(e)}>
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mb-1 bold-form-label' htmlFor="name">{t('name')}</label>
                                    <input type="text"
                                        className="form-control volunteer-card-text text-muted input-form-link"
                                        id="name"
                                        placeholder={t('your_name')}
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mt-3 mb-1 bold-form-label' htmlFor="email">{t('email')}</label>
                                    <input type="email"
                                        className="form-control volunteer-card-text text-muted input-form-link"
                                        id="email"
                                        placeholder={t('your_email')}
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mt-3 mb-1 bold-form-label' htmlFor="phone">{t('phone_number')}</label>
                                    <input type="tel"
                                        className="form-control volunteer-card-text text-muted input-form-link"
                                        id="phone"
                                        placeholder={t('your_phone_number')}
                                        required
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    />
                                </div>
                                <p className='text-muted disclosure my-2'>{t('disclosure')}</p>
                                <button className="btn btn-moving-gradient btn-moving-gradient--blue mb-4" type="submit">{t('submit')}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isSubmitted && (
                <ConfirmationPopup
                    onClose={() => {
                        setIsSubmitted(false);
                        onClose(false);
                    }}
                />
            )}
        </>
    );
}

export default Popup;