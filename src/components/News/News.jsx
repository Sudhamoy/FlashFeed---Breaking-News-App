/* import { useState, useEffect } from 'react' */
/* import axios from 'axios' */
import React from 'react'
import SingleNews from '../SingleNews/SingleNews'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchNews } from '../../actions/newsAction'



function News() {


  const news=useSelector(store=>store.news)
  const loading=useSelector(store=>store.loading)
  /* const error = useSelector(state => state.error); */

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchNews())
  },[dispatch])

  return (

      <div className='flex flex-wrap mx-auto justify-evenly container py-4'>
      {!loading ? news.map((singleNews,index)=>(
        <SingleNews key={index} singleNews={singleNews}/>
      )) : <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9wNTdvdGk0enE2Y3N5b3hubW5qNzg4NjlzeGdkNG1ob2Eyemx3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.webp' alt='loading'/>}
      </div>
  )
}

export default News



/* (1)
Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

import axios from "axios";
axios.get('/users')
  .then(res => {
    console.log(res.data);
  });
  
  */



  /* (2) Without using redux and redux thunk:

const [news,setNews]=useState([])


useEffect(()=>{
  fetchNews()
},[])

const fetchNews= async ()=>{
  try{
    const res=await axios.get('https://newsapi.org/v2/everything?q=india&apiKey=daa379cf8e3b46e6a5d516707eea316f ');

    const filteredNews=res.data.articles.filter(article => article.title !== '[Removed]' && article.author !== null)

    setNews(filteredNews);
    
    //console.log(res.data)
    //console.log(res.data.articles)
  }
  catch(error){
    console.log('error');
  }
} */

  /*
  {news.length>0 ? news.map((singleNews,index)=>(
        <SingleNews key={index} singleNews={singleNews}/>
      )) : <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaG9wNTdvdGk0enE2Y3N5b3hubW5qNzg4NjlzeGdkNG1ob2Eyemx3MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.webp' alt='loading'/>}
        */



/* (3) 
// MyComponent.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const MyComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
 */




/* TAILWIND CSS:
(1) font-size: text-2xl, text-3xl, text-4xl, text-[200px] 
(2) color: text-white, text-red, text-[#2272FF]
(3) font-weight: font-bold, font-semibold, font-[600]
*/