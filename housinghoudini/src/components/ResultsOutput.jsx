import React from "react";

//Test object to see if the basic functionality is proficient
const housingData = new HousingCard("Cozy Apartment","$1200/month","West Kelowna", 2,1, true, "A cozy apartment in the city.",true);

//Print the resutling information from the housingData
function ResultsOutput(){

 return(
    <div>
        <h1>Find Housing</h1>
        <ul>
        <h3>{housingCard.getTitle()}</h3>
                <p>Location: {housingCard.getLocation()}</p>
                <p>Price: {housingCard.getPrice()}</p>
                <p>Bedrooms: {housingCard.getBedrooms()}</p>
                <p>Bathrooms: {housingCard.getBathrooms()}</p>
                <p>Pets Allowed: {housingCard.getPets() ? "Yes" : "No"}</p>
                <p>Description: {housingCard.getDescriptions()}</p>
                <p>Furnished: {housingCard.getFurnished() ? "Yes" : "No"}</p>
        </ul>
    </div>

  );
}

export default ResultsOutput;