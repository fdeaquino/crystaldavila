import React from 'react';
import { useTranslation } from 'react-i18next';


function ConfirmationPopup({ onClose }) {
    const { t } = useTranslation();

    return (
        <>
            <div className='success-popup-overlay'>
                <div className='success-popup-container close-button-container bg-multi d-flex justify-content-center'>
                    <div className="">

                        <button
                            className="circular-close-button"
                            onClick={() => {
                                onClose();
                            }}
                        >
                            X
                        </button>
                    </div>
                    <h3 className='my-3 input-form-title'>
                        {t('submission_successful')}
                    </h3>

                </div>
            </div>
        </>
    )
}

export default ConfirmationPopup;