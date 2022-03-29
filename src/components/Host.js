import React from "react";
import { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from'./Sidebar';
import Createlisting from './Createlisting';
import Room from './Rooms';

const Host = () => {
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
                console.log("Fetch Successful", item);
                setRooms(item.data);
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
      <Header/>
      </header>
      <Sidebar props viewlisting={viewroom} createlisting={createroom}/>
      {viewboolean && <Room item = {rooms}/>}
      {createboolean && <Createlisting/>}
      
    </div>
  )
}

export default Host;