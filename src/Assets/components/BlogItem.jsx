import React,{ useEffect,useState} from 'react';
import {Button,ButtonGroup,Col,Row,Card} from 'react-bootstrap';
import "./BlogItem.css";


const BlogItem=({title, author, description,image,url})=>{

    return (
    <div>
       <div className='usercardmargin' >
            <Card   style={{ width: '13rem'}}>
            {/* <Card.Img variant="center" src={eachUser.picture} />
            <Card.Body className='usercard'>
                <Card.Title className='usercardtitle'>{eachUser.firstName}&nbsp;{eachUser.lastName} </Card.Title>
                    <Card.Text>
                        { eachUser.email }
                    </Card.Text>
                <Button variant="primary" onClick={()=>profileClick(eachUser.id)}>View Profile</Button>
            </Card.Body> */}
            </Card>
        </div> 
    </div>
  )
}

export default BlogItem;

