import React, { Component } from 'react'
import Tracking from './Tracking'

class TrackingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updates: [
        { id: 1, lot: 'Lot A', 
          info: [
            { id: 1, title: 'Countdown To Close', value: 43, type: 'number', min: 0, max: 50 }, 
            { id: 2, title: 'Max Capacity', value: 32, type: 'number', min: 0, max: 50 },
            { id: 3, title: 'Spots Taken', value: 10, type: 'number', min: 0, max: 50 },
            { id: 4, title: 'Spots Left', value: null }
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