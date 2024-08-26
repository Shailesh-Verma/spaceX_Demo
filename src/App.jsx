import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import RocketsPage from './pages/RocketsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/rockets" element={<RocketsPage />} />
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
