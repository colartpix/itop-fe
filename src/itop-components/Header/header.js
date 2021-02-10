import React from 'react'
import logo from '../../assets/logo-final.png';
import { Navbar, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Header = ({
  handleShow
}) => {
const history = useHistory();
 const redirectToWhyItop = () => {
    history.push('/whywe')
 }
 const redirectToContactUs = () => {
    history.push('/contactus')
 }

 const redirectToCaseStudies = () => {
    history.push('/casestudy')
 }

 const redirectToPricing = () => {
    history.push('/pricing')
}
 const redirectToAccounting = () => {
  history.push('/accounting')
}

  return (
    <div className="container">
    <Navbar bg="light" expand="lg">
      <Navbar.Brand onClick={() => history.push('/landing')}><img src={logo} alt={'itop'} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark text-uppercase" 
            id="navbarDropdown" 
            role="button" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false"
            onClick={redirectToAccounting}
            >
              Offering
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item">Material Management</a>
              <a className="dropdown-item">Financial Accounting</a>
              <a className="dropdown-item">Sales Management</a>
              <a className="dropdown-item">Converge Integration</a>
              <a className="dropdown-item">CRM</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-dark text-uppercase"
              data-toggle="dropdown"
              id="navbarDropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={redirectToWhyItop}
            >
              Why iTop
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item">Why we are different</a>
              <a className="dropdown-item">Our Technology</a>
              <a className="dropdown-item">Security and Trust</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark text-uppercase"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            onClick={redirectToCaseStudies}
            >
              Case Studies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark text-uppercase"
             role="button"
             aria-haspopup="true"
             aria-expanded="false"
             onClick={redirectToPricing}
            >
               Pricing
            </a>
          </li>
        </ul>
        <Form inline>
          <a className="my-2 my-sm-0 text-dark text-uppercase mr-5 nav-item" role="button" onClick={handleShow}>Login</a>
          <button className="btn btn-primary my-2 my-sm-0 text-uppercase" onClick={redirectToContactUs}>Get Started</button>
        </Form>
      </Navbar.Collapse>
    </Navbar>

  </div>
  )
}

export default Header