import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Heading from './Heading';
import AndroidStore from "../assets/images/google_store.png";
import iosStore from "../assets/images/app_store.png";

const AppDownload = () => {
    return (
        <div className="app_download" id="Téléchargezl’application">
            <Heading heading="Téléchargez l’application" className="text-center" />
            <Container fluid>
                <Row className="align-items-center">
                    <Col md={6} className="text-center">
                        <img src={iosStore} alt="Apple Store" className="pb-5" />
                        <img src={AndroidStore} alt="Google Play Store" />
                    </Col>
                    <Col md={6}>
                        <h6 className="app_download_heading">Avec A TABLE, votre restaurant 
se met sereinement à l’ère du 
numérique
</h6>

<p className="app_download_text">Profitez en toute exclusivité de fonctionnalités 
modernes et permettant à votre établissement 
d’améliorer significativement l’expérience de 
vos clients</p>
<p className="app_download_text">Remplissez ce formulaire et nous vous 
Recontacteros dans les plus brefs délais !</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AppDownload
