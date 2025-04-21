// src/api/projectApi.js
import apiClient from './apiClient';

export const getProjects = async () => {
  const response = await apiClient.get('/projects');
  return response.data;
};
