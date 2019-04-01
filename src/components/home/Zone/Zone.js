import React, { Fragment } from 'react'
import ZoneCard from './ZoneCard'
import { Container, Row, Col } from 'reactstrap'
import styles from '../../../stylesheets/Zone.module.css'
import Header from '../../layouts/Header'

const zone = props => {
  return (
    <Fragment>
      <Header header="Zones" />
      <Container>
        <Row className={styles.ZoneBox}>
          {props.zones.map(zone => (
            <Col className="col-md-4">
              <ZoneCard 
                name={zone.name} 
                vehicleCapacity={zone.vehicleCapacity} 
              /> 
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  )
}

export default zone