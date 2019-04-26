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
        onChange={props.onChange}
        value={props.value} />
      )
  } else if (props.type === 'text') {
    return <Input 
      className={inputClass}
      type='text' 
      id={props.id}
      onChange={props.onChange}
      value={props.value} />
  } else if (props.type === 'time') {
    return <Input 
    className={inputClass}/>
  }
  else {
    return <Input 
    className={inputClass}
    onChange={props.onChange} />
  }
}

export {
  FormInput
}