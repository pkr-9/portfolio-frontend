// src/routes/index.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  AboutPage,
  ContactPage,
  ProjectsPage,
  ProjectDetailPage,
  NotFoundPage,
} from '../pages';

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const AppRoutes = () => (
  // <BrowserRouter  basename="/portfolio-pappu">
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
