import React, {useState, useEffect} from "react";
import Header from "./../components/Header";
import "./../../src/index.css";
import { doc, collection, query, where, getDocs, onSnapshot, getDoc} from "firebase/firestore";
import { db } from "../firebase.js";
import SocialComponent from "../components/SocialComponent";




const Social = () => {

    const [users, setUsers] = useState([]);
    const allUsersRef = collection(db, "followingList");

    useEffect(() => {
        const getEvents = async () => {
            const data = await getDocs(allUsersRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getEvents();
    }, []);

    
    return (
        <div className="col-12 col-md-5 m-1 container">
            <Header />   
            <div class="allemailList">
                <div class="emailList">
                </div>
                {users.map((user) =>(
                    <SocialComponent props={user}/>
                ))}
            </div>


        </div>
    );
};

export default Social;
