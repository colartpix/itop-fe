

import React from 'react';
import bannerwhy from '../assets/bannerwhy.png';

import '../scss/style.scss'
import jambotronwhy from '../assets/jambotronwhy.png';
import chartwhy from '../assets/chartwhy.png';
import Banner from '../assets/Banner.png';
import whybox from '../assets/whybox.png';
import { Row, Col } from 'react-bootstrap'


const WhyWe = ({
  props
}) => {


  return (
    <>

      <div className="container ">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 mobilepaddingtop mobilepaddingbottom">
            <h1 className="text-dark text-bold">Why are we</h1>
            <h1 className="text-dark text-bold">different</h1>
            <h5 className="line-height-banner">Empower your company’s supply chanin management with iTop and allow it to functoin efficiently and cost effectively.</h5>
          </div>
          <div className="col-lg-7"><img src={bannerwhy} style={{ width: '100%' }} /></div>

        </div>


      </div>
      <div className="container-fluid bg-white">
        <div className="container sectionpadding80">
          <div className="row">
            <div className="col-lg-3">
              <div className="p-3 card bluebghover rounded-lg mb-3">
                <p className="mb-5 font-bold">01</p>
                <p className="mb-0 font-bold">Effectiveness</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-3 card bluebghover rounded-lg mb-3">
                <p className="mb-5 font-bold">02</p>
                <p className="mb-0 font-bold">Timeliness</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-3 card bluebghover rounded-lg mb-3">
                <p className="mb-5 font-bold">03</p>
                <p className="mb-0 font-bold">Relative Cost</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="p-3 card bluebghover rounded-lg mb-3">
                <p className="mb-5 font-bold">04</p>
                <p className="mb-0 font-bold">Security</p>
              </div>
            </div>
          </div>
        </div>
        <div className="smallContainer sectionpadding80">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6"><img src={whybox} style={{ width: '100%' }} /></div>

            <div className="col-lg-6">
              <h2 className="text-dark text-bold">Automation</h2>
              <h5 className="line-height-banner">Send the quotation to the delivery of the material can be done with the click of a button. Automate the data entries which reduces manpower investment, much as making it error free.</h5>
            </div>
          </div>
        </div>
        <div className="smallContainer sectionpadding80 pt-0">
          <img className="w-100" src={Banner} />
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container sectionpadding80">



          <Row className=" align-items-center justify-content-between">
          <Col className="" xs={{ span:12, order: 'last' }} sm={{ span:12, order: 'last' }} lg={{ span:6, order: 'first' }}>
            <img src={chartwhy} className="boximg w-100" />
            </Col>

            <Col className="mobilepaddingtop mobilepaddingbottom" xs={{ span:12, order: 'first' }} sm={{ span:12, order: 'first' }} lg={{ span:6, order: 'last' }}>
              <h2 className="text-dark text-bold">Customize purchase and stock records to suit our business needs</h2>
              <h5 className="line-height-banner">iTop dashboard suite will use data visualization to display key performance indicators that highlight functional performance and generates actionable insights. iTop dashboard suite will use data visualization to display key performance indicators that highlight functional performance and generates actionable insights.</h5>
            </Col>
          </Row>
        </div>

      </div>
      <div className="container-fluid bg-white">
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

export default WhyWe
