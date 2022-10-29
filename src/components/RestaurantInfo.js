import React, { useState } from 'react';

import {Modal, Button} from "react-bootstrap"
import {FormGroup, Form, Input, Label} from 'reactstrap'
import EventForm from './EventForm'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./RestaurantInfo.css";
import ReactDatePicker from 'react-datepicker';




const RestaurantInfo = ({restaurant}) => {
    const [show, setShow] = useState(false);
    const [showEventForm, setShowEventForm] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openEventForm = () => setShowEventForm(true);
  const closeEventForm = () => setShowEventForm(false);

  

  const handleEventSubmit = (event) => {
    event.preventDefault();
    alert(`Submission succesffully received!`)
  }

  const getFrameURL = (restaurantname) =>{
    let mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q=" + restaurantname;
    console.log(mapURL);
    return mapURL;
  }
  
  const getPicture = (restaurant) =>{
    console.log(restaurant.photos[0].photo_reference);
    let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
    pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
    return pictureURL;
  }



  return (
    
    <div className="col-12 col-md-5 m-1">
        <Button variant="primary" onClick={handleShow}>
        Show more information!
      </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
        <img src = {getPicture(restaurant)}></img>
        <iframe src = {getFrameURL(restaurant.name)}></iframe>
        
          <Modal.Title>{restaurant.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <p>Price Level: {restaurant.price_level}</p>
        <p>Rating: {restaurant.rating}</p>
        <p>Address: {restaurant.vicinity}</p>

        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="secondary" className = "btn btn-default" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="btn btn-default" onClick={openEventForm}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEventForm}>
        <Modal.Header><Modal.Title>{restaurant.name}</Modal.Title></Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleEventSubmit} class="form-horizontal">
              <FormGroup>
                <Label htmlFor="eventname">Event name:  </Label>
                <Input type="text" id="eventname" name = "eventname"/>
              </FormGroup>
              
              <FormGroup>
                <Label>Event Duration:  </Label>
                <input type="text" />
              </FormGroup>

              <FormGroup>
                <Label>Event Date: </Label>
                <DatePicker   showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" minDate={new Date()} selected={startDate} onChange={(date) => setStartDate(date)} />
              </FormGroup>

              <FormGroup check>
                  <Label check> Private event?</Label>
                  
                      <Input type="checkbox" name="remember" />
                      
                  
              </FormGroup>
              

              
            </Form>

          <Modal.Footer>
            <Button variant="primary" value="submit" className="btn btn-default">Create Event</Button>
            <Button type="button" variant="secondary" className = "btn btn-default" onClick={closeEventForm}>
            Cancel
            </Button>
          </Modal.Footer>
          
        </Modal.Body>
    </Modal>
    </div>
  )
}

export default RestaurantInfo;
