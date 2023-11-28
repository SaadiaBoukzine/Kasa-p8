import React from "react";
import ban from "../images/banniere.png";
import "../styles/Banniere.scss";


function Banniere(){
    return (
            <div className="banniere">
                <img  src={ban} alt="logo" />
            </div> 
                
    );
}

export default Banniere;