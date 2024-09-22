import React from "react";
import HousingCardComponent from "./HousingCardComponent";
import HousingCard from "../models/HousingCard"; 

function ResultsOutput() {
  // Placeholder data 
  const housingList = [
    new HousingCard("Cozy Apartment", "$1200/month", "West Kelowna", 2, 1, true, "A cozy apartment in the city.", true, "https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg"),
    new HousingCard("Luxury Condo", "$2000/month", "Kelowna", 3, 2, false, "A luxury condo with a lake view.", true, "https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg"),
    new HousingCard("Budget Room", "$600/month", "Downtown Kelowna", 1, 1, false, "A budget-friendly room downtown.", false, "https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg"),
  ];

  return (
    <div className="p-4 w-[80%] mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Housing</h1>
      <div className="housinglist">
        {housingList.map((housing, index) => (
          <HousingCardComponent
            key={index}
            title={housing.getTitle()}
            price={housing.getPrice()}
            location={housing.getLocation()}
            bedrooms={housing.getBedrooms()}
            bathrooms={housing.getBathrooms()}
            pets={housing.getPets()}
            descriptions={housing.getDescriptions()}
            furnished={housing.getFurnished()}
            imgUrl={housing.getImageUrl()}
            match={80} // Placeholder match percentage
          />
        ))}
      </div>
    </div>
  );
}

export default ResultsOutput;
