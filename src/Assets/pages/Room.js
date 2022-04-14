/*
Author: Heenal Sapovadia
Description: This component represents the detailed view for a single rental property
*/
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { StarIcon, ShieldCheckIcon, HandIcon } from "@heroicons/react/solid";
import "../../css/Room.css";
import {
  HomeIcon,
  LocationMarkerIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "moment";
import NavBar from "../../components/NavBar";
import Navheader from "../../components/Navheader";

const Room = () => {
  let navigate = useNavigate();
  const location = useLocation();
  console.log("location : ", location.state.room);
  console.log("navigate:", navigate);
  const [room, setRoom] = useState({});
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [blockedDates, setBlockedDates] = useState([]);
  const [guestCount, setGuestCount] = useState(5);
  const [focusedInput, setFocusedInput] = useState();
  const [bookingInfo, setBookingInfo] = useState({
    checkInDate: "03/25/2022",
    checkOutDate: "03/27/2022",
    numberOfGuests: 1,
  });
  const [calenderFloaterPos, setCalenderFloaterPos] = useState(0);
  const [calenderLeft, setCalenderLeft] = useState(0);

  useEffect(() => {
    const calenderFloater = document.querySelector("#calender-floater");

    let cfPos =
      calenderFloater.getBoundingClientRect().top + window.pageYOffset - 100;
    setCalenderLeft(calenderFloater.getBoundingClientRect().left);
    setCalenderFloaterPos(cfPos);
  }, []);

  useEffect(() => {
    setRoom(location.state.room);
    setBlockedDates(location.state.room.bookedDates);
  }, [location]);

  console.log("calendar left", calenderLeft);

  const onscrollCalender = () => {
    const calenderFloater = document.querySelector("#calender-floater");
    if (calenderFloater === null) return;
    if (window.pageYOffset > calenderFloaterPos) {
      calenderFloater.style.position = "sticky";
      calenderFloater.style.top = "100px";
    } else {
      calenderFloater.style.position = "relative";
      calenderFloater.style.top = "initial";
    }
  };
  window.addEventListener("scroll", onscrollCalender);

  useEffect(() => {
    console.log(checkInDate, checkOutDate);
    if (checkInDate) console.log("checkin :: ", checkInDate._d);
  }, [checkInDate, checkOutDate]);

  const onConfirm = () => {
    setBookingInfo({
      numberOfGuests: guestCount,
      checkInDate: checkInDate._d,
      checkOutDate: checkOutDate._d,
    });
  };

  // Blocking Calendar Dates for already booked ones
  let Dates = new Set();
  blockedDates.map((date) => Dates.add(date));

  const isDayBlocked = (momentDate) => {
    if (Dates.has(momentDate.format("L"))) return true;
    return false;
  };

  return (
    <>
      {localStorage.userEmail != null && <Navheader />}
      {localStorage.userEmail == null && <NavBar />}

      <div className="room-wrapper">
        <div className="room-title">
          <div className="room-title__header">{room.name}</div>
          <div className="room-title-footer">
            <div className="room-title-footer-ratings">
              <span className="first-span">
                <StarIcon className="pink" />
                <span>4.96</span>
              </span>
              <span className="review-count">179 reviews</span>
              <span className="grey">Superhost</span>
              <span className="room-location">
                {room.location}, {room.state}, {room.country}
              </span>
            </div>
          </div>
          <div className="room-title__details"></div>
        </div>
        <div className="room-photos-wrapper" id="gallery">
          {/* Halfves */}
          <div
            className="room-photo-main"
            style={{ display:"flex", alignItems:"center", justifyContent:"center" }}
          >
            <img
              src={room.img}
              style={{ margin: "18px auto", marginLeft:"auto", marginRight:"auto",borderRadius:"10px" }}
            ></img>
          </div>
        </div>
        <div className="room-info-wrapper">
          <div id="calender-floater" className="room-calender-floater">
            <p
              className="room-calender-floater-title"
              style={{
                fontSize: "25px",
                margin: 0,
                marginBottom: "9px",
                fontWeight: 500,
              }}
            >
              Add dates for prices
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: 500,
                marginBottom: "15px",
              }}
            >
              <span
                className="first-span"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "5px",
                }}
              >
                <StarIcon className="pink" />
                <span>4.96</span>
              </span>
              <span className="review-count">179 reviews</span>
            </div>
            <DateRangePicker
              startDate={checkInDate}
              startDateId="your_unique_start_date_id" 
              endDate={checkOutDate}
              endDateId="your_unique_end_date_id"
              onDatesChange={({ startDate, endDate }) => {
                setCheckInDate(startDate);
                setCheckOutDate(endDate);
              }} 
              focusedInput={focusedInput}
              onFocusChange={(focusedIn) => setFocusedInput(focusedIn)} //
              horizontalMargin={25}
              isDayBlocked={isDayBlocked}
            />
            <input
              className="calendar-floater-guests"
              placeholder="Guests"
              type={"text"}
              pattern="[0-9]*"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(event) => {
                setGuestCount(event.target.value);
              }}
            ></input>
            <button
              className="room-calender-floater-btn"
              style={{ marginTop: "20px" }}
              onClick={() => {
                onConfirm();
                var booking = {
                  numberOfGuests: guestCount,
                  checkInDate: checkInDate._d,
                  checkOutDate: checkOutDate._d,
                };
                navigate("/book", { state: { bookingInfo: booking, room } });
              }}
            >
              {" "}
              Check Availabilty
            </button>
          </div>
          <div className="room-host-info">
            <div className="room-host-title">
              <p className="room-host-title-main">
                Entire rental unit hosted by {room.hostName}
              </p>
              <p className="room-host-title-sub">
                Guests:{room.guestSize}, Beds:{room.bedroom}, Baths:{room.bath}
              </p>
            </div>
            <div className="room-host-features">
              <div className="room-host-feature">
                <div className="icon-div">
                  <HomeIcon className="feature-icon" />
                </div>
                <div className="feature">
                  <p>Self check-in</p>
                  <p>Check yourself in with the lockbox.</p>
                </div>
              </div>
              <div className="room-host-feature">
                <div className="icon-div">
                  <SparklesIcon className="feature-icon" />
                </div>
                <div className="feature">
                  <p>{room.hostName} is a Superhost</p>
                  <p>
                    Superhosts are experienced, highly rated hosts who are
                    committed to providing great stays for guests.
                  </p>
                </div>
              </div>
              <div className="room-host-feature">
                <div className="icon-div">
                  <LocationMarkerIcon className="feature-icon" />
                </div>
                <div className="feature">
                  <p>Great location</p>
                  <p>95% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="host-info">
            <div className="host-info-title">
              <div className="host-dp">
                <img src="/room/kate.webp" />
              </div>
              <div className="host-name">
                <p>Hosted by {room.hostName}</p>
                <p>Joined in February 2019</p>
              </div>
            </div>
            <div className="host-achievements">
              <div className="h-achievement">
                <StarIcon className="pink" />
                <p>179 reviews</p>
              </div>
              <div className="h-achievement">
                <ShieldCheckIcon className="pink" />
                <p>Identity verified</p>
              </div>
              <div className="h-achievement">
                <SparklesIcon className="pink" />
                <p>Superhost</p>
              </div>
              <div className="h-achievement">
                <HandIcon className="pink" />
                <p>Airbnb.org supporter</p>
              </div>
            </div>
            <div className="host-post" style={{textAlign:"justify"}}>
              {room.description}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
