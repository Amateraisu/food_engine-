import React, { useState } from 'react';

import {Modal, Button} from "react-bootstrap"
import {Input, Label, ModalHeader, ModalBody, ModalFooter, Form, FormGroup} from 'reactstrap'
import "react-datepicker/dist/react-datepicker.css";
import "./RestaurantInfo.css";
import DatePicker from 'react-datepicker';


class RestaurantInfo extends React.Component{

  constructor(props) {
    super(props);

    this.toggleRestaurant = this.toggleRestaurant.bind(this);
    this.toggleEventForm = this.toggleEventForm.bind(this);

    this.state = {
        // Should save the username also
        showRestaurantInfo: false,
        showEventForm: false,
        eventname: '',
        eventduration: '',
        date: new Date(),
        privateEvent: false,
        restaurantDetails: this.props.restaurant,

    };
  }

  toggleRestaurant (event) {
    console.log("fuck")
    this.setState({showRestaurantInfo: !this.state.showRestaurantInfo});
  }

  toggleEventForm (event) {
    this.setState({showEventForm: !this.state.showEventForm});
  }


  handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  getFrameURL(restaurantname) {
    let mapURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q=" + restaurantname;
    console.log(mapURL);
    return mapURL;
  }
  
  getPicture(restaurant) {
    console.log(restaurant.photos[0].photo_reference);
    let pictureURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=PHOTOREF&key=AIzaSyAKaJMO3CQcvpf2iweobZjts8qI0lOZkfk&q";
    pictureURL = pictureURL.replace("PHOTOREF", restaurant.photos[0].photo_reference);
    return pictureURL;
  }


  handleEventSubmit = event =>{
    this.toggleEventForm();
    console.log("fuckkkkkk");
    console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();

  }

  render() {
    return (
    
      <div className="col-12 col-md-5 m-1">
          <Button variant="primary" onClick={this.toggleRestaurant}>
          Show more information!
        </Button>
  
  
        <Modal show={this.state.showRestaurantInfo} toggle={this.toggleRestaurant}>
          <ModalHeader >
          <img src = {this.getPicture(this.props.restaurant)}></img>
          <iframe src = {this.getFrameURL(this.props.restaurant.name)}></iframe>
          
            <Modal.Title>{this.props.restaurant.name}</Modal.Title>
          </ModalHeader>
          <ModalBody>
          
          <p>Price Level: {this.props.restaurant.price_level}</p>
          <p>Rating: {this.props.restaurant.rating}</p>
          <p>Address: {this.props.restaurant.vicinity}</p>
  
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="secondary" className = "btn btn-default" onClick={this.toggleRestaurant}>
              Close
            </Button>
            <Button variant="primary" className="btn btn-default" onClick={this.toggleEventForm}>
              Create Event
            </Button>
          </ModalFooter>
        </Modal>

        <Modal show={this.state.showEventForm} toggle={this.toggleEventForm}>
        <ModalHeader>{this.props.restaurant.name}</ModalHeader>
        <ModalBody >
            <Form onSubmit={this.handleEventSubmit}>

              <div id="formgroup">
                <FormGroup Row>
                  <Label htmlFor="eventname">Event name:  </Label>
                  <Input type="text" placeholder="Event Name" name="eventname" id="eventname" value={this.state.eventname} onChange={this.handleChange}/>
                </FormGroup>  
              </div>


              
              <div id="formgroup">
                <FormGroup Row>
                  <Label htmlFor="eventduration">Event Duration:  </Label>
                  <Input type="text" name="eventduration" id="eventduration" value={this.state.eventduration} onChange={this.handleChange}/>
                </FormGroup>
              </div>



              <div id="formgroup">
                <FormGroup>
                  <Label>Event Date: </Label>
                  <DatePicker showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" date={new Date()} />
                </FormGroup>
              </div>
          
              <div id="formgroup"> 
                <FormGroup check>
                  <Label check> Private event?</Label>
                  <Input type="checkbox" name="privateEvent" value={this.privateEvent} onChange={this.handleChange}/>
                </FormGroup>
              </div>

              <Button variant="primary" type="submit" className="btn btn-default">Create Event</Button>
            </Form>

          <ModalFooter>
            
            <Button type="button" variant="secondary" className = "btn btn-default" onClick={this.toggleEventForm}>
            Cancel
            </Button>
          </ModalFooter>
          
        </ModalBody>
    </Modal>
      </div>
    )
  }

}

export default RestaurantInfo;
