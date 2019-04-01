import React, { Component } from 'react'
import styles from '../assets/App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingContainer from './home/Landing/LandingContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          
        </div>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
