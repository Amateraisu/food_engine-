import React from 'react';
import Restaurant from './Restaurant'

const Restaurants = ({restaurants}) => {
    console.log("restaurants", restaurants);
    if(restaurants.length == 0){
        console.log("NOTHING")
        return(
            <div>No restaurants found</div>
        )
    }
    else{
        console.log("something")
        return (
            <React.Fragment>
                {restaurants.map((restaurant) =>(
                    <Restaurant key={restaurant.id} restaurant={restaurant} />
                ))}
            </React.Fragment>
        )
    }

  }

export default Restaurants;
