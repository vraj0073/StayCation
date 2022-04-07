// Written by Qinyue Wang, B00892024, qn642785@dal.ca
// The file is created to allow users to edit their posted reviews

import React from "react";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import '../../css/ReviewEdit.css'
import "../../css/Header.css"
import axios from "axios";
import Navheader from "../../components/Navheader";

function ReviewEdit() {

    const {state} = useLocation();
    const [newContent, setNewContent] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false)
    let navigate = useNavigate();

    let changeContent = (e) => {
        if (e.target.value.replace(/\s*/g, "").length >= 10) {
            setNewContent(e.target.value);
        } else {
            setError("Reviews should be 10 letters at least")
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
                    <h1 className="re-house-name-h1">My Review For {state.roomName}</h1>
                </div>
                <div className="re-edit-content">
                    <div className="re-text">
                        <textarea defaultValue={state.content} className="re-textarea" name="content-text" onChange={changeContent}/>
                        {isSubmitted && error.length > 0 && <p className="re-text-p">{error}</p>}
                        {isSubmitted && newContent.length === 0 && error.length === 0 && <p className="re-text-p">Nothing is modified</p>}
                    </div>
                    <div className="re-edit-buttons">
                        <button className="re-edit-btn" type="submit" onClick={() => {
                            setIsSubmitted(true);
                            if (newContent !== '') {
                                axios.patch("https://staycationbackendapp.herokuapp.com/review/update/" + state.id, {content: newContent})
                                    .then((response) => {
                                        console.log(response);
                                    });
                                navigate("/user-reviews");
                            }
                        }}>Save
                        </button>
                        <button className="re-edit-btn" type="submit" onClick={() => {
                            navigate("/user-reviews");
                        }}>Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
        )
}

export default ReviewEdit;