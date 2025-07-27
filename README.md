# EV Hub - Electric Vehicle Charging Station Finder

EV Hub is a comprehensive web application that helps electric vehicle owners find nearby charging stations, view station details, and book charging slots. The application also allows charging station providers to register their stations on the platform.

## Features

- **User Authentication**: Secure login and registration system
- **Vehicle Selection**: Choose your electric vehicle model
- **Nearby Charger Locator**: Find charging stations near your location on an interactive map
- **Station Details**: View detailed information about each charging station including:
  - Availability status (Online, Limited, Offline)
  - Connector types
  - Pricing information
  - Opening hours
  - Address and location
- **Slot Booking**: Book charging slots at available stations
- **Provider Registration**: Register as a charging station provider
- **Provider Dashboard**: Manage your charging stations

## Technology Stack

### Frontend
- React.js with Vite
- React Router for navigation
- Leaflet.js for interactive maps
- TailwindCSS for styling
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database
- Mongoose for object modeling
- JWT for authentication
- Socket.io for real-time updates

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ev_Charge
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd Server
   npm install
   cd ..
   ```

4. **Environment Setup**
   - Create a `.env` file in the Server directory with the following variables:
     ```
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```

5. **Start the backend server**
   ```bash
   cd Server
   node Server.js
   ```

6. **Start the frontend development server**
   ```bash
   # In a new terminal, from the project root
   npm run dev
   ```

7. **Access the application**
   - Open your browser and navigate to `http://localhost:5173`

## Usage

1. **Register or Login** to access the application
2. **Select your vehicle** from the available options
3. **Find nearby charging stations** on the interactive map
4. **View station details** by clicking on a marker
5. **Book a charging slot** at your preferred station
6. **Register as a provider** if you own charging stations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries or issues, please open an issue on the GitHub repository.

---

Built with ❤️ for electric vehicle owners and charging station providers.
