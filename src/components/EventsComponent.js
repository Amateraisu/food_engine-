import React, {useState, useEffect} from 'react'
import EventInfo from './EventInfo'
import { doc, collection, query, where, getDocs, onSnapshot, getDoc} from "firebase/firestore";
import { db } from "../firebase.js";




function EventsComponent(){
    const [events, setEvents] = useState([]);
    const allEventsRef = collection(db, "events");

    const RenderEvents = (allEventDetails) => {
        console.log("ass")
        if (allEventDetails == null){
            console.log("!!!!commentsNotNull")
            const allEvents = allEventDetails.map((eventDetails) => {
                return (
                    <div className="col-12 col-md-5 m-1">
                        <div className='restaurant' >
                        {/* <img src = {getPicture(eventDetails.restaurantDetails)}></img> */}
                        <h3 id="restname" value={eventDetails.eventname}>{eventDetails.eventname}</h3>
                        <p>Restaurant: {eventDetails.restaurantDetails.name}</p>
                        {/* <p>Price Level: {eventDetails.restaurantDetails.price_level}</p>
                        <p>Rating: {eventDetails.restaurantDetails.rating}</p> */}
                        <p>Address: {eventDetails.restaurantDetails.vicinity}</p>
                        {/* <RestaurantInfo restaurant = {restaurant} /> */}
                        </div>
                    </div>
                )
            })
            return (
                allEvents
            )
        }
        else{
            return(<div>No events for u haha</div>);
        }
    }

    const getPicture = ((restaurant) => {
        console.log(restaurant.photos[0].photo_reference);
        let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
        pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
        return pictureURL;
      });

    useEffect(() => {
    const getEvents = async () => {
        const data = await getDocs(allEventsRef);
        console.log(data);
        setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       
    };

    getEvents();
    }, []);

    return(
        <div>
            {events.map((event) => {
            return(
            <div className="col-12 col-md-5 m-1">
                <div className='restaurant' >
                {/* <img src = {getPicture(eventDetails.restaurantDetails)}></img> */}
                <h3 id="restname" value={event.eventname}>{event.eventname}</h3>
                <p>Restaurant: {event.restaurantDetails.name}</p>
                {/* <p>Price Level: {eventDetails.restaurantDetails.price_level}</p>
                <p>Rating: {eventDetails.restaurantDetails.rating}</p> */}
                <p>Address: {event.restaurantDetails.vicinity}</p>
                {/* <RestaurantInfo restaurant = {restaurant} /> */}
                </div>
            </div>
        )})}
        </div>
    )



}

export default EventsComponent;

