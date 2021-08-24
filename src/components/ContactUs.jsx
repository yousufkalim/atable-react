import React, {useState} from 'react';
import Heading from "./Heading";
import { Container, Row, Col } from 'react-bootstrap';
import ContactUsImage from "../assets/images/contact_us.png";
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

const ContactUs = () => {
    const [data, setData] = useState({restaurantName: "", code: "", ownerName: "", phone: "", email: "" })
    const [error, setError] = useState({restaurantName: "", code: "", ownerName: "", phone: "", email: "" })

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setData({...data, [name]: value});

        if(name === "restaurantName"){
            if(value === ""){
                setError({...error, restaurantName: "Le champ ne doit pas être vide"});
            }
            else {
                setError({...error, restaurantName: ""});
            }
        }

        else if(name === "code"){
            if(value === ""){
                setError({...error, code: "Le champ ne doit pas être vide"});
            }
            else {
                setError({...error, code: ""});
            }
        }
        else if(name === "ownerName"){
            if(value === ""){
                setError({...error, ownerName: "Le champ ne doit pas être vide"});
            }
            else {
                setError({...error, ownerName: ""});
            }
        }
        else if(name === "phone"){
            if(value === ""){
                setError({...error, phone: "Le champ ne doit pas être vide"});
            }
            else{
                if(value.length !== 12) {
                    setError({...error, phone: "Le téléphone doit comporter 12 chiffres"});
                }
                else{
                    setError({...error, phone: ""});

                }
            }
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div className="contactus" id="CONTACTEZ-NOUS">
            <Heading heading="CONTACTEZ-NOUS" className="text-center" />
            <Container fluid>
                <Row className="contactus_section">
                    <Col md={6}>
                        <img src={ContactUsImage} alt="CONTACTEZ-NOUS" className="w-100" />
                    </Col>
                    <Col md={6} className="contactus_inputs_section">
                        <form onSubmit={submitHandler}>
                        <CustomInput placeholder="Nom du restaurant" error={error.restaurantName} name="restaurantName" value={data.restaurantName} onChange={changeHandler} />
                        <CustomInput placeholder="Code postal" error={error.code} name="code" value={data.Code} onChange={changeHandler} />
                        <CustomInput placeholder="Prénom et Nom du propriétaire" error={error.ownerName} name="ownerName" value={data.ownerName} onChange={changeHandler} />
                        <CustomInput placeholder="Téléphone" error={error.phone} name="phone" value={data.phone} onChange={changeHandler} />
                        <CustomInput placeholder="Adresse e-mail" error={error.email} name="email" value={data.email} onChange={changeHandler} />

                        <div className="pt-4">
                        <CustomButton btnText="Nous contacter" type="submit" />
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs
