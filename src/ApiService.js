import axios from 'axios';
import jwt_decode from 'jwt-decode';

export const MAIN_API =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://petkonnect.in/api';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 403) logout();
      return Promise.reject(error);
    }
  }
);

export const logout = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

export const getLoginDetails = () => {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  return decoded;
};

export const userLogin = (data) => axios.post(`${MAIN_API}/user/login`, data);

export const GetallStores = () => axios.get(`${MAIN_API}/vendor/get_stores`);
export const GetUserData = () => axios.get(`${MAIN_API}/user`);

export const GetVendorProduct = (vendorID) =>
  axios.get(`${MAIN_API}/vendor/get_vendor_store/?vendorID=${vendorID}`);
export const GetAllVendorProduct = () =>
  axios.get(`${MAIN_API}/vendor/get_stores`);
export const GetVendorDetails = () =>
  axios.get(`${MAIN_API}/vendor/vendor_details`);

export const add_to_cart = (data) =>
  axios.put(`${MAIN_API}/user/add_to_cart`, data);
export const view_cart = () => axios.post(`${MAIN_API}/user/view_cart`);
export const remove_card_item = (pid) =>
  axios.post(`${MAIN_API}/user/update_cart`, { productIDs: pid });

export const place_order = () => axios.post(`${MAIN_API}/order/confirm_order`);
export const user_oerder_history = () =>
  axios.post(`${MAIN_API}/order/order_history`);
export const get_order_status = (id) =>
  axios.post(`${MAIN_API}/vendorOrder/get_order_status`, { orderID: id });
export const get_all_products = (category) =>
  axios.get(`${MAIN_API}/inventory/get_all_products?pet_category=${category}`);
export const get_all_products_cat = (product_category) => {
  return axios.get(
    `${MAIN_API}/inventory/get_all_products?product_category=${encodeURIComponent(
      product_category
    )}`
  );
};
export const get_vendorbased_product = (category, vendor) =>
  axios.get(
    `${MAIN_API}/vendor/get_vendor_store?pet_category=${category}&vendorID=${vendor}`
  );
export const getAllProducts = () =>
  axios.get(`${MAIN_API}/inventory/get_all_products`);

export const get_brand_based_products = (brand) =>
  axios.get(`${MAIN_API}/inventory/get_all_products?brand=${brand}`);
export const userRegistration = (data) =>
  axios.post(`${MAIN_API}/user/register`, data);
export const editAddress = (data) =>
  axios.post(`${MAIN_API}/user/edit_address`, data);
export const searchType = (data) =>
  axios.post(`${MAIN_API}/inventory/search`, data);
export const update_cart = (data) =>
  axios.post(`${MAIN_API}/user/update_cart?isUpdate=true`, data);
export const addPet = (data) => axios.post(`${MAIN_API}/pets/add_pet`, data);
export const editPet = (data, id) =>
  axios.post(`${MAIN_API}/pets/update/${id}`, data);
export const getUserPets = () => axios.get(`${MAIN_API}/pets/get_user_pets`);
export const getPet = (id) => axios.post(`${MAIN_API}/pets/get_pet/${id}`);
