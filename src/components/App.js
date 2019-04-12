import React, { Component } from 'react'
import styles from '../stylesheets/App.module.css'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Navigation from './layouts/Navigation'
import Footer from './layouts/Footer'
import LandingContainer from './home/Landing/LandingContainer'
import SummaryContainer from './home/Summary/SummaryContainer'
import ZoneContainer from './home/Zone/ZoneContainer'
import TrackingContainer from './home/Tracking/TrackingContainer'

const GET_INFO = gql`
  query {
    info
  }
`
class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.App}>
          <Navigation />  
          <div className={styles.MainBody}>
            <Switch>
              <Route exact path="/" component={LandingContainer} />
              <Route exact path="/summary" component={SummaryContainer} />
              <Route exact path="/zones" component={ZoneContainer} />
              <Route exact path="/tracking" component={TrackingContainer} />
            </Switch>
          </div>
          <Footer copyright="&copy;2019 Edwin Agbenyega" />
        </div>
      </Router>
    );
  }
}

export default App;
