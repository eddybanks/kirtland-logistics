import React from 'react'
import styles from '../../../stylesheets/Zone.module.css'
import Header from '../../layouts/Header'
import ZoneTable from './ZoneTable'
import ZoneTableEdit from './ZoneTableEdit'
import { Container, Row, Col, Button, ButtonGroup, TabPane, TabContent } from 'reactstrap'
import classnames from 'classnames'

const zone = props => {
  let editTitle = props.editMode ? "Edit Mode" : "View Mode"
  let zoneTable = props.zones.map((zone, index) => (
    <TabPane tabId={zone.name} key={"tabkey "+ zone.id}>
      <Row className="mt-4">
        <Col className="col-md-12"> 
          { props.editMode ?
          <ZoneTableEdit 
            key={"zone_edit " + zone.id} 
            zone={zone} 
            titles={props.lot_titles}
            addRow={props.addRow}
            onChange={props.onChange}
            deleteParking={props.deleteParking} /> :
          <ZoneTable 
            key={"zone " + zone.id} 
            lots={zone.lots} 
            titles={props.lot_titles} />
          }
        </Col>
      </Row>
    </TabPane>
  ))
  return (
    <Container>
      <Header header={"Zones"} />
      <section className={styles.ZoneSection}>
        <Row>
          <Col className="md-12 mb-2"><h6 className={props.activeZoneTab}>{props.activeZoneTab} Zone: {editTitle}</h6></Col>
          <hr />
        </Row>
        <Row>
          <Col className="md-12">
            <ButtonGroup>
              { props.zones.map((zone, index) => (
                <Button 
                  key={"zone_name " + zone.id} 
                  className={classnames({ active: props.activeZoneTab === zone.name })}
                  onClick={() => { props.toggleZoneTab(zone.name) }}
                >
                  {zone.name}
                </Button>
              ))}
              <Button outline onClick={props.toggleEdit}>{editTitle}</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <TabContent activeTab={props.activeZoneTab}>
          {zoneTable}
        </TabContent>
      </section>
    </Container>
  )
}

export default zone