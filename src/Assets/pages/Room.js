import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { StarIcon, ShieldCheckIcon, HandIcon } from "@heroicons/react/solid";
import "./Room.css";
import { UploadIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/outline";
import {
  HomeIcon,
  LocationMarkerIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "moment";
import {
  Card,
  Container,
  Form,
  FormControl,
  Button,
  ButtonGroup,
  Col,
  Row,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
const Room = () => {
  console.log("ROOM Comp.");
  // console.log(room);
  let navigate = useNavigate();
  const location = useLocation();
  console.log("location : ", location.state.room);
  console.log("navigate:", navigate);
  const [room, setRoom] = useState({});
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [blockedDates, setBlockedDates] = useState([
    "04/04/2022",
    "04/05/2022",
    "04/20/2022",
    "04/21/2022",
  ]);
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
    // console.log(calenderFloater.style.left);
  };
  window.addEventListener("scroll", onscrollCalender);

  useEffect(() => {
    console.log(checkInDate, checkOutDate);
    if (checkInDate) console.log("checkin :: ", checkInDate._d);
  }, [checkInDate, checkOutDate]);

  const handleSelect = (ranges) => {
    console.log(ranges);
    setSelectionRange(ranges);
  };
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const onConfirm = () => {
    setBookingInfo({
      numberOfGuests: guestCount,
      checkInDate: checkInDate._d,
      checkOutDate: checkOutDate._d,
    });
  };

  const Dates = new Set();
  Dates.add("03/29/2022");
  Dates.add("03/28/2022");

  const isDayBlocked = (momentDate) => {
    if (Dates.has(momentDate.format("L"))) return true;
    return false;
  };
  const [saved, setSaved] = useState(false);

  return (
    <>
    <div className="col">
          <div className="header">
            <div className="header-items">
              <button>S</button>taycation
              <Navbar collapseOnSelect expand="lg">
                <Container className="d-flex" id="homenavigation">
                  <Navbar.Brand href="#home" className="header-navbar">
                    Home
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="/blogs" className="header-content">
                        Blogs
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        Search
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        About
                      </Nav.Link>
                      <Nav.Link href="#pricing" className="header-content">
                        Contact
                      </Nav.Link>
                      <NavDropdown
                        title="Login"
                        id="title"
                        className="header-content"
                      >
                        <NavDropdown.Item href="Register">
                          New User
                        </NavDropdown.Item>
                        <NavDropdown.Item href="Login">
                          Existing User
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
    <div className="room-wrapper">
      <div className="room-title">
        <div className="room-title__header">{room.name}</div>
        <div className="room-title-footer">
          {/* Ratings */}
          <div className="room-title-footer-ratings">
            <span className="first-span">
              <StarIcon className="pink" />
              <span>4.96</span>
            </span>
            <span className="review-count">179 reviews</span>
            <span className="grey">Superhost</span>
            <span className="room-location">
              Bridgewater, Nova Scotia, Canada
            </span>
          </div>
          {/* Share and like */}
          <div className="room-title-footer-share-save">
            <span className="share">
              <span>
                <UploadIcon className="icon" />
              </span>
              <span>Share</span>
            </span>
            <span
              className="save"
              // {/* className={saved ? "pink" : ""} */}
              onClick={(e) => {
                e.preventDefault();
                setSaved(!saved);
                console.log(saved);
              }}
            >
              <span>
                <HeartIcon className={`icon`} />
              </span>
              <span>Save</span>
            </span>
          </div>
        </div>
        <div className="room-title__details"></div>
      </div>
      <div className="room-photos-wrapper" id="gallery">
        {/* Halfves */}
        <div className="room-photo-main"></div>
        {/* <div className="room-photo-four">
          
          <div className="row-1">
            <div className="r1-p1"></div>
            <div className="r1-p2"></div>
          </div>
          <div className="row-2">
            <div className="r2-p1"></div>
            <div className="r2-p2"></div>
          </div>
        </div> */}
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
            startDate={checkInDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={checkOutDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => {
              setCheckInDate(startDate);
              setCheckOutDate(endDate);
              console.log("checkin", checkInDate);
            }} // PropTypes.func.isRequired,
            focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={(focusedIn) => setFocusedInput(focusedIn)} //
            horizontalMargin={25}
            isDayBlocked={isDayBlocked}
          />
          {/* <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> */}
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
            <p className="room-host-title-sub">4 guests1 bedroom2 beds1 bath</p>
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
                <p>Kate is a Superhost</p>
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
        <div className="room-reviews">
          <div className="room-reviews-title">
            <StarIcon className="pink" />
            <p>4.96 | 179 reviews</p>
          </div>
          <div className="room-review">
            <div className="rr-title">
              <div className="guest-pic">
                <img src="/room/xavier.webp" />
              </div>
              <div className="guest-name">
                <p>Xavier</p>
                <p>March 2022</p>
              </div>
            </div>
            <div className="rr-comment">
              Kate hosted my team with open arms! They couldn't say enough about
              the place! 5 star stay.
            </div>
          </div>
          <div className="room-review">
            <div className="rr-title">
              <div className="guest-pic">
                <img src="/room/jeremy.webp" />
              </div>
              <div className="guest-name">
                <p>Jeremy And Avi</p>
                <p>February 2022</p>
              </div>
            </div>
            <div className="rr-comment">
              Breeze From LaHave was a great place to stay for a week! Located
              in Bridgewater, it was very central to all of the activities we
              did along the South Shore of Nova Scotia.
            </div>
          </div>
        </div>
        <div className="host-info">
          <div className="host-info-title">
            <div className="host-dp">
              <img src="/room/kate.webp" />
            </div>
            <div className="host-name">
              <p>Hosted by Kate</p>
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
          <div className="host-post">
            Welcome to Bridgewater, a beautiful town in Lunenburg county of Nova
            Scotia. My husband (used to be project manager at global company)
            and I (used to be an owner of various businesses) run a business in
            Bridgewater as well as Airbnb named ‘Breeze from La Have'. I felll
            in love with the beauty of La Have river, Lunenburg and Mahone Bay.
            It is my great pleasure to introduce the untainted beauty of seaside
            towns, breathtaking view of La Have river and many beaches nearby
            and also to provide my guests with a good memory of staying at our
            Airbnb. Feel the 'Breeze from La Have' at our Airbnb during your
            travel!
          </div>
        </div>
      </div>
      {/* <div className="form-wrapper">
        <div className="form-div">
          <div className="date-wrapper">
            <div className="date-wrapper__item">
              <div>CheckInDate</div>
              <input
                type="date"
                onChange={(e) => {
                  console.log(
                    "checkin date set to : " + new Date(e.target.value)
                  );
                }}
              />
            </div>
            <div className="date-wrapper__item">
              <div>CheckOutDate</div>
              <input
                type="date"
                onChange={(e) => {
                  console.log("checkout date set to : " + e.target.value);
                }}
              />
            </div>
          </div>
          <div className="guest-wrapper">
            <div>Enter Guest Count</div>
            <input
              type="number"
              onChange={(e) => {
                console.log("guests set to : " + e.target.value);
              }}
            />
          </div>
        </div>
      </div> */}
      {/* <div>Photos</div>
      <div>
        more Details
        <div>
          left
          <div>rental unit hosted by Kate</div>
          <div>What this place offers</div>
          <div>Calendar</div>
        </div>
        <div>Right</div>
      </div>
      <div>Reviews</div> */}
      {/* <div className="button-wrapper">
        <button
          className="booking-button"
          onClick={() => {
            navigate("/book", { state: { bookingInfo: bookingInfo } });
          }}
        >
          Reserve
        </button>
      </div> */}
    </div>
    </>
  );
};

export default Room;
