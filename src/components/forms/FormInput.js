import React from 'react'
import { Input } from 'reactstrap'
import styles from '../../stylesheets/FormInput.module.css'

const FormInput = props => {
  const inputClass = props.itemClass ? (props.itemClass + " " + styles.InputClass) : styles.InputClass
  if (props.type === 'number') {
    return (
      <Input 
        className={inputClass}
        type='number' 
        id={props.id}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue} />
      )
  } else if (props.type === 'string') {
    return <Input />
  } else if (props.type === 'time') {
    return <Input />
  }
  else {
    return <Input />
  }
}

export {
  FormInput
}