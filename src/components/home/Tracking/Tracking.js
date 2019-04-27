import React from 'react'
import Header from '../../layouts/Header'
import TrackingUpdates from './TrackingUpdates'
import styles from '../../../stylesheets/Tracking.module.css'
import { Container, 
  Row, Col, InputGroup, InputGroupAddon, Input, Button, Form, FormGroup, Label,
  Progress  } from 'reactstrap'

const tracking = props => {
  return (
    <Container>
      <Header header="Tracking" />
      <div className="text-center">35%</div>
      <Progress value={35} striped color="warning" className="mb-4" />
      <Row>
        <Col className="col-md-8 mt-4">
        <InputGroup className="mx-auto mb-4" style={{width: "70vh"}}>
          <Input type="time" name="select" id="selectTime" min="9:00" max="18:00" step="600" required />
          <Input type="select" name="select" id="selectLot" placeholder="Select Lot">
            <option>Select Lot</option>
            <option>Lot 1</option>
            <option>Lot 2</option>
            <option>Lot 3</option>
            <option>Lot 4</option>
            <option>Lot 5</option>
            <option>Lot 6</option>
          </Input>
          <InputGroupAddon addonType="append">
            <Button>Submit</Button>
          </InputGroupAddon>
        </InputGroup>
          <Form>
            {/* <FormGroup>
              <Label for="trackingVehicleCount">Vehicle Count</Label>
              <Input id="trackingVehicleCount" type="number" name="vehicleCount" min="1" max="100" />
            </FormGroup> */}
            <FormGroup>
              <Label for="trackingVehicleCount">People Count</Label>
              <Input id="trackingVehicleCount" type="number" name="vehicleCount" min="1" max="100" />
            </FormGroup>
            <Button className="btn btn-block">Enter</Button>
          </Form>
        </Col>
        <Col className="col-md-4">
          {props.updates.map((update) => (
            <div key={update.id}>
              <h5 className={styles.centered} key={update.id}>{update.lot}</h5>
              <TrackingUpdates updates={update.info} />
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default tracking