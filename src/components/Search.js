import React, { useState, useEffect, useContext } from 'react'
import Searchbar from './SearchBar'
import { AuthContext } from "../context/AuthContext";
import Restaurants from './Restaurants'
import Select from './Select'

import axios from 'axios'

function Search(){
    // can only filter after seaerching!
    const [restaurants, setRestaurants] = useState([])
    const [searchField, setSearchField] = useState('');
    const [filterField, setFilterField] = useState('');
    const [filteredRestaurants, setFilterRestaurants] = useState([])
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const { currentUser } = useContext(AuthContext);

    if(!navigator.geolocation){
      return alert('Geolocation is not supported by your browser.')
    }
    else{
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position.coords.latitude, position.coords.longitude);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        }, () => {
            alert('Unable to fetch location');
        }
        )
    }

    let onClickHandler = (event) =>{
      event.preventDefault()
      if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser.')
      }
      else{
          navigator.geolocation.getCurrentPosition((position)=>{
              console.log(position.coords.latitude, position.coords.longitude);
              setLatitude(position.coords.latitude);
              setLongitude(position.coords.longitude);
          }, () => {
              alert('Unable to fetch location');
          }
          )
      }
      const api = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=RESTAURANT_TYPE&location=LATITUDE%2CLONGITUDE&radius=1500&type=restaurant&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk"
      if(searchField === ""){
        return;
      }
      else{
        let modified = api.replace("RESTAURANT_TYPE", searchField);
        modified = modified.replace("LATITUDE", latitude);
        modified = modified.replace("LONGITUDE", longitude);
        console.log(modified);
        axios.get(modified).then((response) =>{
          console.log(response.data.results);
          for(let result of response.data.results){
            if(!result.price_level){
              result.price_level = "-";
            }
          }
          setRestaurants(response.data.results);
          setFilterRestaurants(response.data.results);
        })
      }
    }



    const onSearchChange = (event) =>{
      const searchFieldString = event.target.value.toLocaleLowerCase()
      //console.log(searchFieldString)
      setSearchField(searchFieldString)
    }

    
    const onFilterChange = (event) =>{
      const filterFieldString = event.target.value;
      //console.log(filterFieldString);
      setFilterField(filterFieldString);
      if(filterField === "RateDesc"){
        const newRestaurants = filteredRestaurants.sort((a, b) =>{
          return a.rating - b.rating;
        })
        //console.log(newRestaurants);
        setFilterRestaurants(newRestaurants);
      }
      else if(filterField === "RateAsce"){
        const newRestaurants = filteredRestaurants.sort((a, b) =>{
          return b.rating - a.rating;
        })
        //console.log(newRestaurants);
        setFilterRestaurants(newRestaurants);
      }
      
    }


    const handleShow = (event) =>{
      const name = document.getElementById("restname").textContent;
      console.log(name);
      /* const newRestaurants = filteredRestaurants.filter((restaurant) =>{
        return restaurant.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
      })
      setFilterRestaurants(newRestaurants); */
    }

    return(
        <div className = 'container'>

          <Searchbar 
            onChangeHandler = {onSearchChange}
            onClickHandler = {onClickHandler}
          />
          <Select 
            onChangeHandler= {onFilterChange}
          />
          {filteredRestaurants.length >= 0 ? (
            <Restaurants 
            restaurants={filteredRestaurants} 
            onClickHandler={handleShow}
            />
          ) : (
            ''
          )} 
        </div>
      
    )
}


export default Search
