import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="relative flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo (always visible) */}
        <Link to="/" className="flex items-center space-x-2 flex-shrink-0 hover:opacity-80 transition-opacity duration-200">
          <img src="https://arammedicalfoundation.com/wp-content/uploads/2022/06/File_000-e1653998587142.png" alt="Logo" className="h-10 w-auto" />
        </Link>
        {/* Centered Navigation Links (desktop only) */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 text-lg font-medium">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`hover:text-[#1CA39E] ${location.pathname === link.to ? 'font-bold underline text-[#1aab3c]' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Chat Button (always visible) */}
        <Link to="/contact">
          <button className="hidden md:inline-block bg-[#0B3A4A] text-white px-6 py-2 rounded font-semibold text-lg shadow hover:bg-[#17677c] ml-4 transition-colors duration-200">Book Appointment</button>
        </Link>
        {/* Hamburger Menu (mobile, rightmost) */}
        <button
          className="lg:hidden flex flex-col justify-center items-center ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#0B3A4A] mb-1 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#0B3A4A] mb-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#0B3A4A] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-2 text-base font-medium">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`block py-2 hover:text-[#1CA39E] ${location.pathname === link.to ? 'font-bold underline text-[#1aab3c]' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="w-full mt-2 bg-[#0B3A4A] text-white px-6 py-2 rounded font-semibold text-base shadow hover:bg-[#17677c] transition-colors duration-200">Book Appointment</button>
          </Link>
        </div>
      )}
    </nav>
  );
} 