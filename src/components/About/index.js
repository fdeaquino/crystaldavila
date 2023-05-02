import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import earlyYears from '../../assets/images/cd-photo-student.jpg';
import collegeYears from '../../assets/images/cd-photo-collegeyears.jpeg';
import workTeacher from '../../assets/images/cd-photo-teacher.jpeg';
import firstCampaign from '../../assets/images/cd-photo-firstcampaign.jpeg';
import trusteeSwearingIn from '../../assets/images/cd-photo-sb-swearing-in.jpeg';

import { useTranslation } from 'react-i18next';


function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    const { t } = useTranslation();

    const timelineData = [
        {
            title: t('timeline_data_title_1'),
            subtitle: t('timeline_data_subtitle_1'),
            text: t('timeline_data_text_1'),
            imageUrl: earlyYears,
            inverted: false
        },

        {
            title: t('timeline_data_title_2'),
            subtitle: t('timeline_data_subtitle_2'),
            text: t('timeline_data_text_2'),
            imageUrl: collegeYears,
            inverted: true
        },
        {
            title: t('timeline_data_title_3'),
            subtitle: t('timeline_data_subtitle_3'),
            text: t('timeline_data_text_3'),
            imageUrl: workTeacher,
            inverted: false
        },
        {
            title: t('timeline_data_title_4'),
            subtitle: t('timeline_data_subtitle_4'),
            text: t('timeline_data_text_4'),
            imageUrl: firstCampaign,
            inverted: true
        },
        {
            title: t('timeline_data_title_5'),
            subtitle: t('timeline_data_subtitle_5'),
            text: t('timeline_data_text_5'),
            imageUrl: trusteeSwearingIn,
            inverted: false
        },
    ]

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <section>
                <div className='container container-padding h-100'>
                    <div className='row cd-about-photo h-100 justify-content-center hero-container'>
                        <div className='col my-auto photo-container'>

                        </div>
                        <div className='col my-auto'>
                            <h2 id='text-padding' className='mb-5 mb-10 about-photo-margins hero-text about-hero-text text-uppercase'>{t('h2_title_about')}</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-4 py-lg-5'>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center timeline-container">
                        <div className="col-lg-12">
                            <h3 className="join-convo-text text-center">{t('h3_title_crystals_story')}</h3>
                            <ul className="timeline">
                                {timelineData.map((item, index) => (
                                    <li className={`py-2 ${item.inverted ? ' timeline-inverted' : ''}`} key={index}>
                                        <div className="timeline-panel" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                            <div className="timeline-heading">
                                                <h4 className='text-dark'>{item.title}</h4>
                                                <h5 className="text-muted">{item.subtitle}</h5>
                                            </div>
                                            <div className="timeline-body">
                                                <p className="text-muted">{item.text}</p>
                                            </div>
                                        </div>
                                        {/* Container for image */}
                                        <div className="timeline-image d-flex justify-content-center" data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
                                            {/* circle with image inside it */}
                                            <img className="circle-image" src={item.imageUrl} alt="" onClick={() => setSelectedImage(item.imageUrl)} />
                                        </div>
                                        {index !== timelineData.length - 1 && (
                                            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                                                <div className="line"></div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {selectedImage && (
                <div className="modal show d-block" tabIndex="-1" onClick={() => setSelectedImage(null)}>
                    <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content ms-2 me-2">
                            <div className="close-button-container">
                                <button type="button" className="circular-close-button" onClick={() => setSelectedImage(null)}>
                                    X
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={selectedImage} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop show"></div>
                </div>
            )}

        </>
    )
}

export default About;