import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchLaunches } from '../redux/slices/LaunchSlice';
import youtube from '../assets/youtube.png'
import wikipedia from '../assets/wikipedia.png'
import reddit from '../assets/reddit.png'

const LaunchList = ({ type }) => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches[type]);
  const launchStatus = useSelector((state) => state.launches.status);

  useEffect(() => {
    if (launchStatus === 'idle') {
      dispatch(fetchLaunches());
    }
  }, [launchStatus, dispatch]);

  if (launchStatus === 'loading') {
    return <div>Loading...</div>;
  } else if (launchStatus === 'failed') {
    return <div>Error fetching launches.</div>;
  }

  // Display only two launches (upcoming and previous)
  const displayedLaunches = launches.slice(1, 2); // Adjust the slice to fetch exactly two launches

  return (
    <div className="launch-list">
      {displayedLaunches.map((launch) => (
        <div className="launch-card" key={launch.id}>
          <div className="launch-card-body">
            
            <img className='rocket_img' src={launch.links.patch.small} alt='rocket_logo'/>
            <p><strong>MISSION NAME: </strong>{launch.name}</p>
            <p><strong>ROCKET:</strong> {launch.rocket}</p>
            <p><strong>FLIGHT NUMBER:</strong> {launch.flight_number}</p>
            <p><strong>TIME (UTC):</strong> {new Date(launch.date_utc).toLocaleString()}</p>
            <p><strong>LAUNCHPAD:</strong> {launch.launchpad}</p>
            <p><span><strong>Links : </strong></span></p>
            <div className="launch-card-footer">
            <NavLink to={launch.links.wikipedia} target="_blank" rel="noopener noreferrer">
              <img src={wikipedia} alt="wikipedia_logo"/></NavLink>
            <NavLink to={launch.links.webcast} target="_blank" rel="noopener noreferrer">
              <img src={youtube} alt="youtube_logo"/></NavLink>
            <NavLink to={launch.links.reddit} target="_blank" rel="noopener noreferrer">
              <img src={reddit} alt="reddit_logo"/></NavLink>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaunchList;
