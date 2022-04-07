/*
Author: Prarthana Parmar
Description: This component creates one Room component to display.
*/

import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/RoomItem.css";

const RoomItem = (props) => {
  const [placename, setName] = useState(props.name || "");
  const [email, setEmail] = useState(localStorage.userEmail || "");
  const [hostName, setHost] = useState(props.hostName || "");
  const [guestSize, setguest] = useState(props.guestSize || "");
  const [bedroom, setbedroom] = useState(props.bedroom || "");
  const [beds, setbeds] = useState(props.beds || "");
  const [bath, setbath] = useState(props.bath || "");
  const [perNightCharges, setCharges] = useState(props.perNightCharges || "");
  const [cleaningFee, setCleaningFee] = useState(props.cleaningFee || "");
  const [serviceFee, setServiceFee] = useState(props.serviceFee || "");
  const [description, setdescription] = useState(props.description || "");
  const [feature, setFeature] = useState(props.feature || "");
  const [img, setImg] = useState("https://e8rbh6por3n.exactdn.com/sites/uploads/2020/05/villa-la-gi-thumbnail-770x515.jpg?strip=all&lossy=1&ssl=1");
  const [type, setType] = useState(props.type || "");
  const [location, setLocation] = useState(props.location || "");
  const [state, setState] = useState(props.state || "");
  const [country, setCountry] = useState(props.country || "");

  const [isView, setIsView] = useState(true);

  let navigate = useNavigate();

  const onEditHandler = () => {
    setIsView(false);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const hostnameChangeHandler = (event) => {
    setHost(event.target.value);
  };
  const guestSizeChangeHandler = (event) => {
    setguest(event.target.value);
  };
  const bedroomChangeHandler = (event) => {
    setbedroom(event.target.value);
  };
  const bedsChangeHandler = (event) => {
    setbeds(event.target.value);
  };
  const bathChangeHandler = (event) => {
    setbath(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setCharges(event.target.value);
  };
  const cleaningFeeChangeHandler = (event) => {
    setCleaningFee(event.target.value);
  };
  const serviceFeeChangeHandler = (event) => {
    setServiceFee(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setdescription(event.target.value);
  };

  const featureChangeHandler = (event) => {
    setFeature(event.target.value);
  };

  const imgChangeHandler = (event) => {
    setImg(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  };

  const locationChangeHandler = (event) => {
    setLocation(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setState(event.target.value);
  };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
  };

  const [nameError, setNameError] = useState();
  const [hostError, setHostError] = useState();
  const [descriptionError, setDescriptionError] = useState();
  const [featureError, setFeatureError] = useState();
  const [typeError, setTypeError] = useState();
  const [locationError, setLocationError] = useState();
  const [stateError, setStateError] = useState();
  const [countryError, setCountryError] = useState();

  const validateName = () => {
    let error;
    if (!placename.trim()) {
      error = "Please enter name of the place!";
    } else if (placename.length < 5) {
      error = "Name should be at least 5 characters!";
    } else {
      error = null;
    }
    setNameError(error);
  };

  const validateHostName = () => {
    let error;
    if (!hostName.trim()) {
      error = "Please enter your name!";
    } else if (hostName.length < 3) {
      error = "Host name should be at least 3 characters!";
    } else {
      error = null;
    }
    setHostError(error);
  };

  const validateDescription = () => {
    let error;
    if (!description.trim()) {
      error = "Please enter description for your place!";
    } else if (description.length < 10) {
      error = "Description should be at least 10 characters!";
    } else {
      error = null;
    }
    setDescriptionError(error);
  };

  const validateFeature = () => {
    let error;
    if (!feature.trim()) {
      error = "Please enter facilities for your place!";
    } else {
      error = null;
    }
    setFeatureError(error);
  };

  const validateType = () => {
    let error;
    if (!type.trim()) {
      error = "Please enter the type of stay!";
    } else {
      error = null;
    }
    setTypeError(error);
  };

  const validateLocation = () => {
    let error;
    if (!location.trim()) {
      error = "Please enter the city of stay!";
    } else {
      error = null;
    }
    setLocationError(error);
  };

  const validateState = () => {
    let error;
    if (!state.trim()) {
      error = "Please enter the province of stay!";
    } else {
      error = null;
    }
    setStateError(error);
  };

  const validateCountry = () => {
    let error;
    if (!country.trim()) {
      error = "Please enter the country of stay!";
    } else {
      error = null;
    }
    setCountryError(error);
  };

  const checkErrors = () => {
    if (nameError == null && hostError == null && descriptionError == null && featureError == null && typeError == null 
      && locationError == null && stateError == null && countryError == null) {
      onSubmitHandler();
    }
  };
  
  const onSubmitHandler = (event) => {
    const roomData = {
      _id: props.id,
      name: placename,
      email: email,
      hostName: hostName,
      guestSize: guestSize,
      bedroom: bedroom,
      beds: beds,
      bath: bath,
      perNightCharges: perNightCharges,
      cleaningFee: cleaningFee,
      serviceFee: serviceFee,
      description: description,
      feature: feature,
      img: img,
      type: type,
      location: location,
      state: state,
      country: country,
    };

    const url =
      "http://localhost:8080/hostuser/editlisting/" +
      props.id;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(roomData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        setIsView(true);
        console.log("Post Successful", data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    alert("Room has been updated!!");
    props.onChange();
  };

  const deleteHandler = () => {
    const url =
      "https://staycationbackendapp.herokuapp.com/hostuser/deletelisting/" +
      props.id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log("Delete Successful", data);
      })
      .catch((err) => {
        throw err;
      });
    alert("Room Deleted!");
    props.onChange();
  };

  return (
    <div className="user-card" id="user-card">
      <Card className="card" id = "card">
        <Card.Body  id="cardbox">
          {isView ? (
            <Card.Title className="title">Name: {props.name}</Card.Title>
          ) : (
            <div>
              <Card.Title className="title">
                Name:{" "}
                <input
                  className="col-sm-3"
                  value={placename}
                  onChange={nameChangeHandler}
                  onBlur={validateName}
                />
                {nameError && <p>{nameError}</p>}
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">
              {" "}
              Hosted By: {props.hostName}{" "}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Hosted By:{" "}
                <input
                  className="col-sm-3"
                  value={hostName}
                  onChange={hostnameChangeHandler}
                  onBlur={validateHostName}
                />
                {hostError && <p>{hostError}</p>}
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">
              Guest Size: {props.guestSize}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Guest Size:{" "}
                <input
                  className="col-sm-3"
                  value={guestSize}
                  onChange={guestSizeChangeHandler}
                />
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">Bedrooms: {props.bedroom}</Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Bedrooms:{" "}
                <input
                  className="col-sm-3"
                  value={bedroom}
                  onChange={bedroomChangeHandler}
                />
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">Beds: {props.beds}</Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Beds:{" "}
                <input
                  className="col-sm-3"
                  value={beds}
                  onChange={bedsChangeHandler}
                />
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">Baths: {props.bath}</Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Baths:{" "}
                <input
                  className="col-sm-3"
                  value={bath}
                  onChange={bathChangeHandler}
                />
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">
              Charges: {props.perNightCharges}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Charges:{" "}
                <input
                  className="col-sm-3"
                  value={perNightCharges}
                  onChange={priceChangeHandler}
                />
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">
              Cleaning Fee: {props.cleaningFee}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Cleaning Fee:{" "}
                <input
                  className="col-sm-3"
                  value={cleaningFee}
                  onChange={cleaningFeeChangeHandler}
                />
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">
              Service Fee: {props.serviceFee}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Service Fee:{" "}
                <input
                  className="col-sm-3"
                  value={serviceFee}
                  onChange={serviceFeeChangeHandler}
                />
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">
              Facilities: {props.feature}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Facilities:{" "}
                <input
                  className="col-sm-3"
                  value={feature}
                  onChange={featureChangeHandler}
                  onBlur={validateFeature}
                />
                {featureError && <p>{featureError}</p>}
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">
              Type of Stay: {props.type}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Type of Stay:{" "}
                <input
                  className="col-sm-3"
                  value={type}
                  placeholder="long-term or short-term"
                  onChange={typeChangeHandler}
                  onBlur={validateType}
                />
                {typeError && <p>{typeError}</p>}
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">City: {props.location}</Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                City:{" "}
                <input
                  className="col-sm-3"
                  value={location}
                  onChange={locationChangeHandler}
                  onBlur={validateLocation}
                />
                {locationError && <p>{locationError}</p>}
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">Province: {props.state}</Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Province:{" "}
                <input
                  className="col-sm-3"
                  value={state}
                  onChange={stateChangeHandler}
                  onBlur={validateState}
                />
                {stateError && <p>{stateError}</p>}
              </Card.Title>
            </div>
          )}
          {isView ? (
            <Card.Text className="content">Country: {props.country}</Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Country:{" "}
                <input
                  className="col-sm-3"
                  value={country}
                  onChange={countryChangeHandler}
                  onBlur={validateCountry}
                />
                {countryError && <p>{countryError}</p>}
              </Card.Title>
            </div>
          )}

          {isView ? (
            <Card.Text className="content">
              Description: {props.description}
            </Card.Text>
          ) : (
            <div>
              <Card.Title className="content">
                Description:{" "}
                <input
                  className="col-sm-3"
                  value={description}
                  onChange={descriptionChangeHandler}
                  onBlur={validateDescription}
                />
                {descriptionError && <p>{descriptionError}</p>}
              </Card.Title>
            </div>
          )}
          <div id="buttn">
            {isView ? (
              <Button type="submit" className="button" onClick={onEditHandler}>
                Edit
              </Button>
            ) : (
              <Button
                type="submit"
                className="button"
                onClick={(event) => {
                  event.preventDefault();
                  if (
                    placename.length === 0 ||
                    hostName.length === 0 ||
                    beds.length === 0 ||
                    bedroom.length === 0 ||
                    bath.length === 0 ||
                    perNightCharges.length === 0 ||
                    cleaningFee.length === 0 ||
                    serviceFee.length === 0 ||
                    description.length === 0 ||
                    feature.length === 0 ||
                    type.length === 0 ||
                    location.length === 0 ||
                    state.length === 0 ||
                    country.length === 0
                  ) {
                    alert("One or more fields seem to be empty!");
                  } else {
                    checkErrors();
                  }
                }}
              >
                Submit
              </Button>
            )}
          </div>
          <div id="buttn">
            <Button type="submit" className="button" onClick={deleteHandler}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RoomItem;
