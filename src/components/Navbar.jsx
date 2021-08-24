import React from 'react';
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assets/images/logo.png"

const CustomNavbar = () => {
    return (
        
            <Navbar className="custom_navbar" expand="lg">
  <Container fluid className="custom_navbar_container">
    <Navbar.Brand href="/">
      <img src={logo} className="home_logo" alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
      <Nav className="mr-auto">
        <Nav.Link href="#Téléchargezl’application">Télécharger</Nav.Link>
        <Nav.Link href="#DECOUVREZLESFONCTIONNALITES">Fonctionnalités</Nav.Link>
        <Nav.Link href="#CONTACTEZ-NOUS">Contectaz-nous</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
   
    )
}

export default CustomNavbar;
