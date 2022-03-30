import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Navheader from "../../components/Navheader";

const SearchPage = () => {
  let navigate = useNavigate();
  const [rooms, setRooms] = useState([]);

  const fetchRooms = () => {
    console.log("fetch items");
    fetch("https://staycationbackendapp.herokuapp.com/hostuser/getlisting")
      .then((result) => {
        if (result.status !== 200) {
          throw new Error("Could not fetch Rooms from DB");
        }
        return result.json();
      })
      .then((roomsData) => {
        console.log("Fetched items successfully", roomsData);
        setRooms(roomsData.data);
      })
      .catch((err) => {
        throw err;
      });
    console.log(rooms);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  let roomsRender = rooms.map((room) => (
    <li>
      <div>{room.name}</div>
      <button
        onClick={() => {
          navigate("/rooms/" + room._id, { state: { room } });
        }}
      >
        View
      </button>
    </li>
  ));
  return (
    <>
      {localStorage.userEmail!=null && <Navheader />}
      {localStorage.userEmail==null && <NavBar />}
      <div>
        <h2 className="title">Search Page Under Construction</h2>
      </div>
      {/* <h1>Search Page</h1> */}
      <div>Stays in BridgeWater</div>
      <div>{roomsRender}</div>
    </>
  );
};

export default SearchPage;
