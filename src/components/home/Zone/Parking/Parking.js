import React from 'react'

const parking = props => {
  return (
    <tr>
      {props.map(info => (
        <td key={info.id}>{info.content}</td>
      ))}
    </tr>
  )
}

export default parking