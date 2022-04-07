/*
Author: Prarthana Parmar
Description: This component renders the array of listings fetched from the backend.
*/

import React, { useState, useEffect } from 'react';
import '../css/Rooms.css';
import RoomItem from './RoomItem';


const Room = (props) => {
    const [rooms, setRooms] = useState([]);

    const viewrooms = () =>{
        console.log("fetch products");
            fetch("https://staycationbackendapp.herokuapp.com/hostuser/getlisting").then((result) => {
                if (result.status !== 200) {
                    throw new Error("Could not fetch Items from inventory");
                  }
                  return result.json();
            }).then((item) => {
                let data = item.data.filter((i) => i.email === localStorage.userEmail);
                console.log("Fetch Successful", data);
                setRooms(data);
              })
              .catch((err) => {
                throw err;
              });
      } 

      useEffect(()=>{
        viewrooms();
      },[]);
    return (
            <div className='user-container'>
                {rooms.map((room) => <RoomItem   
                name  =  {room.name}
                id = {room._id}
                hostName = {room.hostName}
                guestSize = {room.guestSize}
                bedroom = {room.bedroom}
                beds = {room.beds}
                bath = {room.bath}
                perNightCharges = {room.perNightCharges}
                cleaningFee = {room.cleaningFee}
                serviceFee = {room.serviceFee}
                feature = {room.feature}
                img = {room.img}
                type = {room.type}
                location = {room.location}
                state = {room.state}
                country = {room.country}
                description = {room.description} 
                onChange={viewrooms}
                />
                )}
            </div>
    )
}
export default Room;