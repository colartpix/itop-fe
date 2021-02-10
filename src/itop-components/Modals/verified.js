import React from 'react'
import { Form } from 'react-bootstrap'
import checkedimg from '../../assets/checked.png';
import '../../scss/style.scss'


const Verified = ({
    handleCloseVerified,
}) => {
    return (
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
                    <button onClick={handleCloseVerified(true)} className="btn btn-primary text-uppercase">
                        continue
                  </button>
                </Form.Group>
            </div>
        </>

    )
}

export default Verified