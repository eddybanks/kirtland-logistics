import React from 'react'
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap'

const register = props => {
  return (
    <Container>
      <Form className="mt-5">
        <FormGroup>
          <Label for="regEmail">First Name</Label>
          <Input type="text" name="email" id="regEmail" placeholder="Type in First Name" />
        </FormGroup>
        <FormGroup>
          <Label for="regEmail">Email</Label>
          <Input type="email" name="email" id="regEmail" placeholder="Type in prefered Email Address" />
        </FormGroup>
        <FormGroup>
          <Label for="regPassword">Password</Label>
          <Input type="password" name="password" id="regPassword" placeholder="Password goes here!" />
        </FormGroup>
        <FormGroup>
          <Label for="regPassword">Confirm Password</Label>
          <Input type="password" name="password" id="regPassword" placeholder="Password goes here!" />
        </FormGroup>
        <Button>Register</Button>
      </Form>
    </Container>
  )
}

export default register