import React, { Component, Fragment } from 'react'
import Zone from './Zone'

class ZoneContainer extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      zones: [
        { id: 1, name: 'Red', vehicleCapacity: 100, numberOfLots: 10 },
        { id: 2, name: 'Blue', vehicleCapacity: 20, numberOfLots: 3 }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <Zone zones={this.state.zones} />
      </Fragment>
    )
  }
}

export default ZoneContainer