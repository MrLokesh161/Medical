import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import DisplayPage from './components/Display';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/Display" element={<DisplayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
