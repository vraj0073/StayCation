/*
Author: Kishan Kahodariya
Description: This component handle structure and design of each accomodation that is being dispalyed.
*/
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row, Card } from "react-bootstrap";
import "../css/AccomodationItem.css";

const AccomodationItem = ({
  title,
  description,
  imageURL,
  city,
  state,
  country,
}) => {
  return (
    <div>
      <div className="usercardmargin">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="center" src={imageURL} />
          <Card.Body className="usercard">
            <Card.Title className="usercardtitle">{title} </Card.Title>
            <Card.Text style={{ justifyContent: "left" }}>
              {description}
            </Card.Text>
            {/* <Button variant="primary" href={url} target="_blank">
              Read More
            </Button> */}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AccomodationItem;
