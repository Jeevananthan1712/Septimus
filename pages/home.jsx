import React from "react";
import Navbar from "../componets/navbar/navbar";
import Home from "../componets/home/home"
import  Carousel  from "../componets/carousel/carousel";
// import Footer from "../componets/footer/footer"


export default function home(){
 return(
  <>
    <Navbar />
    <Home />
    <Carousel />
    {/* <Footer /> */}
  </>
 );
}