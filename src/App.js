import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './scss/bootstrap.css';
import './scss/style.scss';

import LandingContainer from './containers/Landing/landing'
import WhyWeContainer from './containers/Why-we/why-we'
import AccountingContainer from './containers/Accounting/accounting'
import CaseStudyContainer from './containers/Case-study/case-study'
import PricingContainer from './containers/Pricing/pricing'
import ContactUsContainer from './containers/Contact-us/contact-us'

class App extends Component {

  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route path="/landing" name="landing" render={props => <LandingContainer {...props} />} />
          <Route path="/whywe" name="whywe" render={props => <WhyWeContainer {...props} />} />
          <Route path="/accounting" name="accounting" render={props => <AccountingContainer {...props} />} />
          <Route path="/casestudy" name="casestudy" render={props => <CaseStudyContainer {...props} />} />
          <Route path="/pricing" name="pricing" render={props => <PricingContainer {...props} />} />
          <Route path="/contactus" name="ContactUs" render={props => <ContactUsContainer {...props} />} />
          <Redirect from="/" to="/landing" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
