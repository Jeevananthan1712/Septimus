import React, { useEffect } from "react";
// import { Layout } from "Layout"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Styles from "./navbar.module.css";
import Aos from "aos";
import "aos/dist/aos.css";



export default function navbar() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
 return (
   <>
     <div data-aos="fade-down">
       <Navbar
         collapseOnSelect
         expand="lg"
         bg="dark"
         variant="dark"
         className={Styles.div1}
       >
         <Container>
           <Navbar.Brand href="#home">SEPTIMUS</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="me-auto">
               <NavDropdown title="Service" id="collasible-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">FOOD</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">
                   CLOTHING
                 </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">
                   MEDICINE
                 </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">ALCOHOL</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">DEVICES</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">
                   FURNITURE
                 </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">
                   APPLIANCES
                 </NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">
                   COSMATICS
                 </NavDropdown.Item>

                 <NavDropdown.Divider />
                 <NavDropdown.Item href="#action/3.4">
                   Separated link
                 </NavDropdown.Item>
               </NavDropdown>
               <Nav.Link href="#pricing">AboutUs</Nav.Link>
             </Nav>
             <Nav>
               <Nav.Link href="#deets">More deets</Nav.Link>
               <Nav.Link eventKey={2} href="#memes">
                 Dank memes
               </Nav.Link>
             </Nav>
           </Navbar.Collapse>
         </Container>
       </Navbar>
     </div>
   </>
 );
}