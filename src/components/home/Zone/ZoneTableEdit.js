import React, { Fragment } from 'react'
import { Table } from 'reactstrap'

const zoneTableEdit = props => (
  <Fragment>
    <Table size="sm" bordered hover>
      <thead>
        <tr>
          <th>Lot</th>
          {props.titles.map(title => (
            <th key={"title " + title.id}>{title.title}</th>
          ))}
          <th colSpan="2"></th>
        </tr>
      </thead>
      <tbody>
        {props.lots.map(lot => (
          <tr>
            <td key={"lot " + lot.id}>{lot.name}</td>
            {lot.details.map(info => (
              <td key={"detail " + info.id}><input value={info.value} /></td>
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