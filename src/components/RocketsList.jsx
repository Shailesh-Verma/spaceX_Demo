import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/slices/RocketSlice';
import RocketDetailsPopUp from './RocketDetailsPopUp';

const RocketsList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);
  const rocketStatus = useSelector((state) => state.rockets.status);
  const [selectedRocket, setSelectedRocket] = useState(null);

  useEffect(() => {
    if (rocketStatus === 'idle') {
      dispatch(fetchRockets());
    }
  }, [rocketStatus, dispatch]);

  const handleRocketClick = (rocket) => {
    setSelectedRocket(rocket);
  };

  const handleClosePopUp = () => {
    setSelectedRocket(null);
  };

  return (
    <div>
      {rocketStatus === 'loading' && <div>Loading...</div>}
      {rocketStatus === 'succeeded' && (
        <ul className="rocket-list">
          {rockets.map((rocket) => (
            <li key={rocket.id} onClick={() => handleRocketClick(rocket)}>
              <div className='rocketlist_card'>
              <p>{rocket.name}</p>
              <img src={rocket.flickr_images[0]} alt={rocket.name} width="200" />
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedRocket && <RocketDetailsPopUp rocket={selectedRocket} onClose={handleClosePopUp} />}
    </div>
  );
};

export default RocketsList;
