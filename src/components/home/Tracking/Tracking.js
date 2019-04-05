import React, { Fragment } from 'react'
import Header from '../../layouts/Header'
import styles from '../../../stylesheets/Tracking.module.css'
import { Container, Row, Col, InputGroup, InputGroupAddon, Input, Button, Form, FormGroup, Label  } from 'reactstrap'

const tracking = props => {
  return (
    <Container>
      <Header header="Tracking" />
      <Row>
        <InputGroup className="mx-auto" style={{width: "70vh"}}>
          <Input type="select" name="select" id="selectTime" placeholder="Select Time">
            <option>Select Time</option>
            <option>12:00pm</option>
            <option>12:30pm</option>
            <option>1:00pm</option>
            <option>1:30pm</option>
            <option>2:00pm</option>
            <option>2:30pm</option>
          </Input>
          <Input type="select" name="select" id="selectLot" placeholder="Select Lot">
            <option>Select Parking</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
          </Input>
          <InputGroupAddon addonType="append">
            <Button>Submit</Button>
          </InputGroupAddon>
        </InputGroup>
      </Row>
      <Row className="mt-4">
        <Col className="col-md-8">
          <Form>
            <FormGroup>
              <Label for="trackingVehicleCount">Vehicle Count</Label>
              <Input id="trackingVehicleCount" type="number" name="vehicleCount" min="1" max="100" />
            </FormGroup>
          </Form>
        </Col>
        <Col className="col-md-4">
          <h5 className={styles.centered}>Lot A</h5><hr />
          <ul>
            <li>Countdown To Close: 30mins 20s</li>
            <li>Number of Spots Left: 30</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default tracking