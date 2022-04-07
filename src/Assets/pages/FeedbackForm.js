// Written by Qinyue Wang, B00892024, qn642785@dal.ca
// The file is created to allow users to submit a feedback form to us

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
// import NavBar from "../../components/NavBar";
import Navheader from "../../components/Navheader";
import "../../css/FeedbackForm.css"

function FeedbackForm() {
    const selectArr = [
        {type: "Please select", topics: ["Please select"]},
        {type: "Experiences", topics: ["Please select", "Changing or cancelling an experience", "Experience cost", "Experience quality", "Other"]},
        {type: "Hosting", topics: ["Please select", "Becoming a Host", "Getting help", "Getting paid", "Other"]},
        {type: "Traveling", topics: ["Please select", "Booking a trip", "Finding a place", "Getting help", "Other"]},
    ];
    const [selectType, setSelectType] = useState("");
    const [selectTopic, setSelectTopic] = useState("");

    const handleTypeChange = e => {
        if (e.target.value === "Please select") {
            setError("Please select a type")
        } else {
            setError("");
            setSelectType(e.target.value);
        }
    }

    const handleTopicChange = e => {
        if (e.target.value === "Please select") {
            setError("Please select a topic");
        } else {
            setError("");
            setSelectTopic(e.target.value);
        }
    }


    const types = selectArr.map((item, index) => {
        return <option value={item.type}>{item.type}</option>
    });
    const topics = selectArr.map((item, index) => {
        if (item.type === selectType) {
            return item.topics.map((t) =>
                <option value={t}>{t}</option>
            )
        }
    });

    const [detail, setDetail] = useState("");
    const [error, setError] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleDetailChange = e => {
        if (e.target.value.replace(/\s*/g, "").length >= 1) {
            setError("");
            setDetail(e.target.value);
        } else {
            setError("Please add details")
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    let navigate = useNavigate();

    return (
        <>
            {/*{localStorage.userEmail != null && <Navheader/>}*/}
            {/*{localStorage.userEmail == null && <NavBar/>}*/}
            <Navheader/>
            <div className="feedback-form-page">
                <div className="back-buttons">
                    <button className="back-btn" type="button" onClick={() => {
                        navigate('/help-center')
                    }}>&laquo;Back
                    </button>
                </div>
                <form className="feedback-form" style={{width: '50%'}} onSubmit={handleSubmit}>
                    <h1 className="form-title">Share your feedback</h1>
                    <label className="feedback-form-label">What's the type of your feedback?</label>
                    <select className="form-select" onChange={handleTypeChange}>{types}</select>
                    <label className="feedback-form-label">What's the topic of your feedback?</label>
                    <select className="form-select" onChange={handleTopicChange}>{topics}</select>
                    <label className="feedback-form-label">Add details please</label>
                    <textarea className="form-textarea" name="content-text" onChange={handleDetailChange}/>
                    {isSubmitted && error.length > 0 && <p className="re-text-p" id="error">{error}</p>}
                    <button className="form-btn" type="submit" onClick={() => {
                        setIsSubmitted(true);
                        if (detail !== "" && selectType !== "" && selectType !== "Please select" && selectTopic !== "" && selectTopic !== "Please select") {
                            axios.post("https://staycationbackendapp.herokuapp.com/feedbackForm/post", {
                                type: selectType,
                                topic: selectTopic,
                                detail: detail,
                                userEmail: localStorage.userEmail
                            })
                                .then((response) => {
                                    console.log(response.data);
                                    alert("The feedback is submitted!");
                                    navigate("/help-center");
                                });
                        } else if (detail === "") {
                            setError("Please add details")
                        } else if (selectType === "" || selectType === "Please select") {
                            setError("Please select a type")
                        } else if (selectTopic === "" || selectTopic === "Please select") {
                            setError("Please select a topic")
                        }
                    }}>Submit
                    </button>
                </form>
            </div>
        </>
    );
}

export default FeedbackForm;