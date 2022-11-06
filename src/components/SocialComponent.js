
import React, {useState, useEffect} from 'react'
import {Modal, Button} from "react-bootstrap"
import {Input, Label, ModalHeader, ModalBody, ModalFooter, Form, FormGroup} from 'reactstrap'
import "./RestaurantInfo.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { doc, updateDoc,arrayUnion,collection,deleteField  } from "firebase/firestore";
import { db } from "../firebase.js";


function SocialComponent(props){
    const { currentUser } = useContext(AuthContext);

    const updateParticipant = async (emailadd) => {
        if(emailadd == currentUser.email){
            alert("Cant follow yourself!")
            return;
        }
        const eventRef = doc(db, "followingList", currentUser.email);
        await updateDoc(eventRef, {
            following: arrayUnion(emailadd)
        });

        const eventRef2 = doc(db, "followingList", emailadd);
        await updateDoc(eventRef2, {
            follower: arrayUnion(currentUser.email)
        });


        alert("Successfully followed: " + emailadd)
        
    }

    const removeParticipant = async (emailadd) => {
        if(emailadd == currentUser.email){
            alert("Cant unfollow yourself!")
            return;
        }
        const eventRef = doc(db, "followingList", currentUser.email);
        await updateDoc(eventRef, {
            following: deleteField(emailadd)
        });

        const eventRef2 = doc(db, "followingList", emailadd);
        await updateDoc(eventRef2, {
            follower: deleteField(currentUser.email)
        });

        alert("Successfully unfollowed: " + emailadd)
        
    }

    return(
        <div className = 'emailList'>
            <div>
            {props.props.id}
            <Button variant="primary" onClick={() => updateParticipant(props.props.id)}>
                Follow
            </Button>
            <Button variant="primary" onClick={() => removeParticipant(props.props.id)}>
                Unfollow
            </Button>
            </div>
            
        </div>
    )


}export default SocialComponent;