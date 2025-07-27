import React from 'react';
import { Link } from "react-router-dom";
const Card = ({ station }) => {
  if (!station) return null;

  return (
    <div className="min-w-[300px] bg-white rounded-xl shadow-lg p-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{station.stationName}</h3>
        {station.provider_info && (
          <p className="text-gray-600 text-sm">
            {station.provider_info.name && station.provider_info.charger_type 
              ? `${station.provider_info.name}, ${station.provider_info.charger_type}`
              : 'Provider information not available'}
          </p>
        )}
        {station.address && (
          <p className="text-gray-600 text-sm">
            {station.address.street && station.address.city 
              ? `${station.address.street}, ${station.address.city}`
              : 'Address not available'}
          </p>
        )}
        
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-600 font-medium">
            ₹{station.price}/kWh
          </span>
          <span className={`px-2 py-1 rounded-full text-sm ${
            station.available
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {station.available ? 'Available' : 'Occupied'}
          </span>
        </div>

        <Link
  to={`/slots/${station._id}`}
  className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
>
  Book Now
</Link>
      </div>
    </div>
  );
};

export default Card;