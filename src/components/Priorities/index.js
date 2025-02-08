import React from 'react';
import otjSchoolSafety from '../../assets/images/otj-school-safety.jpeg';
import otjPrepStudentsWorld from '../../assets/images/otj-prep-students-world.jpeg';
import otjSchoolFunding from '../../assets/images/otj-school-funding.jpeg';
import otjTeacherWLBalance from '../../assets/images/otj-teacher-wl-balance.jpeg';
import otjEmotionalSupport from '../../assets/images/otj-meeting-emotional-needs.jpg';

import { useTranslation } from 'react-i18next';


function Priorities() {
    const { t } = useTranslation();

    return (
        <>
            {/* First section - On The Job header */}
            <section>
                <div className='container container-padding h-100'>
                    <div className='row cd-on-the-job-photo h-100 justify-content-center hero-container otj-hero-container'>
                        {/* <div className='col my-auto d-flex'>
                            <h2 className='mb-5 p-1  otj-hero-text text-uppercase'>On The Job</h2>
                        </div> */}

                    </div>
                </div>
            </section>

            {/* Second section - Intro for On The Job Page */}
            <section className="py-4 py-lg-5">
                <div className="container h-100 card custom-card-styles" >
                    <div className='row justify-content-center align-items-center stack-quote-photo'>

                        <div className="col-6 h-100 card-body card-width text-center">

                            <h3 className="card-title text-uppercase">{t('otj_h3_title_shaping_elevating')}
                            </h3>
                            <p className="card-subtitle mb-2 text-muted d-flex">{t('otj_subtitle_shaping_elevating')}</p>
                        </div>

                    </div>
                </div>

            </section>

            {/* Third section - Top 5 Priorities */}

            <div className='blue-wrapper rectangle-section container h-100 my-4 my-lg-5'>
                <section className="py-4 py-lg-5 ">
                    <div className="container text-center h-100 rectangle-section">
                        <h3 className='volunteer-title'>{t('h3_title_crystals_priorities')}</h3>
                        <div className='row mt-4 h-100 justify-content-center'>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjSchoolSafety}
                                        // TODO: Change alt text: "otj_h3_text_school_safety"
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('otj_h4_title_school_safety')}</h4>
                                        <p className='work-card-text p-2'>{t('otj_h3_text_school_safety')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjPrepStudentsWorld}
                                        // TODO: Change alt text: "otj_h3_text_prep_students_world"
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('otj_h4_title_prep_students_world')}</h4>
                                        <p className='work-card-text p-2'>{t('otj_h3_text_prep_students_world')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjSchoolFunding}
                                        // TODO: Change alt text: "otj_h3_text_school_funding"
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('otj_h4_title_school_funding')}</h4>
                                        <p className='work-card-text p-2'>{t('otj_h3_text_school_funding')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjTeacherWLBalance}
                                        // TODO: Change alt text: "otj_h3_text_teacher_wl_balance"
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('otj_h4_title_teacher_wl_balance')}</h4>
                                        <p className='work-card-text p-2'>{t('otj_h3_text_teacher_wl_balance')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjEmotionalSupport}
                                        // TODO: Change alt text: "otj_h3_text_emotional_support"
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">{t('otj_h4_title_emotional_support')}</h4>
                                        <p className='work-card-text p-2'>{t('otj_h3_text_emotional_support')}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Priorities;