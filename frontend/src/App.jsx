import { useEffect, useState } from 'react'
import Header from './components/Header'
import "./assets/css/style.css"
import MainSection from './components/MainSection'
import FeaturedSection from './components/FeaturedSection'
import axios from 'axios'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/news-news/home');
        setData(response.data.data);
  
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Header/>
      <MainSection data={data}/>
      <FeaturedSection />
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
