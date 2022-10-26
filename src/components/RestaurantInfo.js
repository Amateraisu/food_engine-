import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {ModalHeader, ModalBody, FormGroup,Form, Input, Label} from 'reactstrap'
import "./RestaurantInfo.css";




const RestaurantInfo = ({restaurant}) => {
    const [show, setShow] = useState(false);
    const [showEventForm, setShowEventForm] = useState(false);

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
    <div>
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
    </div>
  )
}

export default RestaurantInfo;
