import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaWindows } from "react-icons/fa";
import "../css/Createlisting.css";

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

  const submitHandler = (event) => {
        event.preventDefault();
        const data = {
            name: placename,
            email: "psp4545@gmail.com",
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
    <form
      className="form-group"
      action="/action_page.php"
      onSubmit={submitHandler}
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
          />
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
          />
        </div>
      </div>
      <div className="form">
        <div className="col-sm-10">
          <label className="control-label col-sm-2" htmlFor="guestSize">
            Guest Size{" "}
          </label>
          <input
            type="text"
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
            type="text"
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
            type="text"
            className="form-control"
            id="beds"
            placeholder="Enter number of beds"
            onChange={bedsChangeHandler}
          />
        </div>
      </div>
      <div className="form">
        <div className="col-sm-10">
          <label className="control-label col-sm-2" htmlFor="bath">
            Baths{" "}
          </label>
          <input
            type="text"
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
            type="text"
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
            type="text"
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
            type="text"
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
          />
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
  );
};

export default Createlisting;
