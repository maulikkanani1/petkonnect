import axios from "axios";
import jwt_decode from "jwt-decode";

export const MAIN_API =
  process.env.NODE_ENV === "development" ? "https://petkonnect.in/api" : "https://petkonnect.in/api";

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if(error.response){
//       if (error.response.status === 403) logout();
//       return Promise.reject(error);
//     }
//     }
// );

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

export const GetVendorProduct = (vendorID) => axios.get(`${MAIN_API}/vendor/get_vendor_store?vendorID=${vendorID}`);
export const GetAllVendorProduct = () => axios.get(`${MAIN_API}/vendor/get_stores`);
export const GetVendorDetails = () => axios.get(`${MAIN_API}/vendor/vendor_details`);


export const add_to_cart = (data) => axios.put(`${MAIN_API}/user/add_to_cart`, data);
export const view_cart = () => axios.post(`${MAIN_API}/user/view_cart`);
export const remove_card_item = (pid) => axios.post(`${MAIN_API}/user/update_cart`, { productIDs: pid });

export const place_order = () => axios.post(`${MAIN_API}/order/confirm_order`);
export const user_oerder_history = () => axios.post(`${MAIN_API}/order/order_history`);
export const get_order_status = (id) => axios.post(`${MAIN_API}/vendorOrder/get_order_status`,{orderID:id});
export const get_all_products = (category) => axios.get(`${MAIN_API}/inventory/get_all_products?pet_category=${category}`);
export const get_all_products_cat = (product_category) => axios.get(`${MAIN_API}/inventory/get_all_products?all_category=${product_category}`);
export const get_vendorbased_product = (category,vendor) => axios.get(`${MAIN_API}/vendor/get_vendor_store?pet_category=${category}&vendorID=${vendor}`);

