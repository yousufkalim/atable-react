import React, {useState} from 'react';
import Heading from "./Heading";
import { Container, Row, Col } from 'react-bootstrap';
import ContactUsImage from "../assets/images/contact_us.png";
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import {changeHandler, submitHandler} from "../utils/Contactus";



const ContactUs = () => {
    const [data, setData] = useState({restaurantName: "", code: "", codeOptional: "", ownerName: "", phone: "", email: "" })
    const [error, setError] = useState({restaurantName: "", code: "", ownerName: "", phone: "", email: "" })
    const [spinner, setSpinner] = useState(false);

    return (
        <section className="contactus" id="CONTACTEZ-NOUS">
            <Heading heading="CONTACTEZ-NOUS" className="text-center" />
            <Container fluid>
                <Row className="contactus_section">
                    <Col md={6} className="text-start">
                        <img src={ContactUsImage} alt="CONTACTEZ-NOUS" className="w-100 mb-lg-0 mb-5" />
                    </Col>
                    <Col md={6} className="contactus_inputs_section mt-lg-0 mt-5">
                        <form onSubmit={(e) =>submitHandler(e, data, setData, error, setError, setSpinner)}>
                        <CustomInput placeholder="Nom du restaurant" error={error.restaurantName} name="restaurantName" value={data.restaurantName} onChange={(e) => changeHandler(e, data, setData, error, setError)} />
                        <CustomInput placeholder="Adresse" error={error.code} name="code" value={data.code} onChange={(e) => changeHandler(e, data, setData, error, setError)} />
                        <CustomInput placeholder="Adresse Optional" error={error.codeOptional} name="codeOptional" value={data.codeOptional} onChange={(e) => changeHandler(e, data, setData, error, setError)} />
                        <CustomInput placeholder="Prénom et Nom du propriétaire" error={error.ownerName} name="ownerName" value={data.ownerName} onChange={(e) => changeHandler(e, data, setData, error, setError)} />
                        <CustomInput placeholder="Téléphone" error={error.phone} name="phone" value={data.phone} onChange={(e) => changeHandler(e, data, setData, error, setError)} />
                        <CustomInput placeholder="Adresse e-mail" error={error.email} name="email" value={data.email} onChange={(e) => changeHandler(e, data, setData, error, setError)} />
                        <div className="pt-4">
                        <CustomButton spinner={spinner} btntext="Nous contacter" type="submit" />
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactUs
