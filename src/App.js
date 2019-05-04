import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from "@fortawesome/free-brands-svg-icons"

import Layout from './components/UI/Layout/Layout';
import Home from './components/Homepage/Home/Home';
import './App.css';

library.add(fab, fas)

class App extends Component {

  render() {

    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
