import React, { Component } from 'react'
import styles from '../stylesheets/App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navigation from './layouts/Navigation'
import LandingContainer from './home/Landing/LandingContainer'
import SummaryContainer from './home/Summary/SummaryContainer'
import ZoneContainer from './home/Zone/ZoneContainer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Navigation />
        </div>
        <Switch>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/summary" component={SummaryContainer} />
          <Route exact path="/zones" component={ZoneContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
