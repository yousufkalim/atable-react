import React from 'react';
import headerImage from "../assets/images/header.png";
import CustomButton from './CustomButton';
import { Container, Row, Col } from 'react-bootstrap';

const Header = () => {
    return (
       <div className="home_header">
            <Container fluid>
            <Row className="align-items-center">
            <Col md={6} className="home_header_content py-lg-0 py-5">
                <h2>L’APPLICATION SANS CONTACT !</h2>
                <p className="mb-5">
                Retrouvez des fonctionnalités exclusives pour
permettre à votre restaurant de générer plus 
de chiffre d’affaires, et en toute sécurité !
                </p>
            <CustomButton btntext="En savoir plus" />
            </Col>
            <Col md={6} className="home_header_image py-lg-0 py-5">
                {/* <img src={headerImage} alt="header" /> */}
            </Col>
            </Row>
        </Container>
       </div>
    )
}

export default Header
