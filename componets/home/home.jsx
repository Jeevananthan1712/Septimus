import React, { useEffect } from "react";
// // import { Layout } from "Layout"
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./home.module.css";
import Aos from "aos";
import "aos/dist/aos.css";




// import Carosel from "../carousel/carousel"

export default function navbar() {
  useEffect(() => {
    Aos.init({duration : 1000});
  },[])
  return (
    <>
      <div data-aos="fade-up">
        <section className={Styles.section1}>
          {/* <img src="https://im.ge/i/FoqIBf" alt="dd"></img> */}
          {/* <a href="https://im.ge/i/FoqIBf"> */}
          <img
            className={Styles.backimage}
            // src="https://i.im.ge/2022/07/15/FoqIBf.jpg"
            // alt="FoqIBf.jpg"
            border="0"
          />
          {/* <div data-aos="fade-up" data-aos-duration="3000"> */}
          
            <h1 className={Styles.centered}>NOTHIN&apos; LEFTT</h1>
          {/* </div> */}
          {/* </a> */}
        </section>
      </div>
      <section className={Styles.section2}>
        <div className={Styles.div1}>
          <div data-aos="zoom-out-right">
            <h1 className={Styles.texth1}>Online stores that stand out.</h1>
            <p>
              Our easy-to-customize templates are crafted by world-class
              designers to help create the web’s most expressive online stores.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
