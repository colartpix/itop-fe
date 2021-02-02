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
import bannerimg from '../assets/bannerimg.png';
import checkedimg from '../assets/checked.png';
// import s from './class.scss';
import { Modal, Form, Row, Col } from 'react-bootstrap'
export default class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      modal:false,
      signup:false,
      isScreen:false
    }
  }
  handleShow(){
    this.setState({modal:true, isScreen:true})
  }
  handleClose(e, data){
    e.preventDefault()
    if (data == true) {
      this.setState({modal:false, signup: false,isScreen:false})
    }else{
      this.setState({modal:false, signup: false,isScreen:true})
    }

  }
  handleShowSignup(){
    this.setState({signup:true})
  }
  // handleClose(){
  //   this.setState({modal:false})
  // }
  render() {
    const{modal, signup, isScreen} = this.state;
    return (
      <>
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img src={logo} /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      <form className="form-inline my-2 my-lg-0">
      <a href="javascript:void(0)" className="my-2 my-sm-0 text-dark text-uppercase mr-5 nav-item" onClick={(e) => this.handleShow(e)}>Login</a>
        <button className="btn btn-primary my-2 my-sm-0 text-uppercase" onClick={(e) => this.handleShowSignup(e)}>Get Started</button>
      </form>
      </div>
      </nav>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
    <h1 className="text-dark text-bold">Business Made easy</h1>
    <h5 className="line-height-banner">A full array of IT solutions and complete customized application development solution</h5>
          </div>
      <div className="col-lg-7"><img src={bannerimg} style={{width: '100%'}} /></div>

          </div>
        </div>
        <Modal show={modal} onHide={()=> this.handleClose(false)}>
          <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              {isScreen && <>
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
                  <button onClick={(e)=> this.handleClose(e, true)} className="btn btn-primary text-uppercase">
                    continue
                  </button>
                </Form.Group>
                <Form.Group className="text-center mb-5">
                  <p>Already have an account with iTop? <a className="text-uppercase" href="">Login</a></p>
                </Form.Group>
              </Form>
              </div> </>}
              {!isScreen &&
<div>
<div>
<img src={checkedimg} />
</div>
</div>
              }
            </Modal.Body>
          </Modal>
          <Modal show={signup} size={'lg'} onHide={()=> this.handleClose(false)}>
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
                    <button onClick={()=> this.handleClose(false)} className="btn btn-primary text-uppercase" type="submit">
                      Signup
                    </button>
                  </Form.Group>
                  <Form.Group className="text-center mb-5">
                    <p>Already have an account with iTop? <a className="text-uppercase" href="">Login</a></p>
                  </Form.Group>
                </Form>
                </div>
              </Modal.Body>
            </Modal>
        </>
    );
  }
}
