import React from 'react';

// the priorities array stores the data for each dropdown
const priorities = [
    {
        title: 'Preparing Students for the World',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'School Funding',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'Teacher Work-Life Balance',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'School Safety',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },

];

const PriorityDropdown = ({ title, content, alignLeft }) => (
    <div className={`col-lg-6 dropdown d-flex ${alignLeft ? 'dropdown-left' : 'dropdown-right'} my-2`}>
        <button
            className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
            type='button'
            id='dropdownMenuButton'
            data-bs-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
        >
            {title}
        </button>
        <div className={`dropdown-menu${alignLeft ? '' : ' dropdown-menu-end'}`} aria-labelledby="dropdownMenuButton">
            <button type="button" className='close' data-dismiss="dropdown" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <ul className='p-4 mb-0'>
                <li className='decoration-none'>
                    <p className='priorities-modal'>{content}</p>
                </li>
                <li className='decoration-none'>
                    <button className='dropdown-item' type='button'>
                        <a className='priority-card-link' href='#'>
                            Learn more
                        </a>
                    </button>
                </li>
            </ul>
        </div>
    </div>
)

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
            {/* Second section - Priorities list with dropdowns */}
            <section className='py-4 py-lg-5'>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center timeline-container">
                        <div className="col-lg-12">
                            <h3 className="join-convo-text text-center">Crystal's Priorities</h3>
                        </div>
                    </div>
                    <div className="row h-100 timeline-container otj-container-margin-top">

                        {/* PrioritiesDropdown component that takes in the title, content, and and alignLeft props to render each dropdown */}
                        {priorities.map((priority, index) => (
                            <PriorityDropdown
                                key={index}
                                title={priority.title}
                                content={priority.content}
                                alignLeft={index % 2 === 1}
                            />
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}

export default OnTheJob;