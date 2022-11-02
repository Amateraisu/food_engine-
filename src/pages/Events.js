import React, {useState, useEffect} from "react";
import Header from "./../components/Header";
import "./../../src/index.css";
import EventsComponent from "../components/EventsComponent";
import { doc, collection, query, where, getDocs, onSnapshot, getDoc} from "firebase/firestore";
import { db } from "../firebase.js";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";





const Posts = () => {

    const [events, setEvents] = useState([]);
    const allEventsRef = collection(db, "events");


    const [users, setUsers] = useState([]);
    const allUsersRef = collection(db, "followingList");

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(allUsersRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getEvents();
    }, []);

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(allEventsRef);
            console.log("data", data);
            setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
           
        };
    
        getEvents();
    }, []);
    
    function checkPrivate(event){
        if(event.privateEvent!="true"){
            return(<EventsComponent event={event}/>)
        }
        else{
            for(let i = 0; i < users.length; i++){
                console.log("HEREE", users[i].following)
                if(users[i].id == currentUser.email && users[i].following.includes(event.eventCreator) && users[i].follower.includes(event.eventCreator)){
                    return(<EventsComponent event={event}/>)
                }
            }
            return(<></>)
        }
        
        
    }
    
    return (
        <div className="col-12 col-md-5 m-1 container">
            <Header />

            
            {console.log("users", users)}
            {events.map((event) =>(
                checkPrivate(event)
            ))}

        </div>
    );
};

export default Posts;
