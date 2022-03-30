/*
Author: Prarthana Parmar
Description: This component creates one Room component to display.
*/

import React from 'react';
import {Card , Button} from 'react-bootstrap';
import '../css/RoomItem.css'
import {useNavigate} from 'react-router-dom'; 

const RoomItem = (props) => {


  let navigate = useNavigate(); 

  const deleteHandler = () => {
    
    const url = "https://staycationbackendapp.herokuapp.com/hostuser/deletelisting/" + props.id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((data) => {
      console.log("Delete Successful", data);
    })
    .catch((err) => {
      throw err;
    });
    alert("Room Deleted!");
    // navigate('/viewlisting');
    props.onDelete()
}

console.log(props.id);

  return (
    <div className='user-card'>
        <Card className ='card'>
            <Card.Body>
                <Card.Title className = 'title'>Name:  {props.name}</Card.Title>
                <Card.Text className = 'content'> Hosted By:  {props.hostName} </Card.Text>
                <Card.Text className = 'content' >Guest Size:  {props.guestSize}</Card.Text>
                <Card.Text className = 'content'>Beds:  {props.beds}</Card.Text>
                <Card.Text className = 'content'>Baths:  {props.bath}</Card.Text>
                <Card.Text className = 'content'>Charges:  {props.perNightCharges}</Card.Text>
                <Card.Text className = 'content'>Cleaning Fee:  {props.cleaningFee}</Card.Text>
                <Card.Text className = 'content'>Service Fee:  {props.serviceFee}</Card.Text>
                <Card.Text className = 'content'>Description:  {props.description}</Card.Text>
                <div>
        <Button type = 'submit' className = 'button' onClick={deleteHandler}>Delete</Button>
        </div>
            </Card.Body>
            
        </Card>
        {/* <div>
        <Button type = 'submit' className = 'button'  >Edit</Button>
  </div> */}
      </div>
  );
}

export default RoomItem;
