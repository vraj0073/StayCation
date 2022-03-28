/*
Author: Kishan Kahodariya
Description: This component handle structure and design of each blog that is being dispalyed.
*/
import React,{ useEffect,useState} from 'react';
import {Button,ButtonGroup,Col,Row,Card} from 'react-bootstrap';
import '../css/BlogItem.css';


const BlogItem=({title, author, description,image,url})=>{

    return (
    <div>
       <div className='usercardmargin' >
            <Card  style={{ width: '18rem'}}>
            <Card.Img variant="center" src={image} />
            <Card.Body className='usercard'>
                <Card.Title className='usercardtitle'>{title} </Card.Title>
                    <Card.Text>
                        { description.substring(0,100)+"..." }
                    </Card.Text>
                <Button variant="primary" href={url} target="_blank">Read More</Button>
            </Card.Body>
            </Card>
        </div> 
    </div>
  )
}

export default BlogItem;

