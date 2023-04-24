import React from 'react';

function ConfirmationPopup({ onClose }) {
    return (
        <div className='success-popup-overlay'>
            <div className='success-popup-container'>
                <h3>
                    Your submission was successful!
                </h3>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default ConfirmationPopup;