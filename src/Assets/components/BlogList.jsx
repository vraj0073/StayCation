import React,{ useEffect,useState} from 'react';
import {Button,ButtonGroup,Col,Row,Card} from 'react-bootstrap';
import BlogItem from './BlogItem';

const BlogList=()=>{
    const [blogs,setBlogs]=useState([]);
    const [search,setSearch]=useState('travel');
    const API_key='bffbb1aee5524a6681ac95f82a372be1'
    const [flag,setFlag]=useState(true);

     async function  fetchedBlog(){
        const fetchBlogResponse=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-02-25&sortBy=publishedAt&apiKey=bffbb1aee5524a6681ac95f82a372be1")
        const dataToList=await fetchBlogResponse.json();
        setBlogs(dataToList.articles)
        setFlag(false)
        console.log(blogs)

    }
    useEffect(()=>{
        fetchedBlog();
    },[flag]);

    return (
    <div>
       <Row gutter={50}>
            { 
                blogs.map((eachBlog,i) => 
                <Col>
                    <div>
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
    </div>
  )
}

export default BlogList;

