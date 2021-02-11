import React from 'react';
import bannerimg from '../assets/bannerimg.png';
import { Carousel } from 'react-bootstrap'

import '../scss/style.scss'

import Group_1 from '../assets/Group_1.png';
import Group_2 from '../assets/Group_2.png';
import Group_3 from '../assets/Group_3.png';
import Group_4 from '../assets/Group_4.png';
import Group_5 from '../assets/Group_5.png';
import Group_6 from '../assets/Group_6.png';
import Group_98 from '../assets/Group_98.png';
import Group_22 from '../assets/Group_22.png';
import Group_102 from '../assets/Group_102.png';
import Rectangle_30 from '../assets/Rectangle_30.png';
import Rectangle_31 from '../assets/Rectangle_31.png';
import Rectangle_32 from '../assets/Rectangle_32.png';


const Landing = ({
    props,
}) => {

    return (
        <>
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3">
                        <h1 className="text-dark text-bold">Business.</h1>
                        <h1 className="text-dark text-bold">Made easy.</h1>
                        <h5 className="line-height-banner">A full array of IT solutions and complete customized application development solution</h5>
                        <p><i className="far fa-check-circle"></i> No credit card needed</p>
                        <p className="pt-1"><i className="far fa-check-circle"></i> 30 Days free trial</p>
                    </div>
                    <div className="col-lg-7"><img src={bannerimg} style={{ width: '100%' }} /></div>

                </div>

                <div className="row text-center">
                    <div className="col-xxl-2 col-xl-2 col-lg-2 d-none d-lg-block pb-5">
                        <img src={Group_1} />
                        <p className="m-0 mt-4">Sales & </p>
                        <p>Distribution</p>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 d-none d-lg-block">
                        <img src={Group_2} />
                        <p className="m-0 mt-4">CEO </p>
                        <p>Dashboard</p>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 d-none d-lg-block">
                        <img src={Group_3} />
                        <p className="m-0 mt-4">Purchase & </p>
                        <p>Store</p>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 d-none d-lg-block">
                        <img src={Group_4} />
                        <p className="m-0 mt-4">Financial </p>
                        <p>Accounting</p>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 d-none d-lg-block">
                        <img src={Group_5} />
                        <p className="m-0 mt-4">Reporting & </p>
                        <p>Sheets</p>
                    </div>
                    <div className="col-xxl-2 col-xl-2 col-lg-2 d-none d-lg-block">
                        <img src={Group_6} />
                        <p className="m-0 mt-4">Customization & </p>
                        <p>Counters</p>
                    </div>
                </div>

            </div>

            <div className="container">
                <h2 className="text-center pb-5">END TO END CLOUD ERP SOLUTIONS</h2>
                <div className="row pb-5">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-0 pt-5">
                        <h2 className="pt-0 pt-5 mt-0 mt-5">Business Analytics</h2>
                        <p>iTop dashboard suite will use data visualization to display key performance indicators that
                        highlight
                        functional performance and generates actionable insights.</p>
                        <button type="button" className="btn btn-primary text-white">ASK FOR A DEMO</button>
                        <button type="button" className="btn custom-link">LEARN MORE</button>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">

                        <Carousel controls={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_98}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_22}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_102}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

                <div className="row pb-5">
                    <div className="float-right col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-0 pt-5">
                        <h2 className="pt-0 pt-5 mt-0 mt-5">Customization at every level</h2>
                        <p>iTop’s modular design allows for very high degree of flexibility and customizations.</p>
                        <button type="button" className="btn btn-primary text-white">ASK FOR A DEMO</button>
                        <button type="button" className="btn custom-link">LEARN MORE</button>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">

                        <Carousel controls={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_22}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_98}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_102}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                </div>

                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-0 pt-5">
                        <h2 className="pt-0 pt-5 mt-0 mt-5">Automation</h2>
                        <p>Send the quotation to the delivery of the material can be done with the click of a button.
                        Automate
                        the data entries which reduces manpower investment, much as making it error free.</p>
                        <button type="button" className="btn btn-primary text-white">ASK FOR A DEMO</button>
                        <button type="button" className="btn custom-link">LEARN MORE</button>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">

                        <Carousel controls={false}>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_102}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_22}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block imgcarousel"
                                    src={Group_98}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container py-5">
                <h2 className="text-center pb-5">END TO END CLOUD ERP SOLUTIONS</h2>
                <div className="row row-cols-2 row-cols-lg-5 g-4 text-center">
                    <div className="col">
                        <div className="p-4 bg-card1 rounded-lg mb-3">Material<br /> Management</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card2 rounded-lg  mb-3">Converge <br /> Integration</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card3 rounded-lg  mb-3">Sales <br /> Management</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card4 rounded-lg  mb-3">Financial <br /> Account</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card1 rounded-lg  mb-3">Material <br /> Management</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card3 rounded-lg  mb-3">Sales <br /> Management</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card4 rounded-lg  mb-3">Financial <br /> Account</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card1 rounded-lg  mb-3">Material <br /> Management</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card2 rounded-lg  mb-3">Material<br /> Management</div>
                    </div>
                    <div className="col">
                        <div className="p-4 bg-card3 rounded-lg  mb-3 ">Converge <br /> Integration</div>
                    </div>
                </div>
            </div>

            <div className="bg-section py-5">
                <div className="container">
                    <h2 className="text-center pb-5">CASE STUDIES</h2>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="card">
                                <img src={Rectangle_30} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <p className="card-text">Manage any construction project from the ground up and take care of all...</p>
                                    <a href="#" className="btn custom-link">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="card">
                                <img src={Rectangle_31} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <p className="card-text">Manage any construction project from the ground up and take care...</p>
                                    <a href="#" className="btn custom-link">READ MORE</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div className="card">
                                <img src={Rectangle_32} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <p className="card-text">Manage any construction project from the ground up and take care of all...</p>
                                    <a href="#" className="btn custom-link">READ MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-img py-0 py-md-5">
                <div className="container text-center py-5">
                    <h6 className="text-white">Try iTop for your team</h6>
                    <h2 className="text-white pb-3">30 Day Free Trial</h2>
                    <button type="button" className="btn custom-btn text-white">GET STARTED</button>

                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="footer-heading">
                                <span>Services</span>
                            </div>
                            <ul>
                                <li>General Ledger</li>
                                <li>Financial Reports</li>
                                <li>Accounts Revivable</li>
                                <li>Management Accounting</li>
                                <li>Inventory Management</li>
                                <li>Purchasing</li>
                                <li>Sales & Distribution</li>
                                <li>Sales Reports</li>
                                <li>Discreet Production</li>
                                <li>Management Information System - Reports</li>
                            </ul>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                            <div className="footer-heading">
                                <span>About iTop</span>
                            </div>
                            <ul>
                                <li>Company History</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Service</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Landing
