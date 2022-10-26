import React, {Component} from "react";
import FoodEngineLogo from "../components/FoodEngineLogo";
import Header from "./../components/Header";
import Search from "./../components/Search";
import "./../../src/index.css";

class Posts extends Component {
    render(){
        return (
            <div>
                <Header />
                <Search />
    
            </div>
        );
    }
}


export default Posts;
