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
    const response = await product_url.post('/api/v1/users/login', userData);  
    
    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getUsers = async () => {
//   try {
//     const response = await product_url.get('/api/v1/users'); 
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
export const getUsers = async (token) => {
  try {
    const response = await product_url.get('/api/v1/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
    throw error;
  }}