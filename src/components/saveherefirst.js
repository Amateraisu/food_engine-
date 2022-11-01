import React from 'react'
import EventInfo from './EventInfo'
import { doc, collection, query, where, getDocs, onSnapshot} from "firebase/firestore";
import { db } from "../firebase.js";
import { assert } from '@firebase/util';






 class EventsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

     RenderEvents(allEventDetails) {
        const q = query(collection(db, "events"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const listofEvents = [];
        querySnapshot.forEach((doc) => {
            listofEvents.push(doc.data());
        });
        console.log(listofEvents)
        if (listofEvents != null){
            console.log("!!!!commentsNotNull")
            const allEvents = listofEvents.map((eventDetails) => {
                console.log(eventDetails);
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
        });
        console.log(unsubscribe)
        return "ass";
    }

     getPicture(restaurant){
        console.log(restaurant.photos[0].photo_reference);
        let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
        pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
        return pictureURL;
      }
    
    
    async queryDB(){
        const q = query(collection(db, "events"));
        const allEvents = [];
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
        
        querySnapshot.forEach((doc) => {
            allEvents.push(doc.data());
        });
        console.log(allEvents)
        return(allEvents)
        });

    }

    render(){
        const allEvents = [];
        this.queryDB().then( function(result){
            allEvents.push(result);
        })
        console.log(allEvents)


        return (
            
            <div className = 'container'>
                {this.RenderEvents(allEvents)}
            </div>
        )
    }

}

export default EventsComponent;
