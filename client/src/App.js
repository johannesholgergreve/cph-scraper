// React & npm modules
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// Pages
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';

// Styles
import './styles/index.scss';

class App extends Component {
  
  render() {
    return <React.Fragment>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect exact from="/" to="/home" />
            <Redirect to="/not-found" />
          </Switch>
      </React.Fragment>;
  }
}

export default App;
