import axios from "axios";

const API_URL = "https://crud-app-backend-j5w3.onrender.com/api";

export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

// services/authService.js

export const logout = () => {
  localStorage.removeItem("token"); // Clear the token from localStorage
};
