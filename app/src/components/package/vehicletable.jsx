// VehicleTable.js
import React from 'react';

const VehicleTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Vehicle Type</th>
          <th>No. of People</th>
          <th>Luggage Space</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((vehicle, index) => (
          <tr key={index}>
            <td>{vehicle.vehicleType}</td>
            <td>{vehicle.noOfPeople}</td>
            <td>{vehicle.luggageSpace}</td>
            <td>{vehicle.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VehicleTable;
