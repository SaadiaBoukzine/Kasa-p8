import React from "react";
import logo2 from "../images/logo2.png";
import "../styles/Footer.scss";



function Footer(){
    return (
        <footer>
            <div className="Footer">
              <img src={logo2} alt="logo kasa" />  
          <p>© 2020 Kasa. All right reserved</p>  
            </div> 
          </footer>    
    );
}

export default Footer;