import React, { Fragment } from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

const trackingUpdates = props => {
  return (
    <Fragment>
      <ListGroup>
        {props.updates.map(update => (          
          <ListGroupItem className="d-flex justify-content-between align-items-center">
            {update.title}
            <Badge pill>{update.value}</Badge>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Fragment>
  )
}

export default trackingUpdates