import React, { useState } from 'react';

import {Modal, Button} from "react-bootstrap"
import {Input, Label, ModalHeader, ModalBody, ModalFooter, Form, FormGroup} from 'reactstrap'
import "react-datepicker/dist/react-datepicker.css";
import "./RestaurantInfo.css";
import DatePicker from 'react-datepicker';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { collection, doc, setDoc, addDoc } from "firebase/firestore"; 
import { db } from "../firebase.js";

function RestaurantInfo(props){
  console.log("props", props)
  const { currentUser } = useContext(AuthContext);
  const [showRestaurantInfo, toggleRestaurant] = useState(false);
  const [showEventForm, toggleEventForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const restaurant = props.props;

//do like toggleRestaurant(false)

  const getFrameURL = (restaurantname) =>{
    let mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q=" + restaurantname;
    console.log(mapURL);
    return mapURL;
  }
  
   const getPicture = (restaurant) =>{
    if(!restaurant.photos){
      return restaurant.icon;
    }

    console.log(restaurant.photos[0].photo_reference);
    let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
    pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
    return pictureURL;
  }

  const onClickEventForm = () => {
    if(currentUser != null){
      toggleEventForm(true);
    }
    else{
      alert("NOT LOGGED IN");
    }
  }


  const handleEventSubmit = event =>{
    
    event.preventDefault();
    const returnJSON = {};

    returnJSON[event.target[0].id] = event.target[0].value;
    returnJSON[event.target[1].id] = event.target[1].value;
    returnJSON[event.target[2].id] = event.target[2].value;
    returnJSON["date"] = event.target[3].value;
    returnJSON[event.target[4].id] = event.target[4].value;
    returnJSON[event.target[5].id] = event.target[4].value;
    returnJSON["restaurantDetails"] = restaurant;
    returnJSON["participantList"] = [currentUser.email];
    returnJSON["eventCreator"] = currentUser.email;

    console.log("returnJSON", returnJSON);
    

    try {
      const docRef =  addDoc(collection(db, "events"), 
        returnJSON
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }


    console.log("dbsaved?")
    toggleEventForm(false);
    

  }

    return (
    
      <div className="col-12 col-md-5 m-1">
          <Button variant="primary" onClick={() => toggleRestaurant(true)}>
          Show more information!
        </Button>
  
  
        <Modal show={showRestaurantInfo}>
          <ModalHeader >
          <img src = {getPicture(restaurant)}></img>
          <iframe src = {getFrameURL(restaurant.name)}></iframe>
          
            <Modal.Title>{restaurant.name}</Modal.Title>
          </ModalHeader>
          <ModalBody>
          
          <p>Price Level: {restaurant.price_level}</p>
          <p>Rating: {restaurant.rating}</p>
          <p>Address: {restaurant.vicinity}</p>
  
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="secondary" className = "btn btn-default" onClick={() => toggleRestaurant(false)}>
              Close
            </Button>
            <Button variant="primary" className="btn btn-default" onClick={() =>onClickEventForm()}>
              Create Event
            </Button>
          </ModalFooter>
        </Modal>

        <Modal show={showEventForm} >
        <ModalHeader>{restaurant.name}</ModalHeader>
        <ModalBody >
            <Form onSubmit={handleEventSubmit}>

              <div id="formgroup">
                <FormGroup Row>
                  <Label>Event name:  </Label>
                  <Input type="text"  id="eventname" required/>
                </FormGroup>  
              </div>


              
              <div id="formgroup">
                <FormGroup Row>
                  <Label>Event Duration:  </Label>
                  <Input type="number"  id="eventduration" min="1" max="24" step="0.5" required/>
                </FormGroup>
              </div>

              <div id="formgroup">
                <FormGroup Row>
                  <Label>Max number of members:  </Label>
                  <Input type="number" id="paxlimit" min="1" max="24"  required/>
                </FormGroup>
              </div>



              <div id="formgroup">
                <FormGroup>
                  <Label>Event Date: </Label>
                  <DatePicker showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" selected={startDate}  />
                </FormGroup>
              </div>

              
              <div id="formgroup">
                <FormGroup Row>
                  <Label>Description:  </Label>
                  <Input type="text"  id="eventdesc" deafault=" " required/>
                </FormGroup>  
              </div>
              
          
          
              <div id="formgroup"> 
                <FormGroup check>
                  <Label check> Private event?</Label>
                  <Input type="checkbox" id="privateEvent" />
                </FormGroup>
              </div>

              <Button variant="primary" type="submit" className="btn btn-default">Create Event</Button>
            </Form>

          <ModalFooter>
            
            <Button type="button" variant="secondary" className = "btn btn-default" onClick={() => toggleEventForm(false)}>
            Cancel
            </Button>
          </ModalFooter>
          
        </ModalBody>
      </Modal>
        </div>
    )
}

export default RestaurantInfo;
