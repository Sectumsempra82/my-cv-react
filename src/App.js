import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons' ;


library.add(faStar, far)

class App extends Component {

  render() {

    const routes = (
      <Switch>
        {/* <Route path="/logout" component={Logout} />
        <Route path="/auth" component={asyncAuth} /> */}
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default withRouter(App);
