import React, { useState } from 'react';
import ConfirmationPopup from '../ConfirmationPopup';

function Popup({ onClose, formData, setFormData, handleHeroFormSubmit }) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handlePopupFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };


    return (
        <>
            <div className="popup-background popup-container">
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
                            <h3 className='my-3 input-form-title'>Join Our Campaign!</h3>
                            <form className="contact-form d-block mx-auto" autoComplete="off" onSubmit={handlePopupFormSubmit}>
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mb-1 bold-form-label' htmlFor="name">Name</label>
                                    <input type="text"
                                        className="form-control volunteer-card-text text-muted input-form-link"
                                        id="name"
                                        placeholder="Your Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mt-3 mb-1 bold-form-label' htmlFor="email">Email</label>
                                    <input type="tel"
                                        className="form-control volunteer-card-text text-muted input-form-link"
                                        id="phone"
                                        placeholder="Your Phone Number"
                                        required
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                    />
                                </div>
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mt-3 mb-1 bold-form-label' htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="form-control volunteer-card-text text-muted input-form-link" id="phone" placeholder="Your Phone Number" required />
                                </div>
                                <p className='text-muted disclosure my-2'>By submitting your cell phone number you are agreeing to receive periodic text messages from this organization. Message and data rates may apply.</p>
                                <button className="btn btn-moving-gradient btn-moving-gradient--blue mb-4" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {isSubmitted && <ConfirmationPopup onClose={() => { setIsSubmitted(false); onClose(); }} />}
        </>
    );
}

export default Popup;