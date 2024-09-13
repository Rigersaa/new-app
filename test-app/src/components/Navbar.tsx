// src/components/Navbar.tsx
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          <img src="https://flowbite.com/docs/images/logo.svg" className="logo" alt="Logo" />
          <span className="brand-name">Flowbite</span>
        </a>
        <button
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation"
        >
          <svg className="menu-icon" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#" className="navbar-link">Home</a></li>
            <li>
              <button className="navbar-dropdown-toggle">
                Dropdown
                <svg className="dropdown-icon" viewBox="0 0 10 6" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>
              <div className="navbar-dropdown">
                <ul>
                  <li><a href="#" className="navbar-dropdown-link">Dashboard</a></li>
                  <li><a href="#" className="navbar-dropdown-link">My downloads</a></li>
                  <li><a href="#" className="navbar-dropdown-link">Billing</a></li>
                  <li><a href="#" className="navbar-dropdown-link">Rewards</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#" className="navbar-link">Earnings</a></li>
            <li><a href="#" className="navbar-link">Services</a></li>
            <li><a href="#" className="navbar-link">Pricing</a></li>
            <li><a href="#" className="navbar-link">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
