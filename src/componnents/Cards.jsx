import React from "react";
import cardsData from "../Data/logements.json";
import "../styles/Cards.scss";
import { Link } from "react-router-dom";


function Cards(){
    const shuffledData = cardsData.sort(() => 0.5 - Math.random());

    // Select the first 6 shuffled cards
   const selectedData = shuffledData.slice(0, 6);
 
   return (
     <div className="cards-container">
 {selectedData.map((card) => (
     <Link key={card.id} to={`/property/${card.id}`} className="cards">
         <img src={card.cover} alt={card.title} />
         <h3>{card.title}</h3>
     </Link>
 ))}
 
     </div> 
   );
 }

export default Cards;