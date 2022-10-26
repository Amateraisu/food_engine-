import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = ({restaurants}) => {
    return (
        <React.Fragment>
            {restaurants.map((restaurant) =>(
                <Restaurant key={restaurant.id} restaurant={restaurant} />
            ))}
        </React.Fragment>
    )
  }

export default Restaurants;
