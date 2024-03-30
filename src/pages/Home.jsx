import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading';
import Products from '../components/Products'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    }
    catch (e) {
      console.log(e);
      setPosts([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (


    loading ? <Loading /> : <Products posts={posts}/>


  )
}

export default Home
