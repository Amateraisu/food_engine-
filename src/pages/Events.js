import React, {Component} from "react";
import FoodEngineLogo from "./../components/FoodEngineLogo";
import Header from "./../components/Header";
import "./../../src/index.css";
import {allEventDetails} from "./../sampledata/sampleEventList"
import EventsComponent from "../components/EventsComponent";

class Posts extends Component {
    render(){
        return (
            <div>
                <Header />
                <EventsComponent props={allEventDetails}/>
    
            </div>
        );
    }
}


export default Posts;
