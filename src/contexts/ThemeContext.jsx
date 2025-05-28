// ThemeContext.jsx

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('neon'); // 'neon' or 'glass'

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'neon' ? 'glass' : 'neon'));
  };

  const isDark = theme === 'glass'; // glass = dark theme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      <div data-theme={theme}>{children}</div> {/* ⬅ key change here */}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
