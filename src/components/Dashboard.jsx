import React from 'react';
import LaunchList from './LaunchList';

const Dashboard = () => {
  return (
    <div className="main-content">
      <div className="card">
        <h2>Upcoming Launch</h2>
        <LaunchList type="upcoming" />
      </div>
      <div className="card">
        <h2>Previous Launch</h2>
        <LaunchList type="previous" />
      </div>
    </div>
  );
};

export default Dashboard;
