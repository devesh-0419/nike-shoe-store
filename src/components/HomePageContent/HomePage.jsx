import React from 'react'
import { homeapi, popularsales, toprateslaes, highlight, sneaker,story,footerAPI} from "../../data/data";
import {Navbar, Cart, Home, Sales, FlexContent, Stories, Footer} from "./homeIndex";
const HomePage = () => {
  return (
    <>
    <Navbar/>
    {/* <Login/> */}
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Home homeapi={homeapi}/>
      <Sales endpoint={popularsales} ifExist />
      <FlexContent endpoint={highlight} ifExist />
      <Sales endpoint={toprateslaes}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
    </main>
    <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default HomePage