import React, { Fragment } from 'react'
import { Table, Alert } from 'reactstrap'
import { FormInput } from '../../forms/FormInput'

const zoneTableEdit = props => (
  <Fragment>
  <Alert color="success">You can now edit this table</Alert>
    <Table size="sm" bordered hover>
      <thead>
        <tr>
          <th>Lot</th>
          {props.titles.map(title => (
            <th key={"etitle " + title.id}>{title.title}</th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.lots.map(lot => (
          <tr>
            <td key={"elot " + lot.id}>{lot.name}</td>
            {lot.details.map(info => (
              <td key={"edetail " + info.id}><FormInput defaultValue={info.value} type={info.type} /></td>
            ))}
            <td>Delete</td>
          </tr>
        ))}
        <tr><td colSpan={props.titles.length + 2}>Add Row</td></tr>
      </tbody>
    </Table>    
  </Fragment>
)

export default zoneTableEdit