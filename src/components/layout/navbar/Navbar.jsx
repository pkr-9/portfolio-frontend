import React, { useEffect, useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  RiHome5Line,
  RiUser3Line,
  RiProjectorLine,
  RiMailLine,
} from 'react-icons/ri';
import './Navbar.scss';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'glass'; // glass = dark theme
  const isNeon = theme === 'neon'; // neon = light theme

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', icon: <RiHome5Line /> },
    { label: 'About', path: '/about', icon: <RiUser3Line /> },
    { label: 'Projects', path: '/projects', icon: <RiProjectorLine /> },
    { label: 'Contact', path: '/contact', icon: <RiMailLine /> },
  ];

  return (
    <header className={`aurora-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo-section" onClick={() => setMobileOpen(false)}>
          {/* <div className="logo-img" /> */}
          <Link to="/" className="logo-img"></Link>
          {/* <Link to="/" className="company-name">
            SG Engineered
          </Link> */}
        </div>

        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={mobileOpen ? 'open' : ''}></span>
          <span className={mobileOpen ? 'open' : ''}></span>
          <span className={mobileOpen ? 'open' : ''}></span>
        </div>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <motion.div
              key={link.label}
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.path}
                className={`nav-link d-flex align-items-center gap-2 ${
                  location.pathname === link.path ? 'active-link' : ''
                }`}
              >
                <span className="nav-icon">{link.icon}</span>
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {/* {isDark ? <BsSun /> : <BsMoonStars />} */}
          {isDark ? <BsSun size={20} /> : <BsMoonStars size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className={`mobile-nav-link d-flex align-items-center gap-2 ${
                  location.pathname === link.path ? 'active-link' : ''
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <span className="nav-icon">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
