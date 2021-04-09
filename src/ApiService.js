import axios from "axios";
import jwt_decode from "jwt-decode";

export const MAIN_API = process.env.NODE_ENV === "development" ? "https://petkonnect.in" : "https://petkonnect.in";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 403) logout();
    return Promise.reject(error);
  }
);

export const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

export const getLoginDetails = () => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  return decoded;
};

export const venderLogin = (data) => axios.post(`${MAIN_API}/vendor/login`, data);

export const GetallStores = () => axios.get(`${MAIN_API}/vendor/get_stores`);

export const GetAllProduct = () => axios.get(`${MAIN_API}/vendor/get_vendor_store`);
