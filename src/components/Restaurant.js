import React from 'react'
import RestaurantInfo from './RestaurantInfo'

const Restaurant = ({restaurant, onClickHandler}) => {

  return (
    <div className='restaurant' onClick = {onClickHandler}>
      <h3 id="restname" value={restaurant.name}>{restaurant.name}</h3>
      <p>Price Level: {restaurant.price_level}</p>
      <p>Rating: {restaurant.rating}</p>
      <p>Address: {restaurant.vicinity}</p>
      <RestaurantInfo restaurant = {restaurant} />
    </div>
  )
}

export default Restaurant
