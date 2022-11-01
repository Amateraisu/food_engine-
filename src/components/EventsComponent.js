import React, {useState, useEffect} from 'react'
import {Modal, Button} from "react-bootstrap"
import {Input, Label, ModalHeader, ModalBody, ModalFooter, Form, FormGroup} from 'reactstrap'
import "./RestaurantInfo.css";



function EventsComponent(event){

    const RenderEvents = (eventDetails) => {
        return (
            <div>

                
                {/* <img src = {getPicture(eventDetails.restaurantDetails)}></img> */}
                <h3 id="restname" value={eventDetails.eventname}>{eventDetails.eventname}</h3>
                <p>Restaurant: {eventDetails.restaurantDetails.name}</p>
                {/* <p>Price Level: {eventDetails.restaurantDetails.price_level}</p>
                <p>Rating: {eventDetails.restaurantDetails.rating}</p> */}
                <p>Address: {eventDetails.restaurantDetails.vicinity}</p>
                {/* {<RestaurantInfo restaurant = {eventDetails.restaurantDetails} />} */}

            </div>
        )
    }

    let joinEventHandler = (details) =>{
        alert("Successfully joined: " + details)
    }

    const getPicture = ((restaurant) => {
        console.log(restaurant.photos[0].photo_reference);
        let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
        pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
        return pictureURL;
      });


    return(
        <div className = ' restaurant'>
            {RenderEvents(event.event)}
                <Button variant="primary" onClick={() => joinEventHandler(event.event.eventname)}>
                        Join Event!
                </Button>
        </div>
    )



}

export default EventsComponent;

