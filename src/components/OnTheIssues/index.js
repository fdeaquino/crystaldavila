import React from 'react';

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
                        {/* Dropdown 1 */}
                        <div className="col-lg-6 dropdown d-flex dropdown-right my-2">
                            <button
                                className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
                                type="button"
                                id='dropdownMenuButton'
                                data-bs-toggle="dropdown"
                                aria-has-popup="true"
                                aria-expanded="false"
                            >
                                School District Transparency
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <button type="button" className="close" data-dismiss="dropdown" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul className="p-4 mb-0">
                                    <li className='decoration-none'><p>Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.</p></li>
                                    <li className='decoration-none'>
                                        <button className="dropdown-item" type="button"><a className="dropdown-item" href="#">Learn more</a></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Dropdown 2 */}
                        <div className="col-lg-6 dropdown d-flex dropdown-left my-2">
                            <button
                                className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
                                type="button"
                                id='dropdownMenuButton'
                                data-bs-toggle="dropdown"
                                aria-has-popup="true"
                                aria-expanded="false"
                            >
                                School Funding
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button type="button" className="close" data-dismiss="dropdown" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul className="p-4 mb-0">
                                    <li className='decoration-none'><p>Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.</p></li>
                                    <li className='decoration-none'>
                                        <button className="dropdown-item" type="button"><a className="dropdown-item" href="#">Learn more</a></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Dropdown 3 */}
                        <div className="col-lg-6 dropdown d-flex dropdown-right my-2">
                            <button
                                className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
                                type="button"
                                id='dropdownMenuButton'
                                data-bs-toggle="dropdown"
                                aria-has-popup="true"
                                aria-expanded="false"
                            >
                                Teacher Burnout
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <button type="button" className="close" data-dismiss="dropdown" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul className="p-4 mb-0">
                                    <li className='decoration-none'><p>Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.</p></li>
                                    <li className='decoration-none'>
                                        <button className="dropdown-item" type="button"><a className="dropdown-item" href="#">Learn more</a></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Dropdown 4 */}
                        <div className="col-lg-6 dropdown d-flex dropdown-left my-2">
                            <button
                                className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
                                type="button"
                                id='dropdownMenuButton'
                                data-bs-toggle="dropdown"
                                aria-has-popup="true"
                                aria-expanded="false"
                            >
                                College Readiness
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button type="button" className="close" data-dismiss="dropdown" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul className="p-4 mb-0">
                                    <li className='decoration-none'><p>Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.</p></li>
                                    <li className='decoration-none'>
                                        <button className="dropdown-item" type="button"><a className="dropdown-item" href="#">Learn more</a></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Dropdown 5 */}
                        <div className="col-lg-6 dropdown d-flex dropdown-right my-2">
                            <button
                                className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
                                type="button"
                                id='dropdownMenuButton'
                                data-bs-toggle="dropdown"
                                aria-has-popup="true"
                                aria-expanded="false"
                            >
                                Early Childhood Education
                            </button>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                <button type="button" className="close" data-dismiss="dropdown" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul className="p-4 mb-0">
                                    <li className='decoration-none'><p>Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.</p></li>
                                    <li className='decoration-none'>
                                        <button className="dropdown-item" type="button"><a className="dropdown-item" href="#">Learn more</a></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Dropdown 6 */}
                        <div className="col-lg-6 dropdown d-flex dropdown-left my-2">
                            <button
                                className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
                                type="button"
                                id='dropdownMenuButton'
                                data-bs-toggle="dropdown"
                                aria-has-popup="true"
                                aria-expanded="false"
                            >
                                School Safety
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button type="button" className="close" data-dismiss="dropdown" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul className="p-4 mb-0">
                                    <li className='decoration-none'><p>Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.</p></li>
                                    <li className='decoration-none'>
                                        <button className="dropdown-item" type="button"><a className="dropdown-item" href="#">Learn more</a></button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* EXPERIMENTING */}
                        {/* <div className="col-lg-6 dropdown d-flex dropdown-left my-2">
                            <button
                                className="priority-dropdown-styles btn btn-moving-gradient btn-moving-gradient--blue dropdown-toggle"
                                type="button"
                                id='dropdownMenuButton'
                                data-bs-toggle="dropdown"
                                aria-has-popup="true"
                                aria-expanded="false"
                            >
                                School Safety
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button type="button" className="close" data-dismiss="dropdown" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul className="p-4 mb-0">
                                    <li className='decoration-none'><p>Unicorn asymmetrical hammock deep v yr aesthetic. Skateboard helvetica heirloom, edison bulb plaid vegan listicle chambray forage copper mug ugh poke ethical glossier pabst. Meh grailed lomo raclette vinyl enamel pin bushwick scenester. Tofu humblebrag la croix sartorial, mixtape small batch ascot godard pork belly fanny pack. Narwhal vegan raw denim letterpress offal.</p></li>
                                    <li className='decoration-none'>
                                        <button className="dropdown-item" type="button"><a className="dropdown-item" href="#">Learn more</a></button>
                                    </li>
                                </ul>
                            </div>


                        </div> */}

                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default OnTheIssues;