import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const Search_Car = () => {
    const dataset = [
        {
            "Car": "Tata Nexon EV",
            "Style": "Compact SUV",
            "Range": "312 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 13.99 - 17.4 L",
            "Capacity": "5 Seater",
            "BootSpace": "350 L",
            "BaseModel": "XM",
            "TopModel": "Dark XZ Plus LUX"
        },
        {
            "Car": "Tata Tigor EV",
            "Style": "Subcompact Sedan",
            "Range": "306 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 12.49 - 13.64 L",
            "Capacity": "5 Seater",
            "BootSpace": "316 L",
            "BaseModel": "XE",
            "TopModel": "XZ Plus Dual Tone"
        },
        {
            "Car": "Tata Nexon EV Max",
            "Style": "Compact SUV",
            "Range": "437 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 17.74 - 19.24 L",
            "Capacity": "5 Seater",
            "BootSpace": "350 L",
            "BaseModel": "XZ Plus 3.3 kW",
            "TopModel": "XZ Plus Lux 7.2 kW"
        },
        {
            "Car": "MG ZS EV",
            "Style": "Compact SUV",
            "Range": "419 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 21.99 - 25.88 L",
            "Capacity": "5 Seater",
            "BootSpace": "448 L",
            "BaseModel": "Excite",
            "TopModel": "Exclusive"
        },
        {
            "Car": "Hyundai Kona Electric",
            "Style": "Compact SUV",
            "Range": "452 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 23.79 - 23.98 L",
            "Capacity": "5 Seater",
            "BootSpace": "na",
            "BaseModel": "Premium Dual Tone",
            "TopModel": "HSE"
        },
        {
            "Car": "Jaguar I-Pace",
            "Style": "Premium Midsize Sedan",
            "Range": "470 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 1.06 - 1.12 Cr",
            "Capacity": "5 Seater",
            "BootSpace": "656 L",
            "BaseModel": "S",
            "TopModel": "Sportback 55"
        },
        {
            "Car": "Audi E-Tron GT",
            "Style": "Premium Coupe",
            "Range": "388 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 1.8 Cr",
            "Capacity": "5 Seater",
            "BootSpace": "405 L",
            "BaseModel": "Quattro",
            "TopModel": "na"
        },
        {
            "Car": "BYD E6",
            "Style": "Subcompact MPV",
            "Range": "415 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 29.15 L",
            "Capacity": "5 Seater",
            "BootSpace": "580 L",
            "BaseModel": "STD",
            "TopModel": "na"
        },
        {
            "Car": "Mercedes-Benz EQC",
            "Style": "Compact SUV",
            "Range": "471 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 1 Cr",
            "Capacity": "5 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "BMW iX",
            "Style": "Premium Fullsize SUV",
            "Range": "425 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 1.16 Cr",
            "Capacity": "5 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Porsche Taycan",
            "Style": "Premium Sports Sedan",
            "Range": "na",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 1.5 Cr",
            "Capacity": "4 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Audi E-Tron",
            "Style": "Compact SUV",
            "Range": "400 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "\u20b9 1.01 - 1.19 Cr",
            "Capacity": "5 Seater",
            "BootSpace": "660 L",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Gravton Motors Quanta",
            "Style": "Electric Bike",
            "Range": "100 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 99,000",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Simple Energy One",
            "Style": "Electric Bike",
            "Range": "110 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,09,999",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Okaya Classiq",
            "Style": "Electric Bike",
            "Range": "95 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 69,900",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Oben Electric Rorr",
            "Style": "Electric Bike",
            "Range": "120 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,02,999",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Ola Electric S1",
            "Style": "Electric Bike",
            "Range": "121 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 85,099",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Ola Electric S1 Pro",
            "Style": "Electric Bike",
            "Range": "125 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,20,149",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Revolt RV300",
            "Style": "Electric Bike",
            "Range": "101 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,14,264",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Okinawa Praise",
            "Style": "Electric Bike",
            "Range": "96 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 71,990",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Hero Electric NYX HX",
            "Style": "Electric Bike",
            "Range": "73 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 67,540",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Crayon Motors Envy",
            "Style": "Electric Bike",
            "Range": "100 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 53,000",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "22Kymco Flow",
            "Style": "Electric Bike",
            "Range": "85 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 74,740",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Okinawa Okhi 90",
            "Style": "Electric Bike",
            "Range": "96 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,03,866",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Revolt RV400",
            "Style": "Electric Bike",
            "Range": "108 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,29,463",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Kabira Mobility KM 4000",
            "Style": "Electric Bike",
            "Range": "150 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,36,990",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "One Moto Electa",
            "Style": "Electric Bike",
            "Range": "115 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,99,000",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Odysse Evoqis",
            "Style": "Electric Bike",
            "Range": "200 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,57,000",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Okinawa i-Praise",
            "Style": "Electric Bike",
            "Range": "150 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,08,749",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Li-ions Elektrik Spock",
            "Style": "Electric Bike",
            "Range": "90 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 65,000",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Tork Motors Kratos",
            "Style": "Electric Bike",
            "Range": "120 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,02,499",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Kabira Mobility KM 3000",
            "Style": "Electric Bike",
            "Range": "150 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,26,990",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "EeVe Soul",
            "Style": "Electric Bike",
            "Range": "140 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,40,000",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Ather 450X",
            "Style": "Electric Bike",
            "Range": "116 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 1,17,200",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Lohia Omastar",
            "Style": "Electric Bike",
            "Range": "66 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 40,850",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Okinawa R30",
            "Style": "Electric Bike",
            "Range": "150 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 58,992",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Okinawa Dual",
            "Style": "Electric Bike",
            "Range": "96 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 58,998",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Evolet Pony",
            "Style": "Electric Bike",
            "Range": "82 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 39,499",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Evolet Polo",
            "Style": "Electric Bike",
            "Range": "82 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 44,499",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Evolet Derby",
            "Style": "Electric Bike",
            "Range": "82 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 46,499",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Ampere Reo Elite",
            "Style": "Electric Bike",
            "Range": "68 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 47,264",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Okinawa Lite",
            "Style": "Electric Bike",
            "Range": "150 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 59,990",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Ampere V48",
            "Style": "Electric Bike",
            "Range": "84 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 38,719",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Ampere Reo",
            "Style": "Electric Bike",
            "Range": "70 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 44,838",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        },
        {
            "Car": "Ampere Magnus",
            "Style": "Electric Bike",
            "Range": "94 Km/Full Charge",
            "Transmission": "Automatic",
            "VehicleType": "Electric",
            "PriceRange": "₹ 45,999",
            "Capacity": "1 Seater",
            "BootSpace": "na",
            "BaseModel": "na",
            "TopModel": "na"
        }
      ];

    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [addedCars, setAddedCars] = useState([]);
    const [borderColors, setBorderColors] = useState({}); // State for border colors

    // Filter cars based on the search query
    const filteredCars = dataset.filter(car => 
        car.Car.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle selecting a car
    const handleSelectCar = (car) => {
        setBorderColors(prevColors => ({
            ...prevColors,
            [car.Car]: prevColors[car.Car] ? null : '#509B6F' // Toggle border color
        }));
        setSelectedCar(car);
    };

    // Handle adding the selected car to the main window
    const handleAddCar = () => {
        if (selectedCar && !addedCars.find(car => car.Car === selectedCar.Car)) {
            setAddedCars(prevCars => [...prevCars, selectedCar]); // Add car to the list
            setSelectedCar(null); // Reset selected car
            setBorderColors(prevColors => ({ ...prevColors, [selectedCar.Car]: null })); // Reset border color
        }
        setShowModal(false);
    };

    // Handle removing a car
    const handleRemoveCar = (carToRemove) => {
        setAddedCars(prevCars => prevCars.filter(car => car !== carToRemove));
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="text-white w-[84%] h-screen flex flex-col justify-evenly items-center">
            {/* Vehicle Selection */}
            <div className="h-20 w-[50%] bg-[#1E1E1E] opacity-75 rounded-xl flex items-center justify-center">
                <h1 className="text-center text-4xl font-bold">VEHICLE SELECTION</h1>
            </div>

            {/* Main Vehicle Display */}
            <div className="w-[50%]  overflow-y-auto">
            {addedCars.length > 0 && (
                
                <div className="w-[100%]  p-4 mt-4 rounded-lg flex flex-wrap gap-4">
                    {addedCars.map(car => (
                        <div key={car.Car} className="w-full bg-[#2E2E2E] p-4 rounded-lg flex items-center justify-between border-2 border-gray-600">
                            <div>
                                <h2 className="text-xl font-semibold">{car.Car}</h2>
                                <p>{car.Range}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                
                                <MdDelete 
                                    size={24} 
                                    className="cursor-pointer text-red-600" 
                                    onClick={() => handleRemoveCar(car)} 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
            

            {/* Plus Icon for Opening Modal */}
            <div 
                className="h-16 w-20 bg-[#1E1E1E] opacity-75 rounded-xl flex items-center justify-center mt-4 cursor-pointer"
                onClick={() => setShowModal(true)}
            >
                <FaPlus />
            </div>

            {/* Modal for Vehicle Selection */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center overflow-y-scroll">
                    
                    <div className="bg-white w-[75%] h-[75%] p-6 rounded-lg relative">
                        {/* Close Icon */}
                        <div className="absolute top-4 right-4 cursor-pointer text-black">
                            <IoCloseSharp size={24} onClick={handleCloseModal} />
                        </div>

                        <h2 className="text-black text-2xl mb-4">Select a Vehicle</h2>

                        {/* Search Bar */}
                        <input
                            type="text"
                            placeholder="Search vehicles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-black"
                        />

                        {/* Vehicle List */}
                        <div className="overflow-y-auto h-[60%]">
                            {filteredCars.map(car => (
                                <div
                                    key={car.Car}
                                    onClick={() => handleSelectCar(car)}
                                    className="p-4 mb-2 border-2 rounded-lg cursor-pointer"
                                    style={{ 
                                        borderColor: borderColors[car.Car] || '#ddd' // Set border color based on selected state
                                    }}
                                >
                                    <h3 className="font-semibold" style={{ color: borderColors[car.Car] ? '#509B6F' : '#000' }}>
                                        {car.Car}
                                    </h3>
                                    <p className="text-gray-700">{car.Style} | {car.Range}</p>
                                </div>
                            ))}
                        </div>

                        {/* Add Button */}
                        <button 
                            className="bg-[#509B6F] text-white px-6 py-2 rounded-lg mt-4"
                            onClick={handleAddCar}
                            disabled={!selectedCar}
                        >
                            Add Vehicle
                        </button>
                    </div>
                </div>
            )}
            {/*Proceed Button*/}
            {
                addedCars.length > 0 && ( 
                   
                        <Link className="flex justify-center items-center bg-[#509B6F] px-5 py-3 rounded-lg"
                            to="/nearbycars">

                                <h1 className="font-bold text-2xl">Proceed</h1>
                            </Link>)
                    

            }
            {/* <Link className="flex justify-center items-center bg-[#509B6F] px-5 py-3 rounded-lg"
            to="/nearbycars">

                <h1 className="font-bold text-2xl">Proceed</h1>
            </Link> */}
        </div>
    );
}

export default Search_Car;
