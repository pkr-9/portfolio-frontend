// src/layouts/MainLayout.jsx
import React from 'react';
import Navigation from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const MainLayout = ({ children }) => (
  <>
    <Navigation />
    <main className="container my-4">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
