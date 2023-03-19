import React from 'react';

// the priorities array stores the data for each dropdown
const priorities = [
    {
        title: 'School District Transparency',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'School Funding',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'Teacher Burnout',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'College Readiness',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'Early Childhood Education',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    },
    {
        title: 'School Safety',
        content: 'Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.',
    }

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
                    <p>{content}</p>
                </li>
                <li className='decoration-none'>
                    <button className='dropdown-item' type='button'>
                        <a className='dropdown-item' href='#'>
                            Learn more
                        </a>
                    </button>
                </li>
            </ul>
        </div>
    </div>
)

function OnTheIssues() {
    return (
        <>
            {/* First section - Issues header */}
            <section>
                <div className='container h-100'>
                    <div className='row h-100 justify-content-center hero-container'>
                        <div className='col my-auto'>
                            <h2 className='mb-5 issues-header-text text-uppercase'>Issues</h2>
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
                    <div className="row h-100 timeline-container">
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

export default OnTheIssues;