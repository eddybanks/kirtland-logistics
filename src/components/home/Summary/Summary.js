import React, { Fragment } from 'react'
import styles from '../../../stylesheets/Summary.module.css'
import Header from '../../layouts/Header'
import { Container, Row, Col, Table, Button, ButtonGroup } from 'reactstrap'

const summary = props => {
  return (
    <Container>
      <Header header="Zones" />
      <section className={styles.SummarySection}>
        <Row>
          <Col>
            <ButtonGroup>
              <Button>Red</Button>
              <Button>Blue</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md-12>
            <Table size="sm" bordered hover>
              <thead>
                <tr>
                  <th>Lot</th>
                  <th>Vehicle Capacity</th>
                  <th>Current Vehicle Count</th>
                  <th>Estimated Distance to Show</th>
                  <th>Estimated Travel Time</th>
                  <th colSpan="2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>A</th>
                  <td>20</td>
                  <td>12</td>
                  <td>3 miles</td>
                  <td>4 mins</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>25</td>
                  <td>10</td>
                  <td>3.3 miles</td>
                  <td>4 mins</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
                <tr>
                  <th>G</th>
                  <td>65</td>
                  <td>0</td>
                  <td>6 miles</td>
                  <td>6 mins</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
                <tr>
                  <td colSpan="7">Add Row</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          {/* <Col md-12>
            <Table size="sm" bordered striped hover>
              <thead>
                <tr>
                  <th>Lot</th>
                  <th>Vehicle Capacity</th>
                  <th>Current Vehicle Count</th>
                  <th>Estimated Distance to Show</th>
                  <th>Estimated Time to Show</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>A</th>
                  <td>20</td>
                  <td>12</td>
                  <td>3 miles</td>
                  <td>4 mins</td>
                </tr>
                <tr>
                  <th>B</th>
                  <td>25</td>
                  <td>10</td>
                  <td>3.3 miles</td>
                  <td>4 mins</td>
                </tr>
                <tr>
                  <th>G</th>
                  <td>65</td>
                  <td>0</td>
                  <td>6 miles</td>
                  <td>6 mins</td>
                </tr>
              </tbody>
            </Table>
          </Col> */}
        </Row>
      </section>
    </Container>
  )
}

export default summary