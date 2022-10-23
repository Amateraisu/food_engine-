import Restaurant from './Restaurant'

const Restaurants = ({restaurants}) => {
    return (
        <>
            {restaurants.map((restaurant) =>(
                <Restaurant key={restaurant.id} restaurant={restaurant} />
            ))}
        </>
    )
  }

export default Restaurants;
