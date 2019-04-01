import React, { Component, Fragment } from 'react'
import Summary from './Summary'

class SummaryContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <Summary />
      </Fragment>
    )
  }
}

export default SummaryContainer