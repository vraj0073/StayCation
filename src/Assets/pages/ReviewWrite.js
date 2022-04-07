// Written by Qinyue Wang, B00892024, qn642785@dal.ca
// The file is created to allow users to submit a review for a place

import React from "react";
import axios from "axios";
import {useState} from "react";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
import {useLocation, useNavigate} from "react-router-dom";
import '../../css/ReviewEdit.css'
import "../../css/Header.css"
import Navheader from "../../components/Navheader";

function ReviewWrite(props) {
    // let userEmail = localStorage.getItem("userEmail");
    // let roomId = props.id;
    // let roomName = props.name

    let userEmail = "wangqinyuechn@gmail.com";
    let roomId = "62411dc393059f9cd2005166";
    let roomName = "Breeze LaHave";

    let currentDate =new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let date = year+"-"+month+"-"+day;

    const [number, setNumber] = useState(0);
    const [star, setStar] = useState(undefined);
    const [newContent, setNewContent] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false)
    let navigate = useNavigate();

    let changeContent = (e) => {
        if (e.target.value.replace(/\s*/g, "").length >= 10) {
            setNewContent(e.target.value);
        } else {
            setError("The review should be 10 letters at least")
        }

    }

    let submit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <Navheader/>
            <div className="review-edit" onSubmit={submit}>
                <div className="re-house-name">
                    <h1 className="re-house-name-h1">A Review For {roomName}</h1>
                </div>
                <div className="re-star-evaluation">
                    {Array(5).fill().map((_, index) => number >= index + 1 || star >= index + 1 ? (<AiFillStar
                        name="starEvaluation"
                        onMouseOver={() => !number && setStar((index + 1))}
                        onMouseLeave={() => setStar(undefined)}
                        style={{color: "orange"}}
                        onClick={() => {
                            setNumber(index + 1);
                        }}
                    />) : (<AiOutlineStar
                        onMouseOver={() => !number && setStar((index + 1))}
                        onMouseLeave={() => setStar(undefined)}
                        style={{color: "orange"}}
                        onClick={() => {
                            setNumber(index + 1);
                        }}
                    />))}
                </div>
                <div className="re-edit-content">
                    <div className="re-text">
                        <textarea placeholder="Please write a review" className="re-textarea" name="content-text"
                                  onChange={changeContent}/>
                        {isSubmitted && error.length > 0 && <p className="re-text-p">{error}</p>}
                    </div>
                    <div className="re-edit-buttons">
                        <button className="re-edit-btn" type="submit" onClick={() => {
                            setIsSubmitted(true);
                            if (newContent !== '' && number !== 0) {
                                console.log(number);
                                axios.post("https://staycationbackendapp.herokuapp.com/review/post", {
                                    userEmail: userEmail,
                                    roomId: roomId,
                                    roomName: roomName,
                                    content: newContent,
                                    rating: number,
                                    date: date
                                })
                                    .then((response) => {
                                        console.log(response.data);
                                    });
                                navigate("/user-reviews");
                            } else if (newContent === '') {
                                setError("The review should be 10 letters at least");
                            } else if (number === 0) {
                                setError("Star rating cannot be 0")
                            }
                        }}>Save
                        </button>
                        <button className="re-edit-btn" type="submit" onClick={() => {
                            navigate("/user-reviews")
                        }}>Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>)
}

export default ReviewWrite;