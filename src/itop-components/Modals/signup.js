import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import '../../scss/style.scss'

const Signup = ({
    handleCloseSignUp,
}) => {
    return (
        <>
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
                        <button onClick={handleCloseSignUp(false)} className="btn btn-primary text-uppercase" type="submit">
                            Signup
                    </button>
                    </Form.Group>
                    <Form.Group className="text-center mb-5">
                        <p>By clicking ‘Sign up’ you agree to Autopilot’s <br /><a className="text-uppercase" href="">Terms of Service</a> & <a className="text-uppercase" href="">Privacy Policy</a></p>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Signup