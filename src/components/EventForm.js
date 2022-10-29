
import React , {useState} from 'react'
import {Modal, ModalHeader, ModalBody, FormGroup,Button,Form, Input, Label} from 'reactstrap'

const EventForm = ({openEventForm}) => {
    return (
        <Modal show={showEventForm} >
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
            <Form onSubmit={handleEventSubmit}>
              <FormGroup>
                <label>Event name:  <input type="text"/></label>
              </FormGroup>
              <FormGroup>
                <label>Event Duration:  <input type="text"/></label>
              </FormGroup>
              

              <Button variant="primary" value="submit" className="btn btn-default">Create Event</Button>
            </Form>
          <Button type="button" variant="secondary" className = "btn btn-default" onClick={closeEventForm}>
            Cancel
          </Button>
          
        </ModalBody>
    </Modal>
  )
}

export default EventForm