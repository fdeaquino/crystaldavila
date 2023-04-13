import React, { useEffect, useState } from 'react';

function Hero() {
    // Replace this sample data
    const pastworks = [
        {
            title: 'Example 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat.',
            imageUrl: 'town-hall-banner.jpg'
        },
        {
            title: 'Example 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat.',
            imageUrl: 'fundraising-dinner-banner.jpg'
        },
        {
            title: 'Example 3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat.',
            imageUrl: 'fundraising-dinner-banner.jpg'
        },
        {
            title: 'Example 4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat.',
            imageUrl: 'fundraising-dinner-banner.jpg'
        },
        {
            title: 'Example 5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ut aliquip ex ea commodo consequat.',
            imageUrl: 'fundraising-dinner-banner.jpg'
        }
    ];

    const [isHorizontal, setIsHorizontal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const { width, height } = window.screen;
            setIsHorizontal(width >= 550 && width <= 920 && height < width);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className={`col my-auto photo-container ${isHorizontal ? 'cd-photo' : ''}`}>
                            <div id={isHorizontal ? 'horizontal-cd-photo' : ''} className={isHorizontal ? 'hidden' : 'cd-photo'}></div>


                        </div>
                        <div className='col my-auto'>
                            <h2 className='mb-5 mb-10 hero-text text-uppercase about-hero-text'>Fighting For a Better Future For Our Students</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-4 py-lg-5">
                <div class="container h-100 card custom-card-styles" >
                    <div className='row justify-content-center align-items-center stack-quote-photo'>
                        <div class="col-6 h-100 card-body card-width">
                            <span class="tm--quote_icon icon_quote">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="#003468" viewBox="0 0 34.01 30.64"><defs><style>.cls-1</style></defs><title>quotes</title><path class="cls-1" d="M14.56,0C4.24,2.17,0,9.45,0,18.91V30.64H12.6V17.93H7.28c0-7.28,2.17-11.84,8.91-13.69Z"></path><path class="cls-1" d="M32.38,0C22.06,2.17,17.82,9.45,17.82,18.91V30.64h12.6V17.93H25.1c0-7.28,2.17-11.84,8.91-13.69Z"></path></svg>				</span>
                            <h5 class="card-title text-uppercase">Card title with a quote Card title with a quote</h5>
                            <p class="card-subtitle mb-2 text-muted">Card subtitle What we are trying to do is What we are trying to do is What we are trying to do is</p>
                            <a href="/crystaldavila/vision" class="card-link card-link-style">Learn About Crystal's Vision</a>
                        </div>
                        <div className='col-6 cd-group-photo'></div>
                    </div>
                </div>

            </section>
            <div className='blue-wrapper rectangle-section container h-100 py-4 py-lg-5'>
                <section class="py-4 py-lg-5 ">
                    <div class="container text-center h-100 rectangle-section">
                        <h3 className='volunteer-title'>Join The Conversation</h3>
                        <p className='volunteer-content-text volunteer-card-text'>Upcoming Events</p>
                        <div className='row mt-4 h-100 justify-content-center'>
                            <div class="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Café con Crystal</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Restaurant Name</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>April 4th, 2023</p>
                                <a><button class="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button></a>
                            </div>
                            <div class="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Dia De Los Niños Celebration</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Memorial Park</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>April 30th, 2023</p>
                                <a><button class="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button></a>
                            </div>
                            <div class="col h-100 event-styles volunteer-card-background py-3 my-2">
                                <h4 className='mb-3'>Cinco de Mayo Celebration</h4>
                                {/* kids image goes here */}
                                <div></div>
                                <p className='event-info mb-1'>Strawberry Park</p>
                                <p className='event-info mb-1'>123 Main St. Pasadena, TX 77506</p>
                                <p className='event-info'>May 5th, 2023</p>
                                <a><button class="btn btn-moving-gradient btn-moving-gradient--blue learn-more-btn-styles"> Learn More </button></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="py-4 py-lg-5 ">
                    <div class="container text-center h-100 rectangle-section">
                        <h3 className='work-title'>Past Work and Advocacy</h3>
                        <p className='work-content-text work-card-text'>Progress in Pasadena I.S.D.</p>
                        <div className="row mt-4 h-100 justify-content-center">
                            {pastworks.map((work, index) => (
                                <div key={index} className="col-md-6 col-lg-4 py-3 ">
                                    <div className=" bg-light-gray work-styles">
                                        <img src={work.imageUrl} alt={work.title} className="card-img-top my-2" />
                                        <div className="card-body">
                                            <h4 className="card-title my-2">{work.title}</h4>
                                            <p className='work-card-text p-2'>{work.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="donate-section py-4 py-lg-5 ">
                    <div className="container text-center">
                        <h3 className='mb-5 contribution-title'>Make a Contribution</h3>
                        <p className='volunteer-card-text mt-3 contribution-content-text'>Your financial support will help us reach more voters, print campaign materials, and fuel our grassroots efforts. Every dollar makes a difference in ensuring a successful campaign.</p>
                        <a href="donation-page.html">
                            <button class="btn btn-moving-gradient btn-moving-gradient--donate mt-3 mb-4">Donate Today</button>
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Hero;