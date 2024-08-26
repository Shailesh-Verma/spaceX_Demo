import React from 'react';
import Dashboard from '../components/Dashboard';
import spacex_logo from '../assets/spacex_image.jfif'

const DashboardPage = () => {
  return (
    <div className="container">
      <aside className="sidebar">
        <img src={spacex_logo} alt="SpaceX Logo" />
        <nav className="nav">
          <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/rockets">Rockets</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        <h1>SpaceX Dashboard</h1>
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
