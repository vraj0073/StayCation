/*
Author: Kishan Kahodariya
Description: This component handle structure and design of each accomodation that is being dispalyed.
*/
import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  ButtonGroup,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import "../css/AccomodationItem.css";

const AccomodationItem = ({
  title,
  description,
  imageURL,
  feature,
  city,
  state,
  country,
}) => {
  return (
    <div>
      <div className="usercardmargin">
        <Card className="d-flex h-100" style={{ width: "350px" }}>
          <Card.Img variant="center" src={imageURL} />
          <Card.Body className="usercard" style={{ justifyContent: "left" }}>
            <Card.Title className="usercardtitle">{title} </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text className="feature">Feature: {feature}</Card.Text>

            <Row>
              <Col>
                <Button
                  className="bookBtn"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  <Card.Text>Book</Card.Text>
                </Button>
              </Col>
              <Col style={{ paddingRight: "170px" }}>
                <Button
                  className="bookBtn"
                  variant="light"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  <Card.Text>Wishlist</Card.Text>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AccomodationItem;
