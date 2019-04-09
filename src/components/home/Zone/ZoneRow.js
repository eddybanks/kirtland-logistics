import React, { Component } from 'react'

class ZoneRow extends Component {
  constructor(props) {
    super(props)

    this.handleZoneChange = this.handleZoneChange.bind(this)

    this.state = {
      value: null
    }
  }
}

handleZoneChange = event => {
  this.setState({ value: event.target })
}

export default ZoneRow