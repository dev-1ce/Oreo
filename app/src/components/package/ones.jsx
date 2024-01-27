// App.js
import React from 'react';
import VehicleTable from './vehicletable';
import ImageGallery from './galary';
import './package.css';

const App = () => {
  // Example data, replace this with your actual data
  const vehicleData = [
    { vehicleType: 'Mini Sedan', noOfPeople: 4, luggageSpace: 'Medium', amount: 750 },
    { vehicleType: 'Luxury Sedan', noOfPeople: 4, luggageSpace: 'Large', amount: 1500 },
    { vehicleType: 'SUV', noOfPeople: 7, luggageSpace: 'Large', amount: 1250 },
    { vehicleType: 'Mini Bus', noOfPeople: 17, luggageSpace: 'Large', amount: 2000 },
    { vehicleType: 'Bus', noOfPeople: 30, luggageSpace: 'Large', amount: 5000 }
    // Add more data as needed
  ];

  return (
    <div className="vehicle-info">
      <h1>Vehicle Information</h1>
      <ImageGallery />
      <VehicleTable data={vehicleData} />
    </div>
  );
};

export default App;
