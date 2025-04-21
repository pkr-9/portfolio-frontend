// src/api/contactApi.js
import apiClient from './apiClient';

export const sendContactMessage = async (data) => {
  const response = await apiClient.post('/contact', data);
  return response.data;
};
