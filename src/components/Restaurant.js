import React from 'react'

const Restaurant = ({restaurant}) => {
  return (
    <div className='restaurant'>
      <h3>{restaurant.name}</h3>
      <p>Cuisine: {restaurant.cuisine}</p>
    </div>
  )
}

export default Restaurant
