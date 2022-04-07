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
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/AccomodationItem.css";

const AccomodationItem = ({
  title,
  description,
  imageURL,
  feature,
  city,
  state,
  country,
  room
}) => {
  let navigate = useNavigate();
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
                  onClick={() => {
                    navigate("/rooms/" + room._id, { state: { room } });
                  }}
                >
                  <Card.Text>Book</Card.Text>
                </Button>
              </Col>
              <Col style={{ paddingRight: "170px" }}>
                <Link to="/wishlist">
                  <Button
                    className="bookBtn"
                    variant="light"
                    style={{ fontWeight: "bold" }}
                  >
                    <Card.Text>Add to Wishlist</Card.Text>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AccomodationItem;
