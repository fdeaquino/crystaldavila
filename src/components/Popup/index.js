import React from 'react';

function Popup({ onClose }) {
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
                            <form className="contact-form d-block mx-auto" autoComplete="off">
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mb-1 bold-form-label' htmlFor="name">Name</label>
                                    <input type="text" className="form-control volunteer-card-text text-muted input-form-link" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="form-group mx-1">
                                    <label className='volunteer-card-text input-form-subtitle mt-3 mb-1 bold-form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control volunteer-card-text text-muted input-form-link" id="email" placeholder="Your Email" required />
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
        </>
    );
}

export default Popup;