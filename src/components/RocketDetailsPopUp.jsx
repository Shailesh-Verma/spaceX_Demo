import React from 'react';

const RocketDetailsPopUp = ({ rocket, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose} className="close-btn">Close</button>
        <h2>{rocket.name}</h2>
        <img src={rocket.flickr_images[1]} alt={rocket.name} width="400" />
        <p>{rocket.description}</p>
        <ul>
          <li><strong>Height: </strong>{rocket.height.meters} meters</li>
          <li><strong>Diameter: </strong> {rocket.diameter.meters} meters</li>
          <li><strong>Mass: </strong>{rocket.mass.kg} kg</li>
          <li><strong>First flight: </strong>{rocket.first_flight}</li>
        </ul>
      </div>
    </div>
  );
};

export default RocketDetailsPopUp;
