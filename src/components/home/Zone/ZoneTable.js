import React, { Fragment } from 'react'
import { Table } from 'reactstrap'

const zoneTable = props => (
  <Fragment>
    <Table size="sm" bordered hover>
      <thead>
        <tr>
          <th>Lot</th>
          {props.titles.map(title => (
            <th key={"title " + title.id}>{title.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.lots.map(lot => (
          <tr key={"lot " + lot.id}>
            <td>{lot.name}</td>
            {lot.details.map(info => (
              <td key={"detail " + info.id}>{info.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>    
  </Fragment>
)

export default zoneTable