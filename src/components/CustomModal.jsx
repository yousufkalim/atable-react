import React from 'react';
import { Modal , Button } from 'react-bootstrap';
import logo from "../assets/images/logo.png";

const appleLinks = {
  client: "https://apps.apple.com/tt/app/client-delivery-app/id1535945992?ign-mpt=uo%3D2",
  restaurant: "https://apps.apple.com/us/app/restaurant-delivery-app/id1545116795"
}

const googleLinks = {
  client: "https://play.google.com/store/apps/details?id=com.clientSideapp",
  restaurant: "https://play.google.com/store/apps/details?id=com.resturantSideApp"
}                                             

const CustomMModal = (props) => {

  const {show, handleClose,appLink} = props;
    return (
        <>
             <Modal show={show} onHide={handleClose} className="custom_modal">
        <Modal.Body>

          <div className="modal_header">
            <div className="model_heading">
            <span><img src={logo} /></span>
              <div>Télécharger l'application</div>
            </div>
          </div>
          
          <div className="custom_modal_body">
          <a className="custom_modal_btn" href={appLink === "apple" ? appleLinks.restaurant : appLink === "google" && googleLinks.restaurant } target="_blank" >Restaurant</a>
          <a className="custom_modal_btn" href={appLink === "apple" ? appleLinks.client : appLink === "google" && googleLinks.client } target="_blank" >Client</a>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <a className="custom_modal_btn close_btn" onClick={handleClose} >Annuler</a>
         
        </Modal.Footer>
       
      </Modal>
        </>
    )
}

export default CustomMModal
