import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import DisplayPage from './components/Display';
import DisplayPage1 from './components/Display2';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/DashboardPage" element={<DashboardPage />} />
        <Route path="/Display" element={<DisplayPage />} />
        <Route path="/Display1" element={<DisplayPage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
