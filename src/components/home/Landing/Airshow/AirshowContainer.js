import React, { Component } from 'react'
import Airshow from './Airshow'

class AirshowContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Airshow1'
    }
  }

  render() {
    return <Airshow  title={this.state.title} />
  }
}

export default AirshowContainer