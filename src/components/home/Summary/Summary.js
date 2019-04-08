import React, { Fragment } from 'react'
import SummaryCard from './SummaryCard'
import { Container, Row, Col } from 'reactstrap'
import styles from '../../../stylesheets/Summary.module.css'
import Header from '../../layouts/Header'

const summary = props => {
  return (
    <Fragment>
      <Header header="Summary" />
      <Container>
        <Row className={styles.SummaryBox}>
          {props.zones.map(zone => (
            <Col className="col-md-6" key={zone.id}>
              <SummaryCard 
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

export default summary