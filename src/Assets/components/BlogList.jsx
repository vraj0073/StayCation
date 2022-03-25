import React,{ useEffect,useState} from 'react';

const BlogList=()=>{
    const [blogs,setBlogs]=useState([]);
    const [search,setSearch]=useState('travel');
    const API_key='bffbb1aee5524a6681ac95f82a372be1'

    useEffect(()=>{
        const fetchedBlog=async()=>{
            const fetchBlogResponse=await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-02-25&sortBy=publishedAt&apiKey=bffbb1aee5524a6681ac95f82a372be1")
        const dataToList=await fetchBlogResponse.json();
            setBlogs(dataToList.articles)
        console.log(blogs)
        }
            fetchedBlog();
    },[]);

    return (
    <div>
      
    </div>
  )
}

export default BlogList;

