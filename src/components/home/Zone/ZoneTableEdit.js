import React, { Fragment } from 'react'
import { Table, UncontrolledAlert } from 'reactstrap'
import { FormInput } from '../../forms/FormInput'

const zoneTableEdit = props => (
  <Fragment>
    {/* <UncontrolledAlert color="success">
      You can now edit this table
    </UncontrolledAlert> */}
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
        {props.zone.lots.map(lot => (
          <tr key={"elot " + lot.id}>
            <td><FormInput value={lot.name} onChange={(e) => props.onChange(e, lot.id, props.zone.id)} type='text' /></td>
            {lot.details.map(info => (
              <td key={"edetail " + info.id}><FormInput value={info.value} type={info.type} onChange={(e) => props.onChange(e, lot.id, props.zone.id, info.id)} /></td>
            ))}
            <td onClick={() => props.deleteParking(props.zone.id, lot.id)} >Delete</td>
          </tr>
        ))}
        <tr><td colSpan={props.titles.length + 2} onClick={() => props.addRow(props.zone.id) } >Add Parking Lot</td></tr>
      </tbody>
    </Table>    
  </Fragment>
)

export default zoneTableEdit