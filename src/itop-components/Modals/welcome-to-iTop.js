import React from 'react'
import { Form } from 'react-bootstrap'
import '../../scss/style.scss'


const WelcomeToiTop = ({
    handleClose,
}) => {
    return (
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
                        <button onClick={handleClose(true)} className="btn btn-primary text-uppercase">
                            continue
                  </button>
                    </Form.Group>
                    <Form.Group className="text-center mb-5">
                        <p>Already have an account with iTop? <a className="text-uppercase" href="">Login</a></p>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default WelcomeToiTop