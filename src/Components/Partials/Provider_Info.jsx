import React, { useEffect, useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { useParams } from 'react-router-dom';

const EVSlotBooking = () => {
  const { stationId } = useParams();
  const [station, setStation] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStationById = async () => {
      if (!stationId) {
        setError('No station ID provided');
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/stations/${stationId}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setStation(data);
      } catch (error) {
        console.error("Error fetching station data:", error);
        setError(`Error fetching station data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStationById();
  }, [stationId]);

  const timeSlots = [
    { id: 1, time: "9:00 am - 10:00 am", available: true },
    { id: 2, time: "10:00 am - 11:00 am", available: true },
    { id: 3, time: "11:00 am - 12:00 pm", available: true },
    { id: 4, time: "12:00 pm - 1:00 pm", available: false },
    { id: 5, time: "1:00 pm - 2:00 pm", available: true },
    { id: 6, time: "2:00 pm - 3:00 pm", available: true }
  ];

  if (error) {
    return (
      <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-red-500 text-white p-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!station) {
    return (
      <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">No station data available</div>
      </div>
    );
  }

  const handlePayment = async () => {
    if (!selectedSlot) {
      alert('Please select a time slot first');
      return;
    }
    
    try {
      const paymentData = {
        stationId,
        slotId: selectedSlot,
        timestamp: new Date().toISOString(),
        stationName: station.stationName,
        price: station.price
      };
      
      console.log('Processing payment for:', paymentData);
      // Add your payment API call here
      
    } catch (error) {
      console.error('Payment processing error:', error);
      alert('Error processing payment. Please try again.');
    }
  };

  // Construct full address string
  const fullAddress = station.address ? 
    `${station.address.street}, ${station.address.city}, ${station.address.state} ${station.address.zipCode}` :
    'Address not available';

  return (
    <div className="w-full min-h-screen bg-gray-900 p-6">
      {/* Top Bar */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <button className="text-white">
            <ChevronDown className="h-6 w-6" />
          </button>

          <div className="flex-1 mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-gray-800 text-white rounded-full py-2 pl-12 pr-4"
              />
            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-blue-500">
            <img
              src="/api/placeholder/40/40"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Booking Card */}
      <div className="bg-gray-800 rounded-xl p-8 max-w-3xl mx-auto">
        {/* Station Info */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500 mr-4">
            <img
              src="/api/placeholder/48/48"
              alt={station.stationName}
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-white text-xl font-bold">
              {station.stationName}
            </h2>
            <p className="text-gray-400">
              {station.provider_info?.name || 'Provider information not available'}
            </p>
          </div>
        </div>

        {/* Address */}
        <p className="text-gray-300 mb-4">{fullAddress}</p>

        {/* Charger Type */}
        <p className="text-gray-300 mb-4">
          Charger Type: {station.provider_info?.charger_type || 'Not specified'}
        </p>

        {/* Price */}
        <p className="text-white text-xl mb-8">
          Price: {station.price ? `₹${station.price}/kWh` : 'Price Not Available'}
        </p>

        {/* Booking Slots */}
        <div className="mb-8">
          <h3 className="text-white text-2xl font-bold mb-4">BOOKING SLOTS</h3>
          
          <div className="mb-6">
            <button className="bg-white text-black px-4 py-2 rounded flex items-center">
              FOR: TODAY
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                className={`p-3 rounded border ${
                  slot.available
                    ? selectedSlot === slot.id
                      ? 'border-emerald-500 text-emerald-500'
                      : 'border-white text-white hover:border-emerald-500 hover:text-emerald-500'
                    : 'border-gray-600 text-gray-600'
                } transition-colors ${!slot.available && 'cursor-not-allowed'}`}
                onClick={() => slot.available && setSelectedSlot(slot.id)}
                disabled={!slot.available}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        <button 
          className={`w-full py-3 rounded-md font-bold transition-colors ${
            selectedSlot 
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
              : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!selectedSlot}
          onClick={handlePayment}
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
};

export default EVSlotBooking;