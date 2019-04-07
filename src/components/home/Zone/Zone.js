import React, { Fragment } from 'react'
import styles from '../../../stylesheets/Zone.module.css'
import Header from '../../layouts/Header'
import ZoneTable from './ZoneTable'
import ZoneTableEdit from './ZoneTableEdit'
import { Container, Row, Col, Table, Button, ButtonGroup } from 'reactstrap'

const zone = props => {
  let editTitle = props.editMode ? "Edit Mode" : "View Mode"
  return (
    <Container>
      <Header header="Zones" />
      <section className={styles.ZoneSection}>
        <Row>
          <Col>
            <ButtonGroup>
              { props.zones.map(zone => (
                <Button>{zone.name}</Button>
              ))}
              <Button onClick={props.toggleEdit}>{editTitle}</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          {props.zones.map(zone => (
            <Col md-12>
              <ZoneTable lots={zone.lots} titles={props.lot_titles} />
              <ZoneTableEdit lots={zone.lots} titles={props.lot_titles} {...props} />
            </Col>
          ))}          
        </Row>
      </section>
    </Container>
  )
}

export default zone