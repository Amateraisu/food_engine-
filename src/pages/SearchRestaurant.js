import React, {Component} from "react";
import FoodEngineLogo from "../components/FoodEngineLogo";
import Header from "./../components/Header";
import Search from "./../components/Search";
import "./../../src/index.css";

class SearchRestaurant extends Component {
    render(){
        return (
            <div>
                <div class="row">
                <Header />
                </div>
                
                <div class="row">
                <Search />
                </div>
                
    
            </div>
        );
    }
}


export default SearchRestaurant;
