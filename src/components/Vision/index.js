import React from 'react';

function Vision() {
    return (
        <>
            <section>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className='col my-auto photo-container'>
                            {/* TODO: Replace with a different photo */}
                            <div className='cd-photo'></div>
                        </div>
                        <div className='col my-auto'>
                            <h2 className='mb-5 hero-text text-uppercase'>Crystal's vision for a better future for us all.</h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-4 py-lg-5'>
                <div className='container h-100'>
                    <div className="row h-100 justify-content-center timeline-container">
                        {/* Quote from Crystal */}
                        <div className="col-lg-12">
                            <h3 className="join-convo-text text-center">Crystal's Vision</h3>
                        </div>
                        <div className='card-body vision-quote'>
                            <span class="tm--quote_icon icon_quote">
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" fill="#003468" viewBox="0 0 34.01 30.64"><defs><style>.cls-1</style></defs><title>quotes</title><path class="cls-1" d="M14.56,0C4.24,2.17,0,9.45,0,18.91V30.64H12.6V17.93H7.28c0-7.28,2.17-11.84,8.91-13.69Z"></path><path class="cls-1" d="M32.38,0C22.06,2.17,17.82,9.45,17.82,18.91V30.64h12.6V17.93H25.1c0-7.28,2.17-11.84,8.91-13.69Z"></path></svg>				</span>
                            <h5 class="card-title text-uppercase">There's an opportunity for us to be visionary, bold and loud about what our better tomorrow looks like. Replace with an actual quote from crystal.</h5>
                            <h6 class="card-subtitle mb-2 text-muted">- Crystal Davila</h6>
                            <p className='vision-card-link'></p>

                        </div>


                    </div>
                </div>
            </section>
            <section className='py-4 py-lg-5'>
                <div className='container h-100'>
                    <div className="row h-100 justify-content-center timeline-container">
                        {/* Three Vision Cards */}
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Vision;