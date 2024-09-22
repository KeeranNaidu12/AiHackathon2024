import React from 'react';
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Button } from './ui/button';

function HousingCardComponent(props) {
  return (
    <Card className="mx-auto mb-6 transition-transform transform hover:scale-105">
      <div className="flex">
        {/* Match Section */}
        <div className="match-section flex flex-col items-center justify-center w-1/5 p-4 m-4 border-r">
          <span className="text-3xl font-extrabold text-teal-500">{props.match}</span>
          <span className="text-sm text-gray-500">match</span>
          {props.badge && (
            <span className="badge bg-red-400 text-xs mt-2 px-2 py-1 text-white rounded-full">
              {props.badge}
            </span>
          )}
        </div>

        {/* Housing Info */}
        <CardContent className="w-3/5 pl-6 mt-4">
          <div className="house-info">
            <CardTitle className="text-2xl font-bold text-gray-800">{props.title}</CardTitle>
            <p className="text-lg text-gray-600 mb-2">{props.price}</p>
            <p className="text-sm text-gray-500">Bedrooms: {props.bedrooms}</p>
            <p className="text-sm text-gray-500">Bathrooms: {props.bathrooms}</p>
            <p className="text-sm text-gray-500">Pets Allowed: {props.pets ? 'Yes' : 'No'}</p>
            <a href={props.link}><Button className='mt-4'>View Details</Button></a>

            {/* Pros and Cons */}
            <div className="mt-4">
              <h3 className="text-lg font-bold text-green-600">Pros</h3>
              <p className="text-sm text-gray-500">{props.pros}</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-bold text-red-600">Cons</h3>
              <p className="text-sm text-gray-500">{props.cons}</p>
            </div>
          </div>
        </CardContent>

        {/* Image Section */}
        <div className="house-icon w-1/5 flex items-center justify-center p-4">
          <img
            src={props.imgUrl}
            alt={props.title}
            className="w-32 h-32 object-cover rounded-lg"
          />
        </div>
      </div>
    </Card>
  );
}

export default HousingCardComponent;
