import React from 'react';

function Hero() {
    return (
        <>
            <section>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className='col my-auto photo-container'>
                            <div className='cd-photo'></div>
                        </div>
                        <div className='col my-auto'>
                            <h2 className='mb-5 hero-text text-uppercase'>Fighting For a Better Future For Our Students</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-4 py-lg-5">
                <div class="container h-100 card custom-card-styles" >
                    <div className='row justify-content-center align-items-center stack-quote-photo'>
                        <div class="col-6 h-100 card-body">
                            <span class="tm--quote_icon icon_quote">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="#003468" viewBox="0 0 34.01 30.64"><defs><style>.cls-1</style></defs><title>quotes</title><path class="cls-1" d="M14.56,0C4.24,2.17,0,9.45,0,18.91V30.64H12.6V17.93H7.28c0-7.28,2.17-11.84,8.91-13.69Z"></path><path class="cls-1" d="M32.38,0C22.06,2.17,17.82,9.45,17.82,18.91V30.64h12.6V17.93H25.1c0-7.28,2.17-11.84,8.91-13.69Z"></path></svg>				</span>
                            <h5 class="card-title text-uppercase">Card title with a quote Card title with a quote</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle What we are trying to do is What we are trying to do is What we are trying to do is</h6>
                            <a href="/" class="card-link card-link-style">Learn About Crystal's Vision</a>
                        </div>
                        <div className='col-6 cd-group-photo'></div>
                    </div>
                </div>

            </section>

            <section class="py-4 py-lg-5 ">
                <div class="container">
                    <h3 className='join-convo-text'>Join The Conversation</h3>
                    <span className='join-convo-text pb-4 event-header'>Upcoming Events</span>
                    <div className='row justify-content-center'>
                        <div class="col h-100 event-styles py-3 my-2">
                            <h4 className='text-muted'>Dia De Los Niños Celebration</h4>
                            {/* kids image goes here */}
                            <div></div>
                            <a><button class="btn btn-moving-gradient btn-moving-gradient--blue"> Learn More </button></a>
                        </div>
                        <div class="col h-100 event-styles py-3 my-2">
                            <h4 className='text-muted'>Café con Crystal</h4>
                            {/* kids image goes here */}
                            <div></div>
                            <a><button class="btn btn-moving-gradient btn-moving-gradient--blue"> Learn More </button></a>
                        </div>
                        <div class="col h-100 event-styles py-3 my-2">
                            <h4 className='text-muted'>Cinco de Mayo Celebration</h4>
                            {/* kids image goes here */}
                            <div></div>
                            <a><button class="btn btn-moving-gradient btn-moving-gradient--blue"> Learn More </button></a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-4 py-lg-5">
                <div class="container">
                    <h3 className='join-convo-text'>Past Work and Advocacy</h3>
                    <span className='join-convo-text pb-4 event-header'>Upcoming Events</span>
                </div>
            </section>
        </>
    )
}


export default Hero;