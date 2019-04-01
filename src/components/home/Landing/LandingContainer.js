import React, { Component, Fragment } from 'react'
import Landing from './Landing'

class LandingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Welcome to the Logistics System for the Kirtland Airshow'
    }
  }

  render() {
    return (
      <Fragment>
        <Landing title={this.state.title} />
      </Fragment>
    )
  }
}

export default LandingContainer