import React, {useState, useEffect} from 'react'
import {Modal, Button} from "react-bootstrap"
import {Input, Label, ModalHeader, ModalBody, ModalFooter, Form, FormGroup} from 'reactstrap'
import "./RestaurantInfo.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, updateDoc,arrayUnion } from "firebase/firestore";
import { db } from "../firebase.js";



function EventsComponent(event){
    const { currentUser } = useContext(AuthContext);
    

    const updateParticipant = async (emailadd) => {
        console.log(event.event.id)
        const eventRef = doc(db, "events", event.event.id);
        console.log("update", emailadd)
        await updateDoc(eventRef, {
            participantList: arrayUnion(emailadd)
        });
        
    }

    const RenderEvents = (eventDetails) => {
        return (
            <div>

                
                {/* <img src = {getPicture(eventDetails.restaurantDetails)}></img> */}
                <h3 id="restname" value={eventDetails.eventname}>{eventDetails.eventname}  ({eventDetails.privateEvent == "true" ? "Private" : "Public"})</h3>
                <p>Restaurant: {eventDetails.restaurantDetails.name}</p>
                {/* <p>Price Level: {eventDetails.restaurantDetails.price_level}</p>
                <p>Rating: {eventDetails.restaurantDetails.rating}</p> */}
                <p>Address: {eventDetails.restaurantDetails.vicinity}</p>
                <p>Creator: {eventDetails.eventCreator}</p>
                <p>Capacity: {eventDetails.participantList.length}/{eventDetails.paxlimit}</p>
                <p>Description: {eventDetails.eventdesc}</p>
                {/* {<RestaurantInfo restaurant = {eventDetails.restaurantDetails} />} */}

            </div>
        )
    }

    let joinEventHandler = (details) =>{
        if(currentUser != null){
            console.log(currentUser.email)
            if(event.event.participantList.includes(currentUser.email)){
                alert("You are already part of the event")
                
            }
            else if(event.event.participantList.length >= event.event.paxlimit){
                alert("Capacity already maxed, cannot join!")
            }
            else{
                alert("Successfully joined: " + details.eventname)
                updateParticipant(currentUser.email)
            }
            
          }
          else{
            alert("You need to be logged in to join an event!");
          }
        
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
                <Button variant="primary" onClick={() => joinEventHandler(event.event)}>
                        Join Event!
                </Button>
        </div>
    )



}

export default EventsComponent;

