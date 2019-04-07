import React, { Fragment } from 'react'
import styles from '../../../stylesheets/Zone.module.css'
import Header from '../../layouts/Header'
import ZoneTable from './ZoneTable'
import ZoneTableEdit from './ZoneTableEdit'
import { Container, Row, Col, Table, Button, ButtonGroup } from 'reactstrap'

const zone = props => {
  return (
    <Container>
      <Header header="Zones" />
      <section className={styles.ZoneSection}>
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
            <ZoneTable {...props} />
            <ZoneTableEdit {...props} />
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default zone