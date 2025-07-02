import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation: React.FC = () => {
    return (
        <nav className="nav nav-tabs mb-4 glass-nav">
            <li className="nav-item">
                <NavLink className="nav-link glass-nav-link" to="/duration-calculator">Duration Calculator</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link glass-nav-link" to="/time-adder">Add/Subtract Duration</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link glass-nav-link" to="/timezone-converter">Time Zone Converter</NavLink>
            </li>
        </nav>
    );
};

export default Navigation;