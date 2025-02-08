import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { useTranslation } from 'react-i18next';

const VisionCard = ({ title, items }) => {
    const { t } = useTranslation(); // Add this line inside the VisionCard component
    return (
        <div className='community-care-section py-4 py-lg-5'>
            <h3 className='work-title'>
                {t(title)}
            </h3>
            <div className='row mt-4 h-100 justify-content-center'>
                {items.map((item, index) => (
                    <div key={index} className='col-sm-6 col-lg-6 mb-4 py-2 justify-content-center'>
                        <div className='volunteer-card volunteer-card-background card p-4'>
                            <p className='vision-box-text'>{t(item)}</p>
                            <div>
                                <BsArrowRight className='float-center' />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='line-vision-sections'></div> */}
        </div>
    );
};



function Vision() {

    const { t } = useTranslation();

    const visionData = [
        {
            title: t('getinvolved_vision_card_data_title1'),
            items: [
                t('getinvolved_vision_card_1_1'),
                t('getinvolved_vision_card_1_2'),
                // t('getinvolved_vision_card_1_3'),
                // t('getinvolved_vision_card_1_4'),
            ],
        },
        {
            title: t('getinvolved_vision_card_data_title2'),
            items: [
                t('getinvolved_vision_card_2_1'),
                t('getinvolved_vision_card_2_2'),
                t('getinvolved_vision_card_2_3'),
                t('getinvolved_vision_card_2_4'),
                // t('getinvolved_vision_card_2_5'),
            ],
        },
        {
            title: t('getinvolved_vision_card_data_title3'),
            items: [
                t('getinvolved_vision_card_3_1'),
                t('getinvolved_vision_card_3_2'),
                // t('getinvolved_vision_card_3_3'),
            ],
        },
        {
            title: t('getinvolved_vision_card_data_title4'),
            items: [
                t('getinvolved_vision_card_4_1'),
                t('getinvolved_vision_card_4_2'),
                t('getinvolved_vision_card_4_3'),
            ],
        },
    ];
    

    return (
        <>
            <section>
                <div className='container container-padding h-100'>
                    <div className='row cd-vision-photo h-100 justify-content-center hero-container'>
                        <div className='col my-auto photo-container'>
                            {/* TODO: Replace with a different photo */}
                            <div className=''></div>
                        </div>
                        <div className='col my-auto'>
                            <h2 id='vision-hero-text' className='mb-5 mb-10 about-photo-margins hero-text about-hero-text text-uppercase'>{t('h2_title_vision')}</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-4 py-lg-5'>
                <div className='container h-100'>
                    <div className="row h-100 justify-content-center timeline-container">
                        {/* Quote from Crystal */}
                        <div className="col-lg-12">
                            <h3 className="join-convo-text text-center">{t('h3_title_crystals_vision')}</h3>
                        </div>
                    </div>
                    <div className='row h-100 timeline-container'>
                        <div className='col-lg-12 d-flex justify-content-center'>
                            <div className='timeline'>
                                <div className='card-body vision-quote'>
                                    <span className="tm--quote_icon icon_quote">
                                        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="#000000" viewBox="0 0 34.01 30.64"><defs><style>.cls-1</style></defs><title>quotes</title><path className="cls-1" d="M14.56,0C4.24,2.17,0,9.45,0,18.91V30.64H12.6V17.93H7.28c0-7.28,2.17-11.84,8.91-13.69Z"></path><path className="cls-1" d="M32.38,0C22.06,2.17,17.82,9.45,17.82,18.91V30.64h12.6V17.93H25.1c0-7.28,2.17-11.84,8.91-13.69Z"></path></svg>				</span>
                                    <h5 className="card-title text-uppercase">{t('h5_title_vision')}</h5>
                                    <h6 className="card-subtitle mb-2 mt-3 text-muted said-quote">- Crystal Dávila</h6>
                                    {/* creates a line */}
                                    <div className="line-vision-sections"></div>

                                </div>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </section>
            <div className='blue-wrapper rectangle-section container h-100'>
                <section>
                    <div className="container text-center h-100 rectangle-section">
                        <div className="row h-100 justify-content-center ">
                            {visionData.map((data, index) => (
                                <VisionCard key={index} title={data.title} items={data.items} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Vision;