import React,{ useEffect,useState} from 'react';
import {Button,ButtonGroup,Col,Row,Card} from 'react-bootstrap';
import BlogList from '../components/BlogList';

const blogPage=()=>{
   
    return (
    <div>
       <BlogList></BlogList>
    </div>
  )
}

export default blogPage;

