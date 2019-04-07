import React, { Component, Fragment } from 'react'
import Zone from './Zone'

class ZoneContainer extends Component {
  constructor(props) {
    super(props)

    this.toggleEditHandler = this.toggleEditHandler.bind(this)

    this.state = {
      editMode: true,
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
      ]      
    }
  }

  toggleEditHandler = () => {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    })
  }

  render() {
    return (
      <Fragment>
        <Zone zones={this.state.zones} 
          lot_titles={this.state.lot_titles} 
          toggleEdit={this.state.toggleEditHandler}
          editMode={this.editMode} />
      </Fragment>
    )
  }
}

export default ZoneContainer