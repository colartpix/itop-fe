// import React from 'react'

//
// const Dashboard = () => {
//   return (
//
//   )
// }
//
// export default Dashboard

import React, { Component } from 'react';
import logo from '../assets/logo-final.png';
import bannerwhy from '../assets/bannerwhy.png';
import checkedimg from '../assets/checked.png';
// import s from './class.scss';
import { Modal, Form, Row, Col, Carousel, Navbar } from 'react-bootstrap'

import '../scss/style.scss'

import Group_1 from '../assets/Group_1.png';
import Group_2 from '../assets/Group_2.png';
import Group_3 from '../assets/Group_3.png';
import Group_4 from '../assets/Group_4.png';
import Group_5 from '../assets/Group_5.png';
import Group_6 from '../assets/Group_6.png';
import Group_98 from '../assets/Group_98.png';
import Group_22 from '../assets/Group_22.png';
import jambotronwhy from '../assets/jambotronwhy.png';
import chartwhy from '../assets/chartwhy.png';
import Banner from '../assets/Banner.png';
import whybox from '../assets/whybox.png';


export default class WhyWe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      signup: false,
      verified: false
    }
  }
  handleShow() {
    this.setState({ modal: true, verified: false })
  }
  handleClose(data) {
    if (data == true) {
      this.setState({ modal: false, signup: false, verified: true })
    } else {
      this.setState({ modal: false, signup: false, verified: false })
    }

  }
  handleShowSignup() {
    this.setState({ signup: true })
  }

  handleCloseAlmostThere(value) {
    if (value == true) {
      this.setState({ signup: true, verified: false })
    } else {
      this.setState({ signup: false, verified: false })
    }
  }
  // handleClose(){
  //   this.setState({modal:false})
  // }
  render() {
    const { modal, signup, verified } = this.state;
    return (
      <>
        <div className="container">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <ul className="navbar-nav mr-auto">

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle text-dark text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Offering
</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">Financial Accounting</a>
        <a className="dropdown-item" href="#">Material Management</a>
        <a className="dropdown-item" href="#">Sales Management</a>
        <a className="dropdown-item" href="#">Converge Integration</a>
        <a className="dropdown-item" href="#">CRM</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle text-dark text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Why iTop
</a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <a className="dropdown-item" href="#">Financial Accounting</a>
        <a className="dropdown-item" href="#">Material Management</a>
        <a className="dropdown-item" href="#">Sales Management</a>
        <a className="dropdown-item" href="#">Converge Integration</a>
        <a className="dropdown-item" href="#">CRM</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark text-uppercase" href="#" tabindex="-1">Case Studies</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark text-uppercase" href="#" tabindex="-1">Pricing</a>
    </li>
  </ul>
    <Form inline>
    <a href="javascript:void(0)" className="my-2 my-sm-0 text-dark text-uppercase mr-5 nav-item" onClick={(e) => this.handleShow(e)}>Login</a>
    <button className="btn btn-primary my-2 my-sm-0 text-uppercase" onClick={(e) => this.handleShowSignup(e)}>Get Started</button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
        <div className="container ">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-3">
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
          <div className="row align-items-center justify-content-between">
          <div className="col-lg-6"><img src={chartwhy} className="boximg" /></div>

            <div className="col-lg-6">
              <h2 className="text-dark text-bold">Customize purchase and stock records to suit our business needs</h2>
              <h5 className="line-height-banner">iTop dashboard suite will use data visualization to display key performance indicators that highlight functional performance and generates actionable insights. iTop dashboard suite will use data visualization to display key performance indicators that highlight functional performance and generates actionable insights.</h5>
            </div>
          </div>
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
                {/*<div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                   <a href="#"><i className="fab fa-facebook-f"></i></a>
                   <a href="#"><i className="fab fa-twitter"></i></a>
                   <a href="#"><i className="fab fa-linkedin-in"></i></a>
                   <a href="#"><i className="fab fa-instagram"></i></a>
                </div> */}

            </div>
        </div>
    </footer>

        <Modal show={modal} onHide={() => this.handleClose(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <>
              <div className="padding-30">
                <h5 className="text-center text-dark text-bold">Welcome to iTop</h5>
                <h6 className="text-center">Get started in just 3 steps</h6>
              </div>
              <div className="padding-30">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter your work email</Form.Label>
                    <Form.Control type="email" placeholder="name@company.com" />

                  </Form.Group>

                  <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" />
                    <Form.Text className="text-muted">
                      If you want to receive the link in SMS
                  </Form.Text>
                  </Form.Group>
                  <Form.Group className="text-center">
                    <button onClick={() => this.handleClose(true)} className="btn btn-primary text-uppercase">
                      continue
                  </button>
                  </Form.Group>
                  <Form.Group className="text-center mb-5">
                    <p>Already have an account with iTop? <a className="text-uppercase" href="">Login</a></p>
                  </Form.Group>
                </Form>
              </div> </>

          </Modal.Body>
        </Modal>
        <Modal show={verified} onHide={() => this.handleClose(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <>

              <div className="padding-30">
                <div>
                  <div className="text-center mb-5">
                    <img src={checkedimg} />
                  </div>
                  <h4 className="text-center text-bold mb-4 text-dark">Almost there!</h4>
                  <p className="text-center">You must have received an email with the verification link.
Please complete the verfication from the link.</p>
                </div>
                <Form.Group className="text-center">
                    <button onClick={() => this.handleCloseAlmostThere(true)} className="btn btn-primary text-uppercase">
                      continue
                  </button>
                </Form.Group>
              </div> </>

          </Modal.Body>
        </Modal>
        <Modal show={signup} size={'lg'} onHide={() => this.handleClose(false)}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="padding-30">
              <h5 className="text-center text-dark text-bold">Your account is verified!</h5>
              <h6 className="text-center">Just one last step</h6>
            </div>
            <div className="padding-30">
              <Row className="justify-content-md-center mb-5">
                <Col xs lg="6">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>How many contacts do you have?</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs lg="6">
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                  <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Business Name" />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>What best describes your business?</Form.Label>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <Form>
                <Form.Group className="text-center mb-5">
                  <button onClick={() => this.handleClose(false)} className="btn btn-primary text-uppercase" type="submit">
                    Signup
                    </button>
                </Form.Group>
                <Form.Group className="text-center mb-5">
                  <p>By clicking ‘Sign up’ you agree to Autopilot’s <br /><a className="text-uppercase" href="">Terms of Service</a> & <a className="text-uppercase" href="">Privacy Policy</a></p>
                </Form.Group>
              </Form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}
