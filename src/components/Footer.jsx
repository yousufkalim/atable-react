import React from 'react'

const Footer = (props) => {
    return (
        <div className="custom_footer">
            <div className="custom_footer_heading">Adresse de l’entreprise, Paris</div>
            <div className="d-flex justify-content-center align-items-center" style={{gap: "10%"}} >
                <div>Accueil</div>
                <div>CGU</div>
                <div>CGV</div>
            </div>
            <div className="custom_footer_copyrights">
            2020 Copyrights & Protected
            </div>
        </div>
    )
}

export default Footer
