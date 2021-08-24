import React from 'react';
import headerImage from "../assets/images/header.png";
import CustomButton from './CustomButton';

const Header = () => {
    return (
        <div className="home_header">
            <div className="home_header_content">
                <h1>L’APPLICATION SANS CONTACT !</h1>
                <p>
                Retrouvez des fonctionnalités exclusives pour
permettre à votre restaurant de générer plus 
de chiffre d’affaires, et en toute sécurité !
                </p>
            <CustomButton btnText="En savoir plus" />
            </div>
            <div className="home_header_image">
                <img src={headerImage} alt="header" />
            </div>
        </div>
    )
}

export default Header
