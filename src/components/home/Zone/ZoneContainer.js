import React, { Component, Fragment } from 'react'
import Zone from './Zone'

class ZoneContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titles: [
        { id: 1, title: 'Vehicle Capacity', type: 'number' },
        { id: 2, title: 'Current Vehicle Count', type: 'number' },
        { id: 3, title: 'Estimated Travel Distance', type: 'number' },
        { id: 4, title: 'Estimated Travel Time', type: 'number' }
      ],
      lots: [
        { id: 1, name: 'A', 
          details: [
            { id: 1, title: 'Vehicle Capacity', value: 20, type: 'number' },
            { id: 2, title: 'Current Vehicle Count', value: 12, type: 'number'},
            { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
            { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
          ]
        },
        { id: 2, name: 'B', 
          details: [
            { id: 1, title: 'Vehicle Capacity', value: 20, type: 'number' },
            { id: 2, title: 'Current Vehicle Count', value: 12, type: 'number'},
            { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
            { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
          ]
        },
        { id: 3, name: 'C', 
          details: [
            { id: 1, title: 'Vehicle Capacity', value: 20, type: 'number' },
            { id: 2, title: 'Current Vehicle Count', value: 12, type: 'number'},
            { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
            { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
          ]
        }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        <Zone lots={this.state.lots} titles={this.state.titles} />
      </Fragment>
    )
  }
}

export default ZoneContainer