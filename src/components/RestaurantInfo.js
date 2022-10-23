import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./RestaurantInfo.css";

const RestaurantInfo = ({restaurant}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getFrameURL = (restaurantname) =>{
    let mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q=" + restaurantname;
    console.log(mapURL);
    return mapURL;
  }
  
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Show more information!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
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
          <Button variant="primary" className="btn btn-default" onClick={handleClose}>
            Create Event
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RestaurantInfo;
