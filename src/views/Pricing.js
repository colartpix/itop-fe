import React, { useState } from 'react';
import bannerwhy from '../assets/bannerwhy.png';
import { Modal } from 'react-bootstrap'

import '../scss/style.scss'

import pricing from '../assets/pricing.png';
import Header from '../itop-components/Header/header'
import WelcomeToiTop from '../itop-components/Modals/welcome-to-iTop'
import Verified from '../itop-components/Modals/verified'
import Signup from '../itop-components/Modals/signup'

const Pricing = ({

}) => {
  const [welcomeToiTop, setWelcomeToiTop] = useState()
  const [verified, setVerified] = useState()
  const [signup, setSignup] = useState()

  const handleShow = () => {
    setWelcomeToiTop(true)
  }
  const actionHandleClose = (data) => {
    if (data) {
      setVerified(true)
      setWelcomeToiTop(false)
    } else {
      setWelcomeToiTop(false)
      setVerified(false)
    }
  }

  const actionHandleCloseVerified = (value) => {
    if (value) {
      setSignup(true)
      setVerified(false)
    } else {
      setSignup(false)
      setVerified(false)
    }
  }

  const actionHandleCloseSignUp = (value) => {
    setSignup(false)
    setVerified(false)
  }

  return (
    <>
      <Header handleShow={() => handleShow()} />

      <div className="container padding-bottom-10">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <h1 className="text-dark text-bold">The right price </h1>
            <h1 className="text-dark text-bold">for you</h1>
            <h5 className="line-height-banner">Empower your company’s supply chanin management with iTop and allow it to functoin efficiently and cost effectively.</h5>
          </div>
          <div className="col-lg-7"><img src={bannerwhy} style={{ width: '100%' }} /></div>

        </div>

      </div>
      <div className="container-fluid bg-white">
        <div className="container sectionpadding80">
          <div className="row pricingboxes">
            <div className="col-lg-4">
              <div className=" card rounded-lg mb-3">
                <div className="simplestart p-4 text-center">
                  <h5 className="font-bold text-dark">Simple Start</h5>
                  <p className="mb-4 h6">For Small Business</p>
                  <p className="mb-2"><span>$</span> <span className="h1 font-bold text-dark">10</span></p>
                  <p className="mb-3 h6">Monthly per user</p>
                </div>
                <div className="p-4">
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Track income & expenses</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Send custom invoices/quotes</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Snap & store receipts</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Track kilometres</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Connect your bank</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Insights & reports</span>
                  </div>
                  <div className="mb-0 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Manage payroll</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <button className="btn btn-primary px-6 text-uppercase">try now</button>
                </div>
                <p className="text-center">7 days free trial to start</p>

              </div>
            </div>
            <div className="col-lg-4">
              <div className=" card rounded-lg mb-3">
                <div className="essensials p-4 text-center">
                  <h5 className="font-bold text-dark">Essentials</h5>
                  <p className="mb-4 h6">For Medium Enterprises</p>
                  <p className="mb-2"><span>$</span> <span className="h1 font-bold text-dark">20</span></p>
                  <p className="mb-3 h6">Monthly per user</p>
                </div>
                <div className="p-4">
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Simple Start</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Essentials</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Manage payroll</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Manage suppliers & bills</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Multi currency</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Setup recurring transactions</span>
                  </div>
                  <div className="mb-0 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Manage users (upto 3)</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <button className="btn btn-primary px-6 text-uppercase">try now</button>
                </div>
                <p className="text-center">30 days free trial to start</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className=" card rounded-lg mb-3">
                <div className="professional p-4 text-center">
                  <h5 className="font-bold text-dark">Professional</h5>
                  <p className="mb-4 h6">For Large Enterprises</p>
                  <p className="mb-2"><span>$</span> <span className="h1 font-bold text-dark">30</span></p>
                  <p className="mb-3 h6">Monthly per user</p>
                </div>
                <div className="p-4">
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Simple start + Essentials</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Multi currency</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Setup recurring transactions</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Manage users (upto 5)</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Track Inventory</span>
                  </div>
                  <div className="mb-4 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>Manage budgets</span>
                  </div>
                  <div className="mb-0 text-left">
                    <img className="mr-3" src={pricing} />
                    <span>CRM integration</span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <button className="btn btn-primary px-6 text-uppercase">try now</button>
                </div>
                <p className="text-center">30 days free trial to start</p>
              </div>
            </div>
          </div>
          <div className="smallContainer pt-5">
            <p className="font-bold text-dark text-uppercase text-center">Frequently asked questions</p>

            <div className="mb-3 pt-5">
              <p className="font-bold text-dark text-left mb-2">Do you have discounts for half yearly & yearly plans?</p>
              <p className="m-0 text-left">We have discounts for half yearly & yearly plans. Please contact us for further details and volume pricing.</p>
            </div>

            <div className="mb-3 pt-5">
              <p className="font-bold text-dark text-left mb-2">Who has access to our payroll data?</p>
              <p className="m-0 text-left">If you lock us out, not even our employees have access to any of your payroll or personnel information. Unless explicitly granted access on a need-to-know basis by customer using a secure switch, our support personnel cannot view any of your data.</p>
            </div>

            <div className="mb-3 pt-5">
              <p className="font-bold text-dark text-left mb-2">How secure is my data?</p>
              <p className="m-0 text-left">We take security and privacy of our customer data seriously and have highest grade security measures in place compared to rest of the industry. All sensitive information including payroll financials are encrypted with private keys that are unique to your organization!</p>
            </div>
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


      {welcomeToiTop &&
        <Modal show={welcomeToiTop} onHide={() => actionHandleClose(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <WelcomeToiTop handleClose={() => actionHandleClose} />
          </Modal.Body>
        </Modal>
      }

      {verified &&
        <Modal show={verified} onHide={() => actionHandleCloseVerified(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Verified handleCloseVerified={() => actionHandleCloseVerified} />
          </Modal.Body>
        </Modal>
      }

      {signup &&
        <Modal show={signup} size={'lg'} onHide={() => actionHandleCloseSignUp(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Signup handleCloseSignUp={() => actionHandleCloseSignUp} />
          </Modal.Body>
        </Modal>
      }

    </>
  );
}

export default Pricing
