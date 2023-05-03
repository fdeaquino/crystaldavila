import React from 'react';
import { useTranslation } from 'react-i18next';


function VolunteerSignUp() {
    const { t } = useTranslation();

    return (
        <>
            <div className='container'>
                <div className='row d-flex justify-content-center my-5 py-5'>
                    <h4 className='text-center col-12 my-5'>{t('signupform_coming_soon')}</h4>
                    <a className='col-12 d-flex justify-content-center' href='/crystaldavila'>
                        <button className='btn-moving-gradient btn-moving-gradient--blue btn'>{t('back_to_home')}</button>

                    </a>
                </div>
            </div>

        </>
    )
}

export default VolunteerSignUp;