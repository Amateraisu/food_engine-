import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Restaurants from './components/Restaurants'
import Select from './components/Select'

const Search = () =>{
    // can only filter after seaerching!
    const [restaurants, setRestaurants] = useState([
    {
        id: 1,
        name: "CN Chinese",
        cuisine: "Chinese"
     },
     {
        id: 2,
        name: "700 Takeaway",
        cuisine: "Japanese"
     },
     {
      id: 3,
      name: "Pizza Hut",
      cuisine: "Pizza"
   }
    ])

    const [searchField, setSearchField] = useState('');
    const [filterField, setFilterField] = useState('');
    const [filteredRestaurants, setFilterRestaurants] = useState([])

    //useEffect(() =>{
        //fetch('').then((res) => res.json()).then((restaurants)=> setRestaurants(restaurants), ()=>{

        //})
    //}, [])

    let onClickHandler = (event) =>{
      event.preventDefault()
      if(searchField === ""){
        setFilterRestaurants([])
      }
      else{
        const newRestaurants = restaurants.filter((restaurant) =>{
          return restaurant.name.toLocaleLowerCase().includes(searchField)
        })
        setFilterRestaurants(newRestaurants)
      }
    }



    const onSearchChange = (event) =>{
      const searchFieldString = event.target.value.toLocaleLowerCase()
      console.log(searchFieldString)
      setSearchField(searchFieldString)
    }

    
    const onFilterChange = (event) =>{
      const filterFieldString = event.target.value;
      console.log(filterFieldString);
      setFilterField(filterFieldString);
    }

    let onFilterHandler = (event) =>{
      event.preventDefault()
      if(filterField != "All"){
        const newRestaurants = filteredRestaurants.filter((restaurant) =>{
          return restaurant.cuisine.includes(filterField);
        })
        setFilterRestaurants(newRestaurants)
      }
      else{
        setFilterRestaurants(filteredRestaurants)
      }
      
    }

    return(
        <div className = 'container'>
          <h1>The Food Engine</h1>
          <Header 
            title ='The Food Engine' 
            onChangeHandler = {onSearchChange}
            onClickHandler = {onClickHandler}
          />
          <Select 
            onChangeHandler= {onFilterChange}
            onClickHandler = {onFilterHandler}
          />
          {filteredRestaurants.length > 0 ? (
            <Restaurants restaurants={filteredRestaurants} />
          ) : (
            ''
          )} 
        </div>
      
    )
}


export default Search
