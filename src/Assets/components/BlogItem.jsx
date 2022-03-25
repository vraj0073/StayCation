import React,{ useEffect,useState} from 'react';
import {Button,ButtonGroup,Col,Row,Card} from 'react-bootstrap';
import "./BlogItem.css";


const BlogItem=({title, author, description,image,url})=>{

    return (
    <div>
       <div className='usercardmargin' >
            <Card   style={{ width: '13rem'}}>
            <Card.Img variant="center" src={image} />
            <Card.Body className='usercard'>
                <Card.Title className='usercardtitle'>{title} </Card.Title>
                    <Card.Text>
                        { description }
                    </Card.Text>
                <Button variant="primary" href={url}>Read More</Button>
            </Card.Body>
            </Card>
        </div> 
    </div>
  )
}

export default BlogItem;

