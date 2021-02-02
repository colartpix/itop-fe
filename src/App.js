import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/bootstrap.css';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const Landing = React.lazy(() => import('./views/landing'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              {/* <Route exact path="/dashboard" name="Dashboard" render={props => <Dashboard {...props}/>} /> */}
              <Route path="/" name="Home" render={props => <Landing {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
