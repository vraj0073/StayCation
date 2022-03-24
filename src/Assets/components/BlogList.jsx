import React,{ useEffect,useState} from 'react';
import axios from 'axios';

const BlogList=()=>{
    const [blogs,setBlogs]=useState([]);
    const [search,setSearch]=useState('travel');
    const API_key='bffbb1aee5524a6681ac95f82a372be1'

    useEffect(()=>{
        console.log("***")
        const fetchedBlog=async()=>{
            console.log("inside ***")
            const fetchBlogResponse=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-02-24&sortBy=publishedAt&apiKey=bffbb1aee5524a6681ac95f82a372be1")
        const dataToList=await fetchBlogResponse.json();
            console.log(dataToList.articles)
        }
            fetchedBlog();
    },[]);

    return (
    <div>
      
    </div>
  )
}

export default BlogList;

