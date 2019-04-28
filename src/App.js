import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
//import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import './App.css';

class App extends Component {

  render() {

    const routes = (
      <Switch>
        {/* <Route path="/checkout" component={asyncCheckout} />
        <Route path="/orders" component={asyncOrders} />
        <Route path="/logout" component={Logout} />
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
