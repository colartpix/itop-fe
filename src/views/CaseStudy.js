import React from 'react';

import '../scss/style.scss'
import video from '../assets/video.png';
import one from '../assets/1.png';
import two from '../assets/2.png';
import three from '../assets/3.png';
import Rectangle_30 from '../assets/Rectangle_30.png';
import Rectangle_31 from '../assets/Rectangle_31.png';
import Rectangle_32 from '../assets/Rectangle_32.png';
import jambotronwhy from '../assets/jambotronwhy.png';
import Banner from '../assets/Banner.png';

const CaseStudy = ({
  props
}) => {

  return (
    <>

      <div className="container">
        <div className="sectionpadding80 row align-items-center justify-content-between">
          <div className="col-lg-3">
            <h1 className="text-dark text-bold">Case Study</h1>
            <h1 className="text-dark text-bold">Title</h1>
            <h5 className="line-height-banner">Empower your company’s supply chanin management with iTop and allow it to functoin efficiently and cost effectively.</h5>
            <button className="btn btn-primary text-uppercase">read full story</button>
          </div>
          <div className="col-lg-7"><img src={Rectangle_30} className="casestudybanner" /></div>

        </div>

      </div>
      <div className="container-fluid bg-white">
        <div className="container sectionpadding80">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6"><img src={video} className="boximg" /></div>

            <div className="col-lg-6">
              <h2 className="text-dark text-bold">Title</h2>
              <h5 className="line-height-banner">iTop dashboard suite will use data visualization to display key performance indicators that highlight functional performance and generates actionable insights. iTop dashboard suite will use data visualization to display key performance indicators that highlight functional performance and generates actionable insights.</h5>
            </div>
          </div>
        </div>

      </div>

      <div className="container-fluid py-5">
        <div className="container">

          <div className="row">
            <div className="col-lg-4">
              <div className="p-3 rounded-lg mb-3">
                <div className="mb-4 text-center"><img src={one} /></div>
                <p className="text-dark h5 font-bold text-center">Challenge</p>
                <div className="mb-0 text-left">
                  <ul>
                    <li>Multiple, disparate back-office systems</li>
                    <li>Manual processes among the 11 back-office systems</li>
                    <li>Usability challenges due to clunky workflows and limited visibility</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-3 rounded-lg mb-3">
                <div className="mb-4 text-center"><img src={two} /></div>
                <p className="text-dark h5 font-bold text-center">Solution</p>
                <div className="mb-0 text-left">
                  <ul>
                    <li>Multiple, disparate back-office systems</li>
                    <li>Manual processes among the 11 back-office systems</li>
                    <li>Usability challenges due to clunky workflows and limited visibility</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="p-3 rounded-lg mb-3">
                <div className="mb-4 text-center"><img src={three} /></div>
                <p className="text-dark h5 font-bold text-center">Results</p>
                <div className="mb-0 text-left">
                  <ul>
                    <li>One, unified solution for financial management, human capital management, and payroll</li>
                    <li>Improved efficiency and increased agility</li>
                    <li>No silos among the IT, finance, and HR teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="container-fluid bg-white">
        <div className="bg-section sectionpadding80">
          <div className="container">
            <h5 className="text-center pb-5 font-bold text-uppercase text-dark">related Case Studies</h5>
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
          <div className="smallContainer sectionpadding80 pb-0">
            <img className="w-100" src={Banner} />
          </div>
        </div>



      </div>
      <div className="container sectionpadding80">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <h2 className="text-dark text-bold mb-4">Go Mobile</h2>
            <h5 className="line-height-banner mb-4">Send the quotation to the delivery of the material can be done with the click of a button. Automate the data entries which reduces manpower investment, much as making it error free.</h5>
            <button className="btn btn-primary text-uppercase">ask for a demo</button>
          </div>
          <div className="col-lg-6"><img src={jambotronwhy} style={{ width: '100%' }} /></div>

        </div>
      </div>
      <div className="bg-img sectionpadding80">
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

export default CaseStudy