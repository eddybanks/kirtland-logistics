import React from 'react'
import styles from '../../stylesheets/Header.module.css'

const header = props => (
  <header className={styles.Header}>
    <h3>{props.header}</h3>
    <hr />
  </header>
)

export default header