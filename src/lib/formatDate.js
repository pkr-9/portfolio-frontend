// src/lib/formatDate.js
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};
