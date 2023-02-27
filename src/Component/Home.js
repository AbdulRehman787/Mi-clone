import React,{useState} from 'react'
import Header from './Header'
import Slider from './Slider'
import Card from './Card'
import Seller from './Seller'
import Accessories from './Accessories'
import AccApi from './AccApi'
import Video from './Video'
import Blog from './Blog'
import BlogApi from './BlogApi'
import Store from './Store'
import Info from './Info'
import InfoApi from './InfoApi'
import Footer from './Footer'
const Home = () => {
    const [state, setstate] = useState(AccApi);
    const [data, setData] = useState(BlogApi)
    const [info,setInfo] = useState(InfoApi)

  return (
    <>
      <Header />
      <Slider />
      <Card />
      <Seller />
      <Accessories state={state} />
      <Video /> 

      <Blog data={data}/>
      <Store />

      <Info info={info}/>
      <Footer />
    </>
  )
}

export default Home
