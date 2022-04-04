import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLocationDot,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./Booking.css";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import moment from "moment";
import NavBar from "../../components/NavBar";
import Navheader from "../../components/Navheader";
import { da } from "date-fns/locale";

const Booking = () => {
  let navigate = useNavigate();
  let location = useLocation();
  console.log("location", location);
  const { bookingInfo, room } = location.state;
  console.log("ROOM : ", room);

  const [numberOfNights, setNumberOfNights] = useState();
  const [totalCharge, setTotalCharge] = useState();

  const calculateNumberOfNights = () => {
    // var checkIn = new Date(bookingInfo.checkInDate);
    var checkIn = moment(bookingInfo.checkInDate);
    // var checkOut = new Date(bookingInfo.checkOutDate);
    var checkOut = moment(bookingInfo.checkOutDate);
    // var diffInTime = checkOut.getDate() - checkIn.getDate();
    var diffInTime = checkOut.diff(checkIn, "days");
    console.log("TIme DIFF ", diffInTime);
    setNumberOfNights(diffInTime);
    let totalCharge =
      diffInTime * room.perNightCharges + room.serviceFee + room.cleaningFee;
    console.log(totalCharge);
    setTotalCharge(totalCharge);
  };
  useEffect(() => {
    calculateNumberOfNights();
  }, []);

  const updateRoom = () => {
    var bookedDates = room.bookedDates;
    var startDate = moment(bookingInfo.checkInDate);
    var endDate = moment(bookingInfo.checkOutDate);
    var now = startDate.clone();

    while (now.isSameOrBefore(endDate)) {
      bookedDates.push(now.format("M/D/YYYY"));
      now.add(1, "days");
    }
    console.log("Dates", bookedDates);

    let url =
      "https://staycationbackendapp.herokuapp.com/hostuser/editlisting/" +
      room._id;
    let method = "PUT";

    fetch(url, {
      method: method,
      body: JSON.stringify({ ...room, bookedDates }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Editing Item failed!");
        }
        return res.json();
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const confirmBooking = () => {
    let url =
      "https://staycationbackendapp.herokuapp.com/booking/createbooking";
    let method = "POST";
    updateRoom();

    fetch(url, {
      method: method,
      mode: "cors",
      body: JSON.stringify({
        roomId: room._id,
        userEmail: "dummy",
        hostName: room.hostName,
        numberOfGuests: bookingInfo.numberOfGuests,
        checkInDate: bookingInfo.checkInDate.toLocaleDateString(),
        checkOutDate: bookingInfo.checkOutDate.toLocaleDateString(),
        perNightCharges: room.perNightCharges,
        cleaningFee: room.cleaningFee,
        serviceFee: room.serviceFee,
        totalPrice: totalCharge,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log("Respnse from then : ", res);
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Creating Booking failed!");
        }
        return res.json();
      })
      .then((res) => {
        console.log("res", res);
        alert("Booking confirmed!");
        navigate(-1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [creditCardNumber, setCreditCardNumber] = useState();
  const [cvv, setCvv] = useState();
  const [expiryDate, setExpiryDate] = useState();
  return (
    <>
      {localStorage.userEmail!=null && <Navheader />}
      {localStorage.userEmail==null && <NavBar />}
      <div className="title">
        <div className="title-div">
          <button
            className="icon-button"
            onClick={() => {
              navigate("/");
            }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faAngleLeft} />
            </span>
          </button>
          <div className="title-div__item">Request to Book</div>
        </div>
      </div>
      <div className="booking-wrapper">
        <div className="booking-div">
          <div className="booking-div__item">
            <div className="booking-div__item-title">{room.name}</div>
            <div className="booking-div__item-content">
              <div>
                <FontAwesomeIcon icon={faHeart} />
                <div className="rating">
                  {room.rating} ({room.reviews})
                </div>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
                <div className="hostname">By {room.hostName}</div>
              </div>
            </div>
          </div>
          <div className="booking-div__item">
            <div className="booking-div__item-title">Your Trip Details</div>
            <div className="booking-div__item-content">
              <div className=" bold">Check In Date</div>
              <div className="right">
                {bookingInfo.checkInDate.toLocaleDateString()}
              </div>
            </div>
            <div className="booking-div__item-content">
              <div className=" bold">Check Out Date</div>
              <div className="right">
                {bookingInfo.checkOutDate.toLocaleDateString()}
              </div>
            </div>
            <div className="booking-div__item-content">
              <div className=" bold">Guests</div>
              <div className="right">{bookingInfo.numberOfGuests}</div>
            </div>
          </div>
          <div className="booking-div__item">
            <div className="booking-div__item-title">Price Details</div>
            <div>
              <div className="booking-div__item-content">
                <div className="">
                  ${room.perNightCharges} x {numberOfNights} night
                </div>
                <div className="right">
                  ${room.perNightCharges * numberOfNights}
                </div>
              </div>
              <div className="booking-div__item-content">
                <div className="">Cleaning Fee</div>
                <div className="right">${room.cleaningFee}</div>
              </div>
              <div className="booking-div__item-content">
                <div className="">Service Fee</div>
                <div className="right">${room.serviceFee}</div>
              </div>
              <div className="booking-div__item-content bold">
                <div className="">Total(CAD)</div>
                <div className="right">${totalCharge}</div>
              </div>
            </div>
          </div>
          <div className="payments-wrapper">
            <p style={{ fontSize: "25px", fontWeight: "600" }}>Pay with</p>
            {/* <input className="in" placeholder="Credit/debit Card"></input> */}
            <input
              className="in"
              placeholder="Card Number"
              value={creditCardNumber}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => {
                if (e.target.value.length <= 16) {
                  setCreditCardNumber(e.target.value);
                }
              }}
            ></input>
            <div className="number" style={{ display: "flex" }}>
              <input
                className="in half"
                placeholder="Expiration"
                value={expiryDate}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  setExpiryDate(e.target.value);
                }}
              >
                {/* {RegExp("^(0[1-9]|1[0-2])/?([0-9]{2})$").test(expiryDate) ? (
                  <></>
                ) : (
                  <>invalid date</>
                )} */}
              </input>
              <input
                className="in half"
                placeholder="CVV"
                value={cvv}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {
                  if (e.target.value.length <= 3) {
                    setCvv(e.target.value);
                  }
                }}
              ></input>
            </div>
            <input className="in" placeholder="Postal Code"></input>
          </div>
          <div className="booking-div__item-title booking-div__item-content">
            <button
              className="booking-button"
              onClick={() => {
                navigate("/");
              }}
            >
              Back
            </button>
            <button
              className="booking-button"
              onClick={() => {
                if (localStorage.getItem("userEmail") == null)
                  alert("Please LOGIN to confirm your booking!!");
                else confirmBooking();
                // navigate("/payment");
              }}
            >
              Request to Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Booking;
