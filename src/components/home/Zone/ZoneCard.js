import React, { Fragment } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import styles from '../../../stylesheets/Zone.module.css'

const zoneCard = props => {
  return (
    <Fragment>
      <Card className={styles.ZoneCard}>
        <CardHeader>{props.name}</CardHeader>
        <CardBody>
          <ul>
            <li>Name: {props.name}</li>
            <li>Vehicle Capacity: {props.vehicleCapacity}</li>
          </ul>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default zoneCard