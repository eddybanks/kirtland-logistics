import React from 'react'
import { Row, Col } from 'reactstrap'
import styles from '../../stylesheets/Footer.module.css'

const footer = props => (
  <footer>
    <Row>
      <Col><p className={styles.Footer}>{props.copyright}</p></Col>
    </Row>
  </footer>
)

export default footer