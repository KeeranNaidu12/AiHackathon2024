import React from "react";
import HousingCard from "./HousingCard";

//Test object to see if the basic functionality is proficient
const housingData = [new HousingCard("Cozy Apartment","$1200/month","West Kelowna", 2,1, true, "A cozy apartment in the city.",true)
,new HousingCard(
    "Modern Condo",
    "$1500/month",
    "Downtown Vancouver",
    3,
    2,
    false,
    "A modern condo with beautiful city views.",
    true
  ),
  ,new HousingCard(
    "Spacious House",
    "$2500/month",
    "Richmond",
    4,
    3,
    true,
    "A spacious house perfect for families.",
    false
  )
];
//Print the resutling information from the housingData
function ResultsOutput(){

//At the moment, it only returns the Test object, it dipslay the information of the Test Object.
 return(
    <div>
        <h1>Find Housing</h1>
        <div className="housinglist">
        {housingData.length === 0 ? (
                    <p>No housing options available.</p>
                ) : (
                    housingData.map((housing, index) => (
                        <HousingCard 
                            key={index}
                            title={housing.getTitle()}
                            price={housing.getPrice()}
                            location={housing.getLocation()}
                            bedrooms={housing.getBedrooms()}
                            bathrooms={housing.getBathrooms()}
                            pets={housing.getPets()}
                            descriptions={housing.getDescriptions()}
                            furnished={housing.getFurnished()}
                        />
                    ))
                )}
        </div>
    </div>

  );
}

export default ResultsOutput;