import React, {useState} from 'react';
import CustomModal from "../components/CustomModal";
import AndroidStore from "../assets/images/google_store.png";
import iosStore from "../assets/images/app_store.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";

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
       
            

            <div className="footer_links_container">
                <div className="home-social-links">

                    <a
                    rel="noreferrer"
                        className="home-social-link mb-3"
                        // href="https://www.instagram.com/issyne_lapplication"
                        target="_blank"
                    >
                        <img src={instagram} alt="instagram" className="home-social-icon" />
                    </a>


                    <a
                    rel="noreferrer"
                        className="home-social-link"
                        // href="https://www.facebook.com/issyne"
                        target="_blank"
                    >
                        <img alt="facebook" src={facebook} className="home-social-icon" />
                    </a>

                </div>
                <div className="custom_footer_heading">M.D.P - 11 rue du Banquier 75013 Paris</div>

                <div className="footer_app_download_container">
                <a onClick={() =>handleOpen("apple")} rel="noreferrer" target="_blank" className="footer_app_download_links">
                            <img src={iosStore} alt="Apple Store" className="pb-5" />
                        </a>
                        <a onClick={() =>handleOpen("google")} rel="noreferrer" target="_blank" className="footer_app_download_links">
                            <img src={AndroidStore} alt="Google Play Store" />
                        </a>
                </div>
            </div>
   
        <div className="custom_footer_copyrights">
            <div>Accueil</div>
                <div>CGU</div>
                <div>CGV</div>
                <div>Sitemap</div>
                <div> - </div>
            <div>Developed by <span className="falcon_footer"> Falcon IT Consulting </span>  2021. All Rights Reserved</div>
            </div>

            <CustomModal appLink={applink} show={show} handleClose={handleClose} />
        </footer>
    )
}

export default Footer
