import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "../../css/Review.css"
import "../../css/Header.css"
import axios from "axios";

function Review() {
    let userEmail = "qqq@gmail.com";
    const [retrievedData, setRetrievedData] = useState({reviews: []});
    const [query, setQuery] = useState("");
    React.useEffect(() => {
        axios.get("https://node-a3.herokuapp.com/review/get/" + userEmail).then((response) => {
            setRetrievedData({reviews: response.data})
        });
    }, []);

    let navigate = useNavigate();

    function deleteDiv(id) {
        let div = document.getElementById(id);
        let divParent = div.parentElement;
        if (divParent !== null) {
            divParent.removeChild(div);
        }
    }

    return (
        <div>
            <div className="header">
                <div className="header-items">
                    <button>S</button>
                    taycation
                </div>
                <div className="header-items">Qinyue</div>
            </div>
            <div className="reviews-page">
                <div className="reviews-body">
                    <section className="reviews-right">
                        <section className="reviews-search-bar">
                            <input className="reviews-search-content" placeholder="Search reviews"
                                   onChange={event => setQuery(event.target.value)}/>
                        </section>
                        <main className="reviews" name="reviews">
                            <h1 className="reviews-h1">My posted reviews</h1>
                            {retrievedData.reviews.filter(item => {
                                if (query === '') {
                                    return item;
                                } else if (item.roomName.toLowerCase().includes(query.toLowerCase()) || item.content.toLowerCase().includes(query.toLowerCase())) {
                                    return item;
                                }
                            }).map(item => (<div key={item._id} className="reviews-content" id={item._id}>
                                <h3>Review for {item.roomName}</h3>
                                <time>{item.date.substring(0, 10)}</time>
                                <hr/>
                                <p>{item.content}</p>
                                <div className="reviews-buttons">
                                    <button className="reviews-btn" type="button" onClick={() => {
                                        navigate('/edit-review', {
                                            state: {
                                                id: item._id,
                                                date: item.date.substring(0, 10),
                                                roomName: item.roomName,
                                                content: item.content
                                            }
                                        })
                                    }}>Edit
                                    </button>
                                    <button className="reviews-btn" type="button" onClick={() => {
                                        deleteDiv(item._id);
                                        axios
                                            .delete("https://node-a3.herokuapp.com/review/delete/" + item._id)
                                            .then((response) => {
                                                alert("Review deleted!");
                                                console.log(response);
                                            });
                                    }}>Delete
                                    </button>
                                </div>
                            </div>))}
                        </main>
                    </section>
                </div>
                <footer className="reviews-footer">&copy;2022 Group 6</footer>
            </div>
        </div>
    );
}

export default Review;