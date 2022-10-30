import React from 'react'
import EventInfo from './EventInfo'


const getPicture = (restaurant) =>{
    console.log(restaurant.photos[0].photo_reference);
    let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
    pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
    return pictureURL;
  }

const  RenderEvents = ({allEventDetails}) => {
    console.log("HERE ARE THE EVENT DETAILS")
    console.log(allEventDetails)
    
    if (allEventDetails != null){
        console.log("!!!!commentsNotNull")
        const allEvents = allEventDetails.map((eventDetails) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <div className='restaurant' >
                    <img src = {getPicture(eventDetails.restaurantDetails)}></img>
                    <h3 id="restname" value={eventDetails.restaurantDetails.name}>{eventDetails.restaurantDetails.name}</h3>
                    <p>Event Name: {eventDetails.eventname}</p>
                    <p>Price Level: {eventDetails.restaurantDetails.price_level}</p>
                    <p>Rating: {eventDetails.restaurantDetails.rating}</p>
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

 const EventsComponent = ({props}) => {

  return (
    <div className = 'container'>
        {console.log("ass")}
        <RenderEvents allEventDetails={props}/>
    </div>
        

  )
}

export default EventsComponent;
