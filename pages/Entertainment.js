import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

const Entertainment = ({api}) => {
    const router = useRouter();
  const [Articles, setArticles] = useState([]);
  const [Message, setMessage] = useState("")
  const [Loading, setLoading] = useState(true)
  var url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=${api}`;
  const getNews = async (url) => {
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);  
      setLoading(false)    
    } catch (error) {
      setMessage(error.response.message)
    }
  };
  useEffect(() => {
    getNews(url);
  }, []);
  return (
    <div>Entertainment</div>
  )
}

export default Entertainment