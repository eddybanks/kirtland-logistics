import React, { Fragment } from 'react'
import { Table } from 'reactstrap'
import { FormInput } from '../../forms/FormInput'

const zoneTableEdit = props => (
  <Fragment>
    <Table size="sm" bordered hover>
      <thead>
        <tr>
          <th>Lot</th>
          {props.titles.map(title => (
            <th key={"etitle " + title.id}>{title.title}</th>
          ))}
          <th colSpan="2"></th>
        </tr>
      </thead>
      <tbody>
        {props.lots.map(lot => (
          <tr>
            <td key={"elot " + lot.id}>{lot.name}</td>
            {lot.details.map(info => (
              <td key={"edetail " + info.id}><FormInput defaultValue={info.value} type={info.type} /></td>
            ))}
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        ))}
        <tr><td colSpan={props.titles.length + 3}>Add Row</td></tr>
      </tbody>
    </Table>    
  </Fragment>
)

export default zoneTableEdit