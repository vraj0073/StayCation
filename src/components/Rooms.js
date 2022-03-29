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
                console.log("Fetch Successful", item);
                setRooms(item.data);
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
                beds = {room.beds}
                bath = {room.bath}
                perNightCharges = {room.perNightCharges}
                cleaningFee = {room.cleaningFee}
                serviceFee = {room.serviceFee}
                description = {room.description} 
                onDelete={viewrooms}/>)}
            </div>
    )
}
export default Room;