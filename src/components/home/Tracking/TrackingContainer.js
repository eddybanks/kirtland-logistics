import React, { Component } from 'react'
import Tracking from './Tracking'

class TrackingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updates: [
        { id: 1, lot: 'Lot 1', 
          info: [
            { id: 1, title: 'Countdown To Close', value: 43, type: 'number', min: 0, max: 50 }, 
            { id: 2, title: 'Max Passenger Capacity', value: 5000, type: 'number', min: 0, max: 5000 },
            { id: 3, title: 'Passengers Arrived', value: 2332, type: 'number', min: 0, max: 50 },
            { id: 4, title: 'Passengers Left to Limit', value: 5000 - 2332 }
          ] 
        }
      ]
    }
  }

  render() {
    return <Tracking 
      updates={this.state.updates} />
  }
}

export default TrackingContainer