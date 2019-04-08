import React from 'react'
import { Input } from 'reactstrap'

const FormInput = props => {
  if (props.type == 'number') {
    return <Input type='number' defaultValue={props.defaultValue} />
  } else {
    return <Input />
  }
}

export {
  FormInput
}