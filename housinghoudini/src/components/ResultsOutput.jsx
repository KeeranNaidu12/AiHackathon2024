import React from "react";
import HousingCardComponent from "./HousingCardComponent";
import HousingCard from "../models/HousingCard"; 

function ResultsOutput({ housingList }) { 
  console.log(housingList);
  return (
    <div className="p-4 w-[80%] mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Housing</h1>
      <div className="housinglist">
        {housingList.length === 0 ? (
          <p>No matches found.</p>
        ) : (
          housingList.map((housing, index) => (
            <HousingCardComponent
              key={index}
              title={housing.title} 
              price={housing.price}
              location={housing.location}
              bedrooms={housing.bedrooms}
              bathrooms={housing.bathrooms}
              pets={housing.pets}
              descriptions={housing.descriptions}
              imgUrl={housing.imageUrl}
              link = {housing.listing.link}
              match={housing.rating}
              pros={housing.pros}
              cons={housing.cons}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ResultsOutput;
