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
          <Input type="time" name="select" id="selectTime" min="9:00" max="18:00" step="600" required />
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
            <FormGroup>
              <Label for="trackingVehicleCount">People Count</Label>
              <Input id="trackingVehicleCount" type="number" name="vehicleCount" min="1" max="100" />
            </FormGroup>
            <Button className="btn btn-block">Enter</Button>
          </Form>
        </Col>
        <Col className="col-md-4">
          {props.updates.map((update) => (
            <div>
              <h5 className={styles.centered} key={update.id}>{update.lot}</h5>
              <ul>
                {update.info.map(item => <li key={item.id}>{item.title}: {item.value}</li>)}
              </ul>
            </div>
          ))}
          <h5 className={styles.centered}>{props.updates.lot}</h5><hr />
          <ul>
            <li>Countdown To Close: 30mins 20s</li>
            <li>Maximum Capacity: 40</li>
            <li>Number of Spots Taken: 10</li>
            <li>Number of Spots Left: 30</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default tracking