import React from 'react';
import RocketsList from '../components/RocketsList';
import spacex_logo from '../assets/spacex_image.jfif'


const RocketsPage = () => {
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
        <h1>Rockets Dashboard</h1>
        <RocketsList />
      </main>
    </div>
  );
};

export default RocketsPage;
