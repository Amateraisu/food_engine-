import React, {useState, useEffect} from "react";
import Header from "./../components/Header";
import "./../../src/index.css";
import EventsComponent from "../components/EventsComponent";
import { doc, collection, query, where, getDocs, onSnapshot, getDoc} from "firebase/firestore";
import { db } from "../firebase.js";





const Posts = () => {

    const [events, setEvents] = useState([]);
    const allEventsRef = collection(db, "events");

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(allEventsRef);
            console.log(data);
            setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
           
        };
    
        getEvents();
    }, []);
    
    
    return (
        <div className="col-12 col-md-5 m-1 container">
            <Header />
            {events.map((event) =>(
                <EventsComponent event={event}/>
            ))}

        </div>
    );
};

export default Posts;
