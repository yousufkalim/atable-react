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
                    <Col md={6} className="text-center pb-lg-0 pb-5">
                        <a href="https://apps.apple.com/us/app/restaurant-delivery-app/id1545116795" rel="noreferrer" target="_blank">
                            <img src={iosStore} alt="Apple Store" className="pb-5" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.resturantSideApp" rel="noreferrer" target="_blank">
                            <img className="mb-lg-0 mb-5" src={AndroidStore} alt="Google Play Store" />
                        </a>
                    </Col>
                    <Col md={6}>
                        <h6 className="app_download_heading mt-lg-0 mt-5" >Avec A TABLE, votre restaurant 
se met sereinement à l’ère du 
numérique
</h6>

<p className="app_download_text">Profitez en toute exclusivité de fonctionnalités 
modernes et permettant à votre établissement 
d’améliorer significativement l’expérience de 
vos clients</p>
<p className="app_download_text">Remplissez ce formulaire et nous vous </p>
<p className="app_download_text">Recontacteros dans les plus brefs délais !</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AppDownload
