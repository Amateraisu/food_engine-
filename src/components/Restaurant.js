import React from 'react'
import RestaurantInfo from './RestaurantInfo'

const Restaurant = ({restaurant, onClickHandler}) => {
  const getPicture = (restaurant) =>{
    if(!restaurant.photos){
      return restaurant.icon;
    }
    //console.log(restaurant.photos[0].photo_reference);
    let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
    pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
    return pictureURL;
  }
  return (
    <div className='restaurant' onClick = {onClickHandler}>
      <img src = {getPicture(restaurant)}></img>
      <h3 id="restname" value={restaurant.name}>{restaurant.name}</h3>
      <p>Price Level: {restaurant.price_level}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>Address: {restaurant.vicinity}</p>
      <RestaurantInfo props = {restaurant} />
      {console.log("outerlayer")}
    </div>
  )
}

export default Restaurant
