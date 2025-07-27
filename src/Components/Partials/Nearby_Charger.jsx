import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Side_Nav from '../Side_Nav';
import Card from './Card';
import { Link } from "react-router-dom";

const createCustomIcon = (color, iconSize = [25, 41]) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1]],
    popupAnchor: [0, -iconSize[1] / 2],
    shadowSize: [41, 41]
  });
};

const icons = {
  user: createCustomIcon('blue', [35, 57]),
  available: createCustomIcon('green'),
  limited: createCustomIcon('orange'),
  unavailable: createCustomIcon('red')
};


const MarkerWithLabel = ({ position, icon, label, children }) => {
  const divIcon = L.divIcon({
    className: 'custom-marker-label',
    html: `
      <div class="marker-label-container">
        <div class="marker-icon"></div>
        <div class="marker-label">${label}</div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .marker-label-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        white-space: nowrap;
      }
      .marker-label {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: bold;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        margin-top: -5px;
        border: 1px solid rgba(0,0,0,0.1);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Marker position={position} icon={icon}>
      {children}
    </Marker>
  );
};

const Nearby_Charger = () => {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [map, setMap] = useState(null);

  // Get user's location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            // lat: 18.651911,
            // lng: 73.797173
          };
          setUserLocation(location);
          
          if (map) {
            map.flyTo([location.lat, location.lng], 13);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setError('Unable to get your location');
          setUserLocation({
            lat: 12.9716,
            lng: 77.5946
          });
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  }, [map]);

  // Fetch all stations
  const fetchStations = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/stations');

      if (!response.ok) {
        throw new Error('Failed to fetch stations');
      }

      const data = await response.json();
      console.log('Fetched stations:', data);
      setStations(data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch charging stations');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStations();
  }, []);

  const getStationIcon = (station) => {
    if (!station.status || station.status === 'Offline') return icons.unavailable;
    if (station.status === 'Limited') return icons.limited;
    return icons.available;
  };

  const formatAddress = (station) => {
    const parts = [
      station.address,
      station.city,
      station.state,
      station.pincode
    ].filter(Boolean);
    return parts.join(', ');
  };

  const StationPopup = ({ station }) => {
    return (
      <div className="min-w-[200px] max-w-[300px]">
        <h3 className="font-bold text-lg mb-2">{station.name}</h3>
        <div className="text-sm text-gray-600 mb-2">{station.provider}</div>
        <div className="flex items-center gap-2 mb-2">
          <div className={`w-3 h-3 rounded-full ${
            station.status === 'Online' ? 'bg-green-500' :
            station.status === 'Limited' ? 'bg-orange-500' :
            'bg-red-500'
          }`}></div>
          <span className="text-sm">{station.status || 'Unknown'}</span>
        </div>
        <div className="text-sm mb-2">{formatAddress(station)}</div>
        {station.connectorTypes && (
          <div className="mb-2">
            <div className="font-bold text-sm mb-1">Connector Types:</div>
            <div className="text-sm">
              {Array.isArray(station.connectorTypes) 
                ? station.connectorTypes.join(', ')
                : station.connectorTypes}
            </div>
          </div>
        )}
        {station.price && (
          <div className="text-sm">
            <span className="font-bold">Price:</span> ₹{station.price}/kWh
          </div>
        )}
        {station.openingHours && (
          <div className="text-sm mt-2">
            <span className="font-bold">Hours:</span> {station.openingHours}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full h-screen flex flex-row">
      <Side_Nav />
      <div className="flex flex-col h-full justify-center items-center w-[84%] gap-5">
        {/* Map */}
        <div className="w-[750px] h-[400px] rounded-xl overflow-hidden shadow-lg">
          {userLocation && (
            <MapContainer
              center={[userLocation.lat, userLocation.lng]}
              zoom={13}
              style={{ width: '100%', height: '100%' }}
              ref={setMap}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* User Location Marker */}
              <Marker 
                position={[userLocation.lat, userLocation.lng]}
                // position={[18.651911, 73.797173]}
                icon={icons.user}
              >
                <Popup>
                  <div className="text-center">
                    <div className="font-bold mb-1">Your Location</div>
                    <div className="text-sm text-gray-600">
                      {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                    </div>
                  </div>
                </Popup>
              </Marker>

              {/* Station Markers */}
              {stations.map((station) => (
                <MarkerWithLabel 
                  key={station._id} 
                  position={[
                    station.location.coordinates[1] || station.location.lat,
                    station.location.coordinates[0] || station.location.lng
                  ]}
                  icon={getStationIcon(station)}
                  // label={station.provider || station.name}
                  label = "Default Label"
                >
                  <Popup>
                    <StationPopup station={station} />
                    
                  </Popup>
                </MarkerWithLabel>
              ))}
            </MapContainer>
          )}
        </div>

        {/* Legend */}
        {/* <div className="bg-white p-4 rounded-lg shadow-md flex gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm">Your Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-sm">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span className="text-sm">Limited</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm">Offline</span>
          </div>
        </div> */}

        {/* Nearby EV Charging Stations Cards */}
        <div className="h-72 w-[80%] flex gap-5 overflow-x-auto overflow-y-hidden flex-nowrap">
          {loading ? (
            <div className="flex items-center justify-center w-full">
              Loading stations...
            </div>
          ) : error ? (
            <div className="flex items-center justify-center w-full text-red-500">
              {error}
            </div>
          ) : stations.length === 0 ? (
            <div className="flex items-center justify-center w-full">
              No charging stations found nearby
            </div>
          ) : (
            stations.map((station) => (
              <Card
                key={station._id}
                station={station}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Nearby_Charger;