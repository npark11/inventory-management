import axios from 'axios'
import { toast } from 'react-toastify';

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const validateEmail = (email) => {
  return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

// Register User
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/users/register`, userData, {withCredentials: true})
    if (response.statusText === "OK") {
      toast.success("Register successfully");
    }

    return response.data

  } catch (error) {
    const message = (
      error.response && error.response.data && error.response.data.message
    ) || error.message || error.toString();
    toast.error(message);
    console.log(error);
  }
};

// Login User
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/users/login`, userData, {withCredentials: true})
    if (response.statusText === "OK") {
      toast.success("Login successful...");
    }

    return response.data

  } catch (error) {
    const message = (
      error.response && error.response.data && error.response.data.message
    ) || error.message || error.toString();
    toast.error(message);
    console.log(error);
  }
};

// Logout User
export const logoutUser = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/users/logout`);
    toast.success(response.data.message);
  } catch (error) {
    const message = (
      error.response && error.response.data && error.response.data.message
    ) || error.message || error.toString();
    toast.error(message);
  }
};