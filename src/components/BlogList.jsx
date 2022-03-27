/*
Author: Kishan Kahodariya
Description: This component creates list of each BlogItem and displayed in a gridview
*/
import React,{ useEffect,useState} from 'react';
import {Button,Form,FormControl,Container,ButtonGroup,Col,Row,Card} from 'react-bootstrap';
import BlogItem from './BlogItem';
import './BlogList.css';

const BlogList=({targetWord})=>{
    const [blogs,setBlogs]=useState([]);
    const [search,setSearch]=useState('travel');
    const API_key='bffbb1aee5524a6681ac95f82a372be1'
    const [flag,setFlag]=useState(true);

    //Fetch blogs from multiple sources using NewsAPI
     async function  fetchedBlog(){
         console.log("++++"+search+"++++")
        const apiURL="https://newsapi.org/v2/everything?q="+search+"&language=en&sortBy=relevancy&apiKey=bffbb1aee5524a6681ac95f82a372be1";
        const fetchBlogResponse=await fetch(apiURL)
        const dataToList=await fetchBlogResponse.json();
        setBlogs(dataToList.articles)
        setFlag(false)
        console.log(blogs)
    }

    // Fetch list of blogs that satisfies user's input
     async function searchTarget(e){
        e.preventDefault();
        console.log(search)
        var updateWord=search.replace(" "," OR ")+" OR travel"
        console.log(updateWord)
        setSearch(updateWord)
        await fetchedBlog()
    }

    useEffect(()=>{
        fetchedBlog();
    },[]);

    return (

    <div >
        <div>

        </div>
        <Form className="d-flex" id='searchbar' >
        <FormControl
        id='searchbarsize'
          type="search"
          placeholder="Search"
          aria-label="Search"
        onChange={(e)=>setSearch(e.target.value)}
        />
        <Button type='submit' id='searchbutton' onClick={searchTarget} onSubmit={searchTarget}>Search</Button>
      </Form>
        <Container className='blogList'>
             <Row gutter={25}>
                { 
                    blogs.map((eachBlog,i) => 
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
                )}
            </Row> 
      </Container>
    </div>
  )
}

export default BlogList;

