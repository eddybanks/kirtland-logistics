import React, { Component, Fragment } from 'react'
import Zone from './Zone'

class ZoneContainer extends Component {
  constructor(props) {
    super(props)

    this.toggleEditHandler = this.toggleEditHandler.bind(this)
    this.toggleZoneTab = this.toggleZoneTab.bind(this)
    this.changeTextHandler = this.changeTextHandler.bind(this)
    this.deleteParkingHandler = this.deleteParkingHandler.bind(this)

    this.state = {
      // For toggling between selected Zones
      activeZoneTab: 'Red',
      // For toggling between Edit and View Modes
      editMode: false,
      lot_titles: [
        { id: 1, title: 'Vehicle Capacity', type: 'number' },
        { id: 2, title: 'Passenger Capacity', value: 2324, type: 'number'},
        { id: 3, title: 'Estimated Travel Distance', type: 'number' },
        { id: 4, title: 'Estimated Travel Time', type: 'number' }
      ],
      zones: [
        { id: 1, name: 'Red',
          lots: [
            { id: 1, name: 'Lot 1', 
              details: [
                { id: 1, title: 'Vehicle Capacity', value: 20, type: 'number' },
                { id: 2, title: 'Passenger Capacity', value: 2324, type: 'number'},
                { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
                { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
              ]
            },
            { id: 2, name: 'Lot 2', 
              details: [
                { id: 1, title: 'Vehicle Capacity', value: 20, type: 'number' },
                { id: 2, title: 'Passenger Capacity', value: 2324, type: 'number'},
                { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
                { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
              ]
            },
            { id: 3, name: 'Lot 3', 
              details: [
                { id: 1, title: 'Vehicle Capacity', value: 20, type: 'number' },
                { id: 2, title: 'Passenger Capacity', value: 2324, type: 'number'},
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
              { id: 2, title: 'Passenger Capacity', value: 2324, type: 'number'},
              { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
              { id: 4, title: 'Estimated Travel Time', value: 20, type: 'number'}
            ]
          },
          { id: 2, name: 'B', 
            details: [
              { id: 1, title: 'Vehicle Capacity', value: 43, type: 'number' },
              { id: 2, title: 'Passenger Capacity', value: 2324, type: 'number'},
              { id: 3, title: 'Estimated Travel Distance', value: 23, type: 'number'},
              { id: 4, title: 'Estimated Travel Time', value: 12, type: 'number'}
            ]
          },
          { id: 3, name: 'C', 
            details: [
              { id: 1, title: 'Vehicle Capacity', value: 43, type: 'number' },
              { id: 2, title: 'Passenger Capacity', value: 43, type: 'number'},
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

  addRowHandler = (id) => {
    const newid = Math.floor(Math.random() * 100000000) + 10
    let newLot = {
      id: newid,
      name: '',
      details: [
        { id: 1, title: 'Vehicle Capacity', value: null, type: 'number' },
        { id: 2, title: 'Passenger Capacity', value: null, type: 'number'},
        { id: 3, title: 'Estimated Travel Distance', value: null, type: 'number'},
        { id: 4, title: 'Estimated Travel Time', value: null, type: 'number'}
      ]
    }

    const index = this.state.zones.findIndex(z => { return z.id === id })
    let zones = [...this.state.zones]
    let lots = zones[index].lots
    lots.push(newLot)
    zones[index].lots = lots
    this.setState({
      zones: zones
    })
  }

  deleteParkingHandler = (zid, lid) => {
    const zones = [...this.state.zones]
    const zoneIndex = zones.findIndex( z => { return z.id === zid})
    let lots = zones[zoneIndex].lots
    const lotIndex = lots.findIndex(l => { return l.id === lid })
    lots.splice(lotIndex, 1)
    zones[zoneIndex].lots = lots
    this.setState({
      zones: zones
    })
  }

  changeTextHandler = (e, lid, zid, did) => {
    const zoneIndex = this.state.zones.findIndex( z => {
      return z.id === zid
    })

    const zone = {
      ...this.state.zones[zoneIndex]
    }

    const lotIndex = zone.lots.findIndex( l => {
      return l.id === lid
    })

    const lot = {
      ...zone.lots[lotIndex]
    }

    if (did) {
      const detailsIndex = lot.details.findIndex(d => { return d.id === did})
      lot.details[detailsIndex].value = e.target.value
    } else {
      lot.name = e.target.value
    } 

    const zones = [...this.state.zones]
    zones[zoneIndex].lots[lotIndex] = lot
    this.setState({
      zones: zones
    })
    console.log(this.state.zones)
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
          handleZoneChange={this.handleZoneChange}
          toggleZoneTab={this.toggleZoneTab}
          addRow={this.addRowHandler}
          onChange={this.changeTextHandler}
          deleteParking={this.deleteParkingHandler} />
      </Fragment>
    )
  }
}

export default ZoneContainer