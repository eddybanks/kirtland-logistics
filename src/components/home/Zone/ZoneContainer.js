import React, { Component, Fragment } from 'react'
import Zone from './Zone'

class ZoneContainer extends Component {
  constructor(props) {
    super(props)

    this.toggleEditHandler = this.toggleEditHandler.bind(this)
    this.toggleZoneTab = this.toggleZoneTab.bind(this)

    this.state = {
      // For toggling between selected Zones
      activeZoneTab: 'tab 0',
      // For toggling between Edit and View Modes
      editMode: false,
      lot_titles: [
        { id: 1, title: 'Vehicle Capacity', type: 'number' },
        { id: 2, title: 'Current Vehicle Count', type: 'number' },
        { id: 3, title: 'Estimated Travel Distance', type: 'number' },
        { id: 4, title: 'Estimated Travel Time', type: 'number' }
      ],
      zones: [
        { id: 1, name: 'Red',
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
        },{ id: 2, name: 'Blue',
        lots: [
          { id: 1, name: 'A', 
            details: [
              { id: 1, title: 'Vehicle Capacity', value: 21, type: 'number' },
              { id: 2, title: 'Current Vehicle Count', value: 32, type: 'number'},
              { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
              { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
            ]
          },
          { id: 2, name: 'B', 
            details: [
              { id: 1, title: 'Vehicle Capacity', value: 43, type: 'number' },
              { id: 2, title: 'Current Vehicle Count', value: 24, type: 'number'},
              { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
              { id: 4, title: 'Estimated Travel Time', value: 12, type: 'number'}
            ]
          },
          { id: 3, name: 'C', 
            details: [
              { id: 1, title: 'Vehicle Capacity', value: 43, type: 'number' },
              { id: 2, title: 'Current Vehicle Count', value: 43, type: 'number'},
              { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
              { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
            ]
          }
        ]
      }
      ]      
    }
  }

  toggleZoneTab = (tab) => {
    if (this.state.activeZoneTab !== tab) {
      this.setState({
        activeZoneTab: tab
      })
    }
  }

  toggleEditHandler = () => {
    let editMode = this.state.editMode
    this.setState({
      editMode: !editMode
    })
  }

  inputLotHandler = (e) => {
    let value = e.target.value
    console.log(value)
  }

  render() {
    return (
      <Fragment>
        <Zone zones={this.state.zones} 
          activeZoneTab={this.state.activeZoneTab}
          lot_titles={this.state.lot_titles} 
          editMode={this.state.editMode}
          toggleEdit={this.toggleEditHandler}
          inputLot={this.inputLotHandler}
          toggleZoneTab={this.toggleZoneTab} />
      </Fragment>
    )
  }
}

export default ZoneContainer