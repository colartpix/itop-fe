import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import '../../scss/style.scss'

import Contact from '../../views/Contact'
import Header from '../../itop-components/Header/header'
import WelcomeToiTop from '../../itop-components/Modals/welcome-to-iTop'
import Verified from '../../itop-components/Modals/verified'
import Signup from '../../itop-components/Modals/signup'

const ContactUsContainer = ({
    props,
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

            <Contact />

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
export default ContactUsContainer
