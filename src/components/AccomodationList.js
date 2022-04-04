/*
Author: Kishan Kahodariya
Description: This component creates list of each BlogItem and display in a gridview.
*/
import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Container,
  ButtonGroup,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import BlogItem from "./BlogItem";
import "../css/BlogList.css";

const AccomodationList = ({ targetWord }) => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("travel");
  const API_key = "bffbb1aee5524a6681ac95f82a372be1";
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <div
        className="row justify-content-start"
        style={{
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          textAlign: "-webkit-center",
        }}
      >
        {blogs &&
          blogs.map((eachBlog, i) => (
            <Col>
              <div key={i}>
                <BlogItem
                  title={eachBlog.title}
                  author={eachBlog.author}
                  description={eachBlog.description}
                  image={eachBlog.urlToImage}
                  url={eachBlog.url}
                />
              </div>
            </Col>
          ))}
      </div>
    </div>
  );
};

export default AccomodationList;
