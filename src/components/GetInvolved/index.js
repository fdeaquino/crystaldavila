import React from 'react';

function GetInvolved() {

    // Replace this sample data
    const events = [
        {
            title: 'Town Hall Meeting',
            date: 'April 10, 2023',
            time: '6:00 PM',
            location: 'Community Center',
            imageUrl: 'town-hall-banner.jpg'
        },
        {
            title: 'Fundraising Dinner',
            date: 'April 20, 2023',
            time: '7:00 PM',
            location: 'Local Restaurant',
            imageUrl: 'fundraising-dinner-banner.jpg'
        },
        {
            title: 'Fundraising Dinner',
            date: 'April 20, 2023',
            time: '7:00 PM',
            location: 'Local Restaurant',
            imageUrl: 'fundraising-dinner-banner.jpg'
        }
    ];

    return (
        <>
            {/* First section - Get Involved header */}
            <section>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className='col my-auto'>
                            <h2 className='mb-5 issues-header-text text-uppercase'>Get Involved<span><p>Stand With Us</p></span></h2>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second section - Intro for Get Involved Page */}
            <section className='py-4 py-lg-5'>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center timeline-container">
                        <div className="col-lg-12">
                            <p className="join-convo-text text-center">Your support and active participation are crucial to the success of our campaign. By joining our community-driven efforts, you can help make a lasting impact on the future of our schools. Let's work together to create positive change for our students, educators, and the entire community.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Third section - Volunteer With Us */}
            <section className="volunteer-section py-4 py-lg-5">
                <div className="container text-center h-100">
                    <h3>Volunteer with Us</h3>
                    <p>Join our team and make a difference by participating in various volunteer activities:</p>
                    <div className="row mt-4 h-100 justify-content-center ">
                        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                            <div className="volunteer-card card p-4">
                                <img src="canvassing-icon.png" alt="Canvassing Icon" className="mb-3" />
                                <h4>Canvassing</h4>
                                <p>Help us spread the word by going door-to-door in your neighborhood.</p>
                                <button className="btn btn-primary mt-2" onClick={() => window.location.href = 'canvassing-signup.html'}>Sign Up</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                            <div className="volunteer-card card p-4">
                                <img src="phone-banking-icon.png" alt="Phone Banking Icon" className="mb-3" />
                                <h4>Phone Banking</h4>
                                <p>Assist with calling potential supporters to discuss our campaign's goals and events.</p>
                                <button className="btn btn-primary mt-2" onClick={() => window.location.href = 'phone-banking-signup.html'}>Sign Up</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4 d-flex justify-content-center">
                            <div className="volunteer-card card p-4">
                                <img src="phone-banking-icon.png" alt="Phone Banking Icon" className="mb-3" />
                                <h4>Social Media Outreach</h4>
                                <p>Engage the community and expand our social media presence.</p>
                                <button className="btn btn-primary mt-2" onClick={() => window.location.href = 'phone-banking-signup.html'}>Sign Up</button>
                            </div>
                        </div>
                        {/* Add more volunteer cards as needed */}
                    </div>
                </div>
            </section>
            {/* Fourth section - Event Calendar */}
            <section className="event-calendar py-5">
                <div className="container text-center">
                    <h2>Upcoming Events</h2>
                    <div className="row mt-4">
                        {events.map((event, index) => (
                            <div key={index} className="col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                                <div className="card event-card">
                                    <img src={event.imageUrl} alt={event.title} className="card-img-top" />
                                    <div className="card-body">
                                        <h3 className="card-title">{event.title}</h3>
                                        <p>{event.date} at {event.time}</p>
                                        <p>{event.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary" onClick={() => window.location.href = 'full-event-calendar.html'}>View Full Calendar</button>
                </div>
            </section>
            {/* Fifth section - Voter Registration Information */}
            <section className="voter-registration py-5">
                <div className="container text-center">
                    <h2>Register to Vote & Election Information</h2>
                    <div className="row mt-4">
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="voter-info">
                                <img src="registration-icon.png" alt="Registration Icon" className="mb-3" />
                                <h3>Voter Registration</h3>
                                <p>Deadline: October 1, 2023</p>
                                <a href="https://www.vote.org/register-to-vote/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">Register Now</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="voter-info">
                                <img src="early-voting-icon.png" alt="Early Voting Icon" className="mb-3" />
                                <h3>Early Voting</h3>
                                <p>October 15 - November 1, 2023</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <div className="voter-info">
                                <img src="polling-location-icon.png" alt="Polling Location Icon" className="mb-3" />
                                <h3>Polling Locations</h3>
                                <p>Find your nearest polling location</p>
                                <a href="https://www.vote.org/polling-place-locator/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">Find Location</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sixth section - Donations */}
            <section className="donate-section py-5">
                <div className="container text-center">
                    <h2>Make a Contribution</h2>
                    <p>Your financial support will help us reach more voters, print campaign materials, and fuel our grassroots efforts. Every dollar makes a difference in ensuring a successful campaign.</p>
                    <button className="btn btn-primary mt-3 mb-4" onClick={() => window.location.href = 'donation-page.html'}>Donate Today</button>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Recurring Donations</h3>
                            <p>Support our campaign on an ongoing basis by setting up a monthly donation.</p>
                            <button className="btn btn-secondary mt-3" onClick={() => window.location.href = 'recurring-donation-page.html'}>Set Up Recurring Donation</button>
                        </div>
                        <div className="col-md-6">
                            <h3>Mail a Check</h3>
                            <p>If you prefer to donate by mail, please send your check to:</p>
                            <address>
                                Crystal Davila - School Board Reelection Campaign<br />
                                1234 Main St.<br />
                                Pasadena, TX 77506
                            </address>
                        </div>
                    </div>
                </div>
            </section>
            {/* Seventh section - Contact Information */}
            <section className="contact-info py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Get in Touch</h2>
                            <p>Phone: (123) 456-7890</p>
                            <p>Email: info@campaignwebsite.com</p>
                            <p>Address: 1234 Main St, Pasadena, TX 77506</p>
                        </div>
                        <div className="col-md-6">
                            <h2>Contact Us</h2>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetInvolved;