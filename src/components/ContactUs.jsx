import React, {useState} from 'react';
import Heading from "./Heading";
import { Container, Row, Col } from 'react-bootstrap';
import ContactUsImage from "../assets/images/contact_us.png";
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import emailjs from "emailjs-com";
import Swal from "sweetalert2";



const ContactUs = () => {
    const [data, setData] = useState({restaurantName: "", code: "", ownerName: "", phone: "", email: "" })
    const [error, setError] = useState({restaurantName: "", code: "", ownerName: "", phone: "", email: "" })

    const changeHandler = (e) => {
        var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
                if(value.length >= 15) {
                    setError({...error, phone: "Le numéro de téléphone doit comporter moins de 15 caractères"});
                }
                else{
                    setError({...error, phone: ""});

                }
            }
        }
        else if(name === "email"){
            if(value === ""){
                setError({...error, email: "Le champ ne doit pas être vide"})
            }
            else{
                if(!value.match(mailFormat)){
                    setError({...error, email: "L'email n'est pas valide"})
                }
                else{
                    setError({...error, email: ""});
                }
            }
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(data.restaurantName === ""){
            setError({...error, restaurantName: "Le champ ne doit pas être vide"}); 
        }
        else if(data.code === ""){
            setError({...error, code: "Le champ ne doit pas être vide"});
        }
        else if(data.ownerName === ""){
            setError({...error, ownerName: "Le champ ne doit pas être vide"});
        }
        else if(data.phone === ""){
            setError({...error, phone: "Le champ ne doit pas être vide"});
        }
        
        else if(data.phone.length >= 15){
            setError({...error, phone: "Le numéro de téléphone doit comporter moins de 15 caractères"});
        }
        else if(data.email === ""){
            setError({...error, email: "Le champ ne doit pas être vide"});
        }
        else if(!data.email.match(mailFormat)){
            setError({...error, email: "L'email n'est pas valide"})
        }
        else{

            setError({...error, restaurantName: "", code: "", ownerName: "", phone: "", email: ""})
            sendEmail(e);
           
        }

    }

    const sendEmail = (e) => {
        const templateId = "template_7frmfz6";
        emailjs
        .sendForm(
          "service_65tzjg3",
          templateId,
          e.target,
          "user_NgcI0r8l0rlaKWDsn2jU0"
        )
        .then(
          (result) => {
            Swal.fire({
                icon: 'success',
                title: 'Formulaire soumis avec succès',
                showConfirmButton: false,
                timer: 2000
              });
              clearInputs();
            console.log(result.text);
           
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
            clearInputs();
            console.log(error.text);
          }
        );
    }

    const clearInputs = () => {
        setData({restaurantName: "", code: "", ownerName: "", phone: "", email: "" })
      };

    return (
        <div className="contactus" id="CONTACTEZ-NOUS">
            <Heading heading="CONTACTEZ-NOUS" className="text-center" />
            <Container fluid>
                <Row className="contactus_section">
                    <Col md={6}>
                        <img src={ContactUsImage} alt="CONTACTEZ-NOUS" className="w-100  mb-lg-0 mb-5" />
                    </Col>
                    <Col md={6} className="contactus_inputs_section mt-lg-0 mt-5">
                        <form onSubmit={submitHandler}>
                        <CustomInput placeholder="Nom du restaurant" error={error.restaurantName} name="restaurantName" value={data.restaurantName} onChange={changeHandler} />
                        <CustomInput placeholder="Code postal" error={error.code} name="code" value={data.Code} onChange={changeHandler} />
                        <CustomInput placeholder="Prénom et Nom du propriétaire" error={error.ownerName} name="ownerName" value={data.ownerName} onChange={changeHandler} />
                        <CustomInput placeholder="Téléphone" error={error.phone} name="phone" value={data.phone} onChange={changeHandler} />
                        <CustomInput placeholder="Adresse e-mail" error={error.email} name="email" value={data.email} onChange={changeHandler} />

                        <div className="pt-4">
                        <CustomButton btntext="Nous contacter" type="submit" />
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs
