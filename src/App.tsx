import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FiClock } from 'react-icons/fi';
import Navigation from './components/Navigation';
import DurationCalculator from './components/DurationCalculator';
import TimeAdder from './components/TimeAdder';
import TimeZoneConverter from './components/TimeZoneConverter';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mt-5 mb-5">
        <div className="text-center mb-5 header-content">
          <h1 className="display-4"><img src="/TTM.png" alt="Logo" className="app-logo-inline me-3"/>Date-Time Calculator</h1>
          <p className="lead text-muted">Your one-stop solution for all date and time calculations.</p>
        </div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/duration-calculator" replace />} />
          <Route path="/duration-calculator" element={<DurationCalculator />} />
          <Route path="/time-adder" element={<TimeAdder />} />
          <Route path="/timezone-converter" element={<TimeZoneConverter />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;