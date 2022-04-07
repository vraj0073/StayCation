// Written by Qinyue Wang, B00892024, qn642785@dal.ca
// The file is created to display FAQs and related articles

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
// import NavBar from "../../components/NavBar";
import Navheader from "../../components/Navheader";
import "../../css/QAArticle.css";

function QAArticle() {

    const [qas, setQAs] = useState([]);
    const [articles, setArticles] = useState([]);

    React.useEffect(() => {
        axios.get("https://staycationbackendapp.herokuapp.com/qa/getAll").then((response) => {
            setQAs(response.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("https://staycationbackendapp.herokuapp.com/article/getAll").then((response) => {
            setArticles(response.data);
        });
    }, []);

    let navigate = useNavigate();

    return (<>
        {/*{localStorage.userEmail != null && <Navheader/>}*/}
        {/*{localStorage.userEmail == null && <NavBar/>}*/}
        <Navheader/>
        <div className="qa-article-page">
            <div className="qas">
                <h1 className="qas-heading">FAQs</h1>
                <hr/>
                {qas.filter((qa, index) => {
                    if (index <= qas.length - 1 && index >= qas.length - 3) {
                        return qa;
                    }
                })
                    .map((qa) => (<div className="qa">
                        <h5 className="qa-question">{qa.question}</h5>
                        <p className="qa-answer">{qa.answer}</p>
                        <hr/>
                    </div>))}
            </div>
            <div className="articles">
                <h1 className="articles-heading">Related Articles</h1>
                <hr/>
                {articles.filter((article, index) => {
                    if (index <= articles.length - 1 && index >= articles.length - 4) {
                        return article;
                    }
                })
                    .map((article, index) => (
                        <div className="article" key={index}>
                            <h4 className="a-title-btn">{article.title}</h4>
                            <p className="a-content">{article.content}</p>
                            <hr/>
                        </div>
                    ))}
            </div>
            <div className="feedback-nav">
                <p className="feedback-nav-text">You can also
                    <button className="feedback-nav-btn" onClick={() => {
                        navigate("/feedback-form")
                    }}>give us feedback</button>
                </p>
            </div>
        </div>
    </>);
}

export default QAArticle;