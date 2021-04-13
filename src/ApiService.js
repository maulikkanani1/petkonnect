import axios from "axios";
import jwt_decode from "jwt-decode";

export const MAIN_API =
  process.env.NODE_ENV === "development" ? "https://petkonnect.in/api" : "https://petkonnect.in/api";

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

export const userLogin = (data) => axios.post(`${MAIN_API}/user/login`, data);

export const GetallStores = () => axios.get(`${MAIN_API}/vendor/get_stores`);

export const GetVendorProduct = (vendorID) => axios.get(`${MAIN_API}/vendor/get_vendor_store/?vendorID=${vendorID}`);

export const add_to_cart = (data) => axios.put(`${MAIN_API}/user/add_to_cart`, data);
export const view_cart = () => axios.get(`${MAIN_API}/user/view_cart`);
export const remove_card_item = (pid) => axios.post(`${MAIN_API}/user/remove_item`, { productID: pid });

export const place_order = () => axios.post(`${MAIN_API}/user/confirm_order`);
