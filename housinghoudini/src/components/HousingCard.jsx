import React from "react";

const housingData = new HousingCard("Cozy Apartment","$1200/month","West Kelowna", 2,1, true, "A cozy apartment in the city.",true);

function HousingCard(){
return(<div className="housing-data">
        <h3>{housingData.getTitle()}</h3>
                <p>Location: {housingData.getLocation()}</p>
                <p>Price: {housingData.getPrice()}</p>
                <p>Bedrooms: {housingData.getBedrooms()}</p>
                <p>Bathrooms: {housingData.getBathrooms()}</p>
                <p>Pets Allowed: {housingData.getPets() ? "Yes" : "No"}</p>
                <p>Description: {housingData.getDescriptions()}</p>
                <p>Furnished: {housingData.getFurnished() ? "Yes" : "No"}</p>
        </div>);
}
export default HousingCard;