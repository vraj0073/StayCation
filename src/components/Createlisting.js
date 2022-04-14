/*
Author: Prarthana Parmar
Description: This component creates a new hosting for the host user.
*/
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../css/Createlisting.css";
import Navheader from "./Navheader";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Createlisting = () => {

  const navigate = useNavigate();

  const [placename, setName] = useState("");
  const [hostName, setHost] = useState("");
  const [guestSize, setguest] = useState("");
  const [bedroom, setbedroom] = useState("");
  const [beds, setbeds] = useState("");
  const [bath, setbath] = useState("");
  const [perNightCharges, setCharges] = useState("");
  const [cleaningFee, setCleaningFee] = useState("");
  const [serviceFee, setServiceFee] = useState("");
  const [description, setdescription] = useState("");
  const [feature, setFeature] = useState("");
  const [img, setImg] = useState("https://e8rbh6por3n.exactdn.com/sites/uploads/2020/05/villa-la-gi-thumbnail-770x515.jpg?strip=all&lossy=1&ssl=1");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

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
    if (
      nameError == null &&
      hostError == null &&
      descriptionError == null &&
      featureError == null &&
      typeError == null &&
      locationError == null &&
      stateError == null &&
      countryError == null
    ) {
      submitHandler();
    }
  };

  const submitHandler = () => {
    const data = {
      name: placename,
      email: localStorage.userEmail,
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
      "https://staycationbackendapp.herokuapp.com/hostuser/createlisting";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log("Post Successful", data);
      })
      .catch((err) => {
        throw err;
      });
    alert("Added Listing");
    navigate("/viewlisting");
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

  return (
    <div>
      <header>
        <Navheader />
      </header>
      <Sidebar></Sidebar>
      <p className="title-label">Create Listing</p>
      <form
        onSubmit={(event) => {
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
        <div className="form">
          <div className="col-md-10" id="form-el">
            <label className="control-label" htmlFor="placename">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="input"
              value={placename}
              placeholder="Enter Name for your place"
              onChange={nameChangeHandler}
              onBlur={validateName}
            />
            {nameError && <p>{nameError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="hostName">
              Hosted By{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="Enter your name"
              onChange={hostnameChangeHandler}
              onBlur={validateHostName}
            />
            {hostError && <p>{hostError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="guestSize">
              Guest Size{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="input"
              placeholder="Enter guest size"
              onChange={guestSizeChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="placename">
              Bedrooms
            </label>
            <input
              type="number"
              className="form-control"
              id="input"
              value={bedroom}
              placeholder="Enter number of bedrooms"
              onChange={bedroomChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="beds">
              Beds{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="input"
              placeholder="Enter number of beds"
              onChange={bedsChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="bath">
              Baths{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="input"
              placeholder="Enter number of baths"
              onChange={bathChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="perNightCharges">
              Price per day{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="input"
              placeholder="Enter price per day"
              onChange={priceChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="cleaningFee">
              Cleaning Fee{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="input"
              placeholder="Enter Cleaning Fee"
              onChange={cleaningFeeChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="serviceFee">
              Service Fee{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="input"
              placeholder="Enter Service Fee"
              onChange={serviceFeeChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="features">
              Facilities{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="Enter facilities provided"
              onChange={featureChangeHandler}
              onBlur={validateFeature}
            />
            {featureError && <p>{featureError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="type">
              Type of Stay{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="Long-term or Short-term"
              onChange={typeChangeHandler}
              onBlur={validateType}
            />
            {typeError && <p>{typeError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="location">
              City{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="Enter the city"
              onChange={locationChangeHandler}
              onBlur={validateLocation}
            />
            {locationError && <p>{locationError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="state">
              Province{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="Enter the province"
              onChange={stateChangeHandler}
              onBlur={validateState}
            />
            {stateError && <p>{stateError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="country">
              Country{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="input"
              placeholder="Enter the country"
              onChange={countryChangeHandler}
              onBlur={validateCountry}
            />
            {countryError && <p>{countryError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <label className="control-label col-sm-2" htmlFor="description">
              Describe your place{" "}
            </label>
            <input
              type="textbox"
              className="form-control"
              id="input"
              placeholder="Description"
              onChange={descriptionChangeHandler}
              onBlur={validateDescription}
            />
            {descriptionError && <p>{descriptionError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10" id="form-el">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Createlisting;
