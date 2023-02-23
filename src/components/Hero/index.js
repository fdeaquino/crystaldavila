import React from 'react';

function Hero() {
    return (
        <section>
            <div className='container h-100'>
                <div className='row h-100 justify-content-center'>
                    <div className='col-7 my-auto photo-container'>
                        <div className='cd-photo'></div>
                    </div>
                    <div className='col-md-5 col my-auto'>
                        <div className='mx-auto header-content'>
                            <h2 className='mb-5 hero-text text-uppercase'>Fighting For a Better Future For Our Students</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero;