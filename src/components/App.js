import React, { Component } from 'react'
import styles from '../assets/App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './layouts/Navigation'
import LandingContainer from './home/Landing/LandingContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Navigation />
        </div>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
