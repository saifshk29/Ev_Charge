import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Cars_Selection from './Components/Partials/Cars_Selection';
import Nearby_Charger from './Components/Partials/Nearby_Charger';
import Choose from './Components/Partials/Choose'
import ProviderRegistration from './Components/Partials/ProviderRegistration';
import Provider_Info from './Components/Partials/Provider_Info';
import { Login, Register } from './Components/auth/login';
import EVSlotBooking from './Components/Partials/slots';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <div className="w-screen overflow-x-hidden h-screen bg-[#333333] flex">
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <Cars_Selection />
          </ProtectedRoute>
        } />
        <Route path="/nearbycars" element={
          <ProtectedRoute>
            <Nearby_Charger />
          </ProtectedRoute>
        } />
        <Route path="/providerinfo" element={
          <ProtectedRoute>
            <Provider_Info />
          </ProtectedRoute>
        } />
        <Route path="/slots/:stationId" element={
          <ProtectedRoute>
            <EVSlotBooking />
          </ProtectedRoute>
        } />
        <Route path="/Choose" element={
          <ProtectedRoute>
            <Choose />
          </ProtectedRoute>
        } />
        <Route
          path="/register-provider" element={
            <ProtectedRoute>
              <ProviderRegistration/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;