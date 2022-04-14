// Written by Qinyue Wang, B00892024, qn642785@dal.ca
// The file is created to display all the reviews of a room

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../css/Review.css"
import "../../css/Header.css"
import axios from "axios";
import Navheader from "../../components/Navheader";

function RoomReviews() {

    let roomId = "62411dc393059f9cd2005166";
    let roomName = "Breeze LaHave";

    const [retrievedData, setRetrievedData] = useState({reviews: []});
    const [query, setQuery] = useState("");
    React.useEffect(() => {
        axios.get("https://staycationbackendapp.herokuapp.com/review/get/roomId/" + roomId).then((response) => {
            setRetrievedData({reviews: response.data})
            console.log(response.data);
        });
    }, []);

    let navigate = useNavigate();

    return (
        <>
            <Navheader/>
            <div className="reviews-body">
                <div className="room-reviews-buttons">
                    <button className="back-btn" type="button" onClick={() => {
                        navigate('/rooms/'+roomId)
                    }}>&laquo;Back
                    </button>
                </div>
                <section className="reviews-right">
                    <section className="reviews-search-bar">
                        <input className="reviews-search-content" placeholder="Search reviews"
                               onChange={event => setQuery(event.target.value)}/>
                    </section>
                    <main className="reviews" name="reviews">
                        <h1 className="reviews-h1">Reviews for {roomName}</h1>
                        {retrievedData.reviews.filter(item => {
                            if (query === '') {
                                return item;
                            } else if (item.content.toLowerCase().includes(query.toLowerCase())) {
                                return item;
                            }
                        }).map(item => (<div key={item._id} className="reviews-content" id={item._id}>
                            <time>{item.date.substring(0, 10)}</time>
                            <hr/>
                            <p>{item.content}</p>
                        </div>))}
                    </main>
                </section>
            </div>
        </>
    );
}

export default RoomReviews;