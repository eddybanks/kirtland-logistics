import React, { Component } from 'react'
import Tracking from './Tracking'

class TrackingContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      updates: [
        { id: 1, lot: 'Lot A', 
          info: [
            { id: 1, title: 'countdownToClose', value: 43 }, 
            { id: 2, title: 'maxCapacity', value: 32 },
            { id: 3, title: 'spotsTaken', value: 10 }
          ] 
        }
      ]
    }
  }

  render() {
    return <Tracking updates={this.state.updates} />
  }
}

export default TrackingContainer