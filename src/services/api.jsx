import axios from "axios";

const product_url = axios.create({
  baseURL: "http://localhost:3001", 
  timeout: 5000,
});

export const registerUser = async (userData) => {
  try {
    const response = await product_url.post('/api/v1/users/signup', userData); 
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error.response?.data || error.message;
  }
};
export const login = async (userData) => {
  try {
    const response = await product_url.post('/api/v1/users/login', userData);  // Login API call
    
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
