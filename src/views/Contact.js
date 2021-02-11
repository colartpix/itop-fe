import React from 'react';
import bannerwhy from '../assets/bannerwhy.png';
import { Form } from 'react-bootstrap'
import '../scss/style.scss'

import call from '../assets/call.png';

const Contact = ({
  props
}) => {

  return (
    <>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <h1 className="text-dark text-bold">Contact us </h1>
            <h5 className="line-height-banner">Empower your company’s supply chanin management with iTop and allow it to functoin efficiently and cost effectively.</h5>
          </div>
          <div className="col-lg-7"><img src={bannerwhy} style={{ width: '100%' }} /></div>

        </div>

      </div>
      <div className="container-fluid bg-white">
        <div className="smallContainer sectionpadding80">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>First Name</Form.Label>
                <Form.Control className="bg-light" type="email" placeholder="name@example.com" />
              </Form.Group>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className="bg-light" type="email" placeholder="" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Work Email</Form.Label>
                <Form.Control className="bg-light" type="email" placeholder="name@company.com" />
              </Form.Group>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Job Title</Form.Label>
                <Form.Control className="bg-light" type="email" placeholder="" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control className="bg-light" type="email" placeholder="" />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Company Name</Form.Label>
                <Form.Control className="bg-light" type="email" placeholder="" />
              </Form.Group>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12">
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Company Size</Form.Label>
                <Form.Control placeholder="select" className="bg-light" as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>How can our team help you?</Form.Label>
                <Form.Control className="bg-light" placeholder="Tell us more about your team and what kind of work do you do" as="textarea" rows={3} />
              </Form.Group>
            </div>

          </div>
          <div className="text-center py-5">
            <button className="btn btn-primary text-uppercase font-bold">Contact Us</button>
          </div>

        </div>

      </div>
      <div className="sectionpadding80">
        <div className="container">
          <div className="text-center text-uppercase font-bold mb-5">directly talk to our sales team</div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 text-center">
              <div className="text-center mb-4">
                <img src={call} />
              </div>
              <div className="text-center">
                <p className="h5 text-dark">+918485394749</p>
                <p className="text-muted small">For Deployment</p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="text-center mb-4">
                <img src={call} />
              </div>
              <div className="text-center">
                <p className="h5 text-dark">+918485394749</p>
                <p className="text-muted small">For CRM</p>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <div className="text-center mb-4">
                <img src={call} />
              </div>
              <div className="text-center">
                <p className="h5 text-dark">+918485394749</p>
                <p className="text-muted small">For CRM</p>
              </div>
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

    </>
  );
}
export default Contact
