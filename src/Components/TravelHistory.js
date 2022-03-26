import { React, useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
const bookings = require("../api/dummydata/bookings");

// Written by - Het Shah

function TravelHistory() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">View Travel History</div>
        <div className="row justify-content-center">
          {bookings.map((booking, key) => (
            <Card style={{ width: "19rem", marginTop: "1rem" }}>
              <Card.Img
                variant="top"
                src={booking.image}
                style={{ width: "15rem", height: "10rem" }}
              />
              <Card.Body>
                <Card.Title>{booking.title}</Card.Title>
                <Card.Text>Date Travelled - {booking.datetravelled}</Card.Text>
                <Button variant="primary">Check it out</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TravelHistory;
