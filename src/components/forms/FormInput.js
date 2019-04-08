import React from 'react'
import { Input } from 'reactstrap'

const FormInput = props => {
  if (props.type == 'number') {
    return (
      <Input 
        type='number' 
        id={props.id}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue} />
      )
  } else if (props.type == 'string') {
    return <Input />
  } else if (props.type == 'time') {
    return <Input />
  }
  else {
    return <Input />
  }
}

export {
  FormInput
}