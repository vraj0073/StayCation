/*
Author: Prarthana Parmar
Description: This component renders the listings or allows host user to create hosting based on the option selected by user.
*/

import React from "react";
import { useEffect, useState } from 'react';
import Sidebar from'./Sidebar';
import Createlisting from './Createlisting';
import Room from './Rooms';
import Navheader from './Navheader';
import { useLocation } from "react-router-dom";

const Host = (props) => {
  const location = useLocation();
  console.log(location.state);
  const [createboolean, setroom ] = useState(false);
  const [viewboolean, setview ] = useState(true);

  useEffect(()=>{
    viewrooms();
  },[]);
  const [rooms, setRooms] = useState([]);

    const viewrooms = () =>{
        console.log("fetch products");
            fetch("https://staycationbackendapp.herokuapp.com/hostuser/getlisting").then((result) => {
                if (result.status !== 200) {
                    throw new Error("Could not fetch Items from inventory");
                  }
                  return result.json();
            }).then((item) => {
                let data = item.data.filter((i) => i.email === location.state);
                console.log(data);
                setRooms(data);
              })
              .catch((err) => {
                throw err;
              });
      } 

  const createroom = () => {
    setroom(true);
    setview(false);
  }
  const viewroom = () => {
    setroom(false);
    setview(true);
  }

  return (
    <div>
      <header>
      <Navheader/>
      </header>
      <Sidebar props viewlisting={viewroom} createlisting={createroom}/>
      {viewboolean && <Room item = {rooms} email = {location.state}/>}
      {createboolean && <Createlisting/>}
      
    </div>
  )
}

export default Host;