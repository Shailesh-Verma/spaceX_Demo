import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RocketsPage from './pages/RocketsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rockets" Component={<RocketsPage />} />
        <Route path="/" Component={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
