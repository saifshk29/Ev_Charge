import React, { useState } from 'react';

const ProviderRegistration = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    address: '',
    streetName: '',
    city: '',
    state: '',
    zipCode: '',
    chargerType: '',
    availabilityHours: '',
    ratePerHour: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`http://localhost:5000/api/provider/register-provider`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setSuccess('Successfully registered as provider!');
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } catch (err) {
      setError(err.message || 'Failed to register as provider. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-8 px-4 w-full bg-white">
        <div className="text-[#509B6F] p-6 rounded-t-lg ">
          <h2 className="text-5xl text-center font-bold">REGISTER AS A PROVIDER</h2>
        </div>
      <div className="max-w-2xl mx-auto bg-white rounded-lg ">
        
        <div className="p-6">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
              <p>{error}</p>
            </div>
          )}
          {success && (
            <div className="mb-6 bg-[#509B6F] bg-opacity-10 border border-[#509B6F] text-[#509B6F] rounded-lg p-4">
              <p>{success}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-[#333333] text-sm font-medium">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-[#333333] text-sm font-medium">Address</label>
                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent"
                  placeholder="Enter address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="streetName" className="block text-[#333333] text-sm font-medium">Street Name</label>
                <input
                  id="streetName"
                  name="streetName"
                  value={formData.streetName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent"
                  placeholder="Enter street name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="block text-[#333333] text-sm font-medium">City</label>
                <input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent"
                  placeholder="Enter city"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="state" className="block text-[#333333] text-sm font-medium">State</label>
                <input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent"
                  placeholder="Enter state"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="zipCode" className="block text-[#333333] text-sm font-medium">ZIP Code</label>
                <input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent"
                  placeholder="Enter ZIP code"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="chargerType" className="block text-[#333333] text-sm font-medium">Charger Type</label>
                <div className="relative">
                  <select
                    id="chargerType"
                    name="chargerType"
                    value={formData.chargerType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select charger type</option>
                    <option value="Nexon">Nexon</option>
                    <option value="MgHector">MgHector</option>
                    <option value="Ola">Ola</option>
                    <option value="Bmw">Bmw</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="ratePerHour" className="block text-[#333333] text-sm font-medium">Rate per Hour ($)</label>
                <input
                  id="ratePerHour"
                  name="ratePerHour"
                  type="number"
                  min="0"
                  step="0.01"
                  value={formData.ratePerHour}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-[#509B6F] rounded-md focus:outline-none focus:ring-2 focus:ring-[#509B6F] focus:border-transparent"
                  placeholder="Enter hourly rate"
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-52 bg-[#509B6F] hover:bg-[#408B5F] text-white py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Registering...' : 'Register as Provider'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderRegistration;