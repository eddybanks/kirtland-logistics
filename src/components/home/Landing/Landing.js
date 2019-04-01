import React, { Fragment } from 'react'
import styles from '../../../stylesheets/Landing.module.css'
import { Jumbotron } from 'reactstrap'

const landing = props => {
  return (
    <Fragment>
      <Jumbotron className={styles.LandingTitle}>
        <h2>{props.title}</h2>
      </Jumbotron>
      <div className={styles.AuthenticationBox}>

      </div>
    </Fragment>
  )
}

export default landing