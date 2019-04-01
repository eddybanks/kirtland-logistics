import React, { Fragment } from 'react'
import styles from '../../../assets/Landing.module.css'

const landing = props => {
  return (
    <Fragment>
      <header className={styles.landingTitle}>
        <h1>{props.title}</h1>
      </header>
      <div className={styles.AuthenticationBox}>

      </div>
    </Fragment>
  )
}

export default landing