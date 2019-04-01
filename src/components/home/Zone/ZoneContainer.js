import React, { Component, Fragment } from 'react'
import Zone from './Zone'

class ZoneContainer extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      zones: [
        { id: 1, name: 'Red', vehicleCapacity: '100' },
        { id: 2, name: 'Blue', vehicleCapacity: '20' },
        { id: 3, name: 'Indigo', vehicleCapacity: '340' },
        { id: 4, name: 'Magenta', vehicleCapacity: '336' }
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