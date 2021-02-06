import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/bootstrap.css';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const Landing = React.lazy(() => import('./views/landing'));
const WhyWe = React.lazy(() => import('./views/WhyWe'));
const Accounting = React.lazy(() => import('./views/Accounting'));
const CaseStudy = React.lazy(() => import('./views/CaseStudy'));
const Pricing = React.lazy(() => import('./views/Pricing'));
const Contact = React.lazy(() => import('./views/Contact'));





class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/* <Route exact path="/dashboard" name="Dashboard" render={props => <Dashboard {...props}/>} /> */}
              {/*<Route path="/" name="Home" render={props => <Landing {...props}/>} /> */}
              {/*<Route path="/" name="whywe" render={props => <WhyWe {...props}/>} /> */}
              {/*<Route path="/" name="accounting" render={props => <Accounting {...props}/>} /> */}
              {/*<Route path="/" name="casestudy" render={props => <CaseStudy {...props}/>} /> */}
              {/*<Route path="/" name="Pricing" render={props => <Pricing {...props}/>} /> */}
              <Route path="/" name="Contact" render={props => <Contact {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
