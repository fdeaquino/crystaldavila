import React from 'react';
import otjSchoolSafety from '../../assets/images/otj-school-safety.jpeg';
import otjPrepStudentsWorld from '../../assets/images/otj-prep-students-world.jpeg';
import otjSchoolFunding from '../../assets/images/otj-school-funding.jpeg';
import otjTeacherWLBalance from '../../assets/images/otj-teacher-wl-balance.jpeg';
import otjEmotionalSupport from '../../assets/images/otj-meeting-emotional-needs.jpeg';

function OnTheJob() {
    return (
        <>
            {/* First section - On The Job header */}
            <section>
                <div className='container container-padding h-100'>
                    <div className='row cd-on-the-job-photo h-100 justify-content-center hero-container otj-hero-container'>
                        <div className='col my-auto d-flex'>
                            <h2 className='mb-5 p-1  otj-hero-text text-uppercase'>On The Job</h2>
                        </div>

                    </div>
                </div>
            </section>

            <div className='blue-wrapper rectangle-section container h-100 my-4 my-lg-5'>
                <section className="py-4 py-lg-5 ">
                    <div className="container text-center h-100 rectangle-section">
                        <h3 className='volunteer-title'>Crystal's Priorities</h3>
                        <div className='row mt-4 h-100 justify-content-center'>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjSchoolSafety}
                                        // TODO: Change alt text
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">School Safety</h4>
                                        <p className='work-card-text p-2'>'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.'</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjPrepStudentsWorld}
                                        // TODO: Change alt text
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">Preparing Students for the World</h4>
                                        <p className='work-card-text p-2'>'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.'</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjSchoolFunding}
                                        // TODO: Change alt text
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">School Funding</h4>
                                        <p className='work-card-text p-2'>'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.'</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjTeacherWLBalance}
                                        // TODO: Change alt text
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">Teacher Work-Life Balance</h4>
                                        <p className='work-card-text p-2'>'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.'</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 py-3 ">
                                <div className=" bg-light-gray work-styles">
                                    <img src={otjEmotionalSupport}
                                        // TODO: Change alt text
                                        alt="Preparing Students for the World" className="card-img-top mb-2" />
                                    <div className="card-body">
                                        <h4 className="card-title my-2 px-1">Supporting Emotional Needs at School</h4>
                                        <p className='work-card-text p-2'>'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.'</p>
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

export default OnTheJob;