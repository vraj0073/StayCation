/*
Author: Prarthana Parmar
Description: This component creates a new hosting for the host user.
*/
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../css/Createlisting.css";
import Navheader from "./Navheader";
import Sidebar from "./Sidebar";

const Createlisting = () => {
  const [placename, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hostName, setHost] = useState("");
  const [guestSize, setguest] = useState("");
  const [bedroom, setbedroom] = useState("");
  const [beds, setbeds] = useState("");
  const [bath, setbath] = useState("");
  const [perNightCharges, setCharges] = useState("");
  const [cleaningFee, setCleaningFee] = useState("");
  const [serviceFee, setServiceFee] = useState("");
  const [description, setdescription] = useState("");

  const [nameError, setNameError] = useState();
  const [hostError, setHostError] = useState();
  const [descriptionError, setDescriptionError] = useState();

  const validateName = () =>{
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

  const validateHostName = () =>{
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
  }

  const checkErrors = () => {
    if(nameError == null &&
      hostError == null){
        submitHandler();
      }
  }

  const submitHandler = (event) => {
        const data = {
            name: placename,
            email: localStorage.userEmail,
            hostName: hostName,
            guestSize: guestSize,
            bedroom : bedroom,
            beds: beds,
            bath: bath,
            perNightCharges: perNightCharges,
            cleaningFee: cleaningFee,
            serviceFee: serviceFee,
            description: description,
        };
    console.log(data);
    const url = "https://staycationbackendapp.herokuapp.com/hostuser/createlisting";
        fetch(url, {
          method: "POST",
          body:JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((data) => {
            console.log("Post Successful", data);
          })
          .catch((err) => {
            console.log(err);
            throw err;
          });
          alert("Added Listing")
          window.location = "http://localhost:3000/viewlisting";
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
  const bedroomChangeHandler = (event) =>{
      setbedroom(event.target.value);
  }
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
  
  return (
    <div>
      <header>
        <Navheader/>
      </header>
      <Sidebar></Sidebar>
      <p className = "title">Create Listing</p>
      <form
        className="form-group"
        onSubmit={(event) => {
          event.preventDefault();
          if(placename.length === 0 || hostName.length === 0 || beds.length === 0 || bedroom.length === 0 || bath.length === 0 || perNightCharges.length === 0 || cleaningFee.length === 0 || serviceFee.length === 0 || description.length === 0 ){
            alert("One or more fields seem to be empty!")
          }else{
            checkErrors();
          }
        }}
      >
        <div className="form">
          <div className="col-md-10">
            <label className="control-label col-sm-2" htmlFor="placename">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="placename"
              value={placename}
              placeholder="Enter Name"
              onChange={nameChangeHandler}
              onBlur={validateName}
            />
            {nameError && <p>{nameError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10">
            <label className="control-label col-sm-2" htmlFor="hostName">
              Hosted By{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="hostName"
              placeholder="Enter your name"
              onChange={hostnameChangeHandler}
              onBlur={validateHostName}
            />
            {hostError && <p>{hostError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10">
            <label className="control-label col-sm-2" htmlFor="guestSize">
              Guest Size{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="guestSize"
              placeholder="Enter guest size"
              onChange={guestSizeChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-md-10">
            <label className="control-label col-sm-2" htmlFor="placename">
              Bedrooms
            </label>
            <input
              type="number"
              className="form-control"
              id="bedroom"
              value={bedroom}
              placeholder="Enter Bedrooms"
              onChange={bedroomChangeHandler}
            />
          </div>
          </div>
        <div className="form">
          <div className="col-sm-10">
            <label className="control-label col-sm-2" htmlFor="beds">
              Beds{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="beds"
              placeholder="Enter number of beds"
              onChange={bedsChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-lg-10">
            <label className="control-label col-sm-2" htmlFor="bath">
              Baths{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="bath"
              placeholder="Enter number os baths"
              onChange={bathChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10">
            <label className="control-label col-sm-2" htmlFor="perNightCharges">
              Price per day{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="perNightCharges"
              placeholder="Enter yprice for a day"
              onChange={priceChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10">
            <label className="control-label col-sm-2" htmlFor="cleaningFee">
              Cleaning Fee{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="cleaningFee"
              placeholder="Enter Cleaning Fee"
              onChange={cleaningFeeChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10">
            <label className="control-label col-sm-2" htmlFor="serviceFee">
              Service Fee{" "}
            </label>
            <input
              type="number"
              className="form-control"
              id="serviceFee"
              placeholder="Enter Service Fee"
              onChange={serviceFeeChangeHandler}
            />
          </div>
        </div>
        <div className="form">
          <div className="col-sm-10">
            <label className="control-label col-sm-2" htmlFor="description">
              Describe your place{" "}
            </label>
            <input
              type="textbox"
              className="form-control"
              id="description"
              placeholder="Description"
              onChange={descriptionChangeHandler}
              onBlur={validateDescription}
            />
            {descriptionError && <p>{descriptionError}</p>}
          </div>
        </div>
        <div className="form">
          <div className="col-sm-offset-2 col-sm-10">
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
