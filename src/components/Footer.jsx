import React, {useState} from 'react';
import CustomModal from "../components/CustomModal";
import AndroidStore from "../assets/images/google_store.png";
import iosStore from "../assets/images/app_store.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import {Container,Col, Row }from "react-bootstrap";

const Footer = (props) => {

    const [show, setShow] = useState(false);
    const [applink, setApplink] = useState("");
    
    const handleOpen = (param) => { 
        setApplink(param)  
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <footer className="custom_footer">
          

          {/*     SOCIAL MEDIA LINKS END     */}
       
            

            <Container fluid>
            <Row className="footer_links_container">
                <Col md={4} className="home-social-links">

                    <a
                    rel="noreferrer"
                        className="home-social-link"
                        href="https://instagram.com/a.table.app?utm_medium=copy_link"
                        target="_blank"
                    >
                        <img src={instagram} alt="instagram" className="home-social-icon" />
                    </a>


                    <a
                    rel="noreferrer"
                        className="home-social-link"
                        href="https://www.facebook.com/Atableapp-100810982340854/"
                        target="_blank"
                    >
                        <img alt="facebook" src={facebook} className="home-social-icon" />
                    </a>

                </Col>
                <Col md={4} className="custom_footer_heading">M.D.P - 11 rue du Banquier 75013 Paris</Col>

                <Col md={4} className="footer_app_download_container">
                <a onClick={() =>handleOpen("apple")} rel="noreferrer" target="_blank" className="footer_app_download_links">
                            <img src={iosStore} alt="Apple Store" className="pb-3" />
                        </a>
                        <a onClick={() =>handleOpen("google")} rel="noreferrer" target="_blank" className="footer_app_download_links">
                            <img src={AndroidStore} alt="Google Play Store" />
                        </a>
                </Col>
            </Row>
        </Container>   
        <div className="custom_footer_copyrights">
            <div>Accueil</div>
                <div>CGU</div>
                <div>CGV</div>
                <div>Sitemap</div>
                <div> - </div>
            <div>Developed by <span className="falcon_footer"><a href="https://falconconsulting.fr" target="_blank" > Falcon IT Consulting</a></span>  2021. All Rights Reserved</div>
            </div>

            <CustomModal appLink={applink} show={show} handleClose={handleClose} />
        </footer>
    )
}

export default Footer
