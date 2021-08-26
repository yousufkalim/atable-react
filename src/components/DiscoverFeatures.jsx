import React from 'react';
import Heading from "./Heading";
import { Container, Row, Col } from 'react-bootstrap';
import discover_features from "../assets/images/discover_features.png";
import server_requests from "../assets/images/server_requests.png";
import dishes_rating from "../assets/images/dishes_rating.png";
import QR_Code from "../assets/images/QR_codes.png";


const DiscoverFeatures = () => {
    return (
        <div className="discover_features" id="DECOUVREZLESFONCTIONNALITES">
            <Heading heading="DECOUVREZ LES FONCTIONNALITES" className="text-center" />
            <Container fluid>
                <Row className="discover_section_right bottom_line">
                    <Col md={6} className="pr-5 mb-lg-0 mb-5">
                        <div className="secondary_heading">Menu digital </div>
                        <div className="primary_text">Enregistrez l’ensemble de votre menu
très facilement. Vos clients ont accès 
à vos plats et peuvent commander et 
payer via l’application.</div>
                    </Col>
                    <Col md={6} className="text-end">
                        <img src={discover_features} alt="discover features" className=" mt-lg-0 mt-5" />
                    </Col>
                </Row>

                <Row className="discover_section_left bottom_line">
                    <Col md={6} className="text-start">
                        <img src={QR_Code} alt="QR Code" className="pr-5 mb-lg-0 mb-5" />
                    </Col>
                    <Col md={6} className="pl-5 mt-lg-0 mt-5">
                        <div className="secondary_heading">QR Codes </div>
                        <div className="primary_text">Plus besoin de faire la queue au comptoir. 
Via un QR code, l’application détecte la table 
assignée à chaque commande, pour multiplier 
votre productivité ! </div>
                    </Col>
                   
                </Row>

                <Row className="discover_section_right bottom_line">
                    <Col md={6} className="mb-lg-0 mb-5" >
                    <div className="secondary_heading">Requêtes au serveur </div>
                        <div className="primary_text">Retrouvez l’ensemble des requêtes de 
vos clients directement sur l’application.Finis les allez-retours incessants, et vos 
clients sont satisfaits !</div>
                    </Col>
                    <Col md={6} className="text-end">
                        <img src={server_requests} alt="Server Requests" className=" mt-lg-0 mt-5" />
                    </Col>
                </Row>

                <Row className="discover_section_left">
                    <Col md={6} className="text-start">
                        <img src={dishes_rating} alt="Notation des plats" className="mb-lg-0 mb-5" />
                    </Col>
                    <Col md={6} className="pl-5 mt-lg-0 mt-5">
                        <div className="secondary_heading">Notation des plats </div>
                        <div className="primary_text">Recevez les avis de vos consommateurs, 
sans que ceux-ci n’impactent votre 
e-réputation. Affinez votre menu en fonction 
de ces retours</div>
                    </Col>
                   
                </Row>

            
            </Container>
        </div>
    )
}

export default DiscoverFeatures
