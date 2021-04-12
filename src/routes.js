import Dashboard from "./Views/Dashboard";
import Store from "./Views/Store";
import ProductDetail from "./Views/ProductDetail";
import Checkout from "./Views/Checkout";

const Routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/store/:storeName",
    component: Store,
  },
  {
    path: "/ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/Checkout",
    component: Checkout,
  },
];

export default Routes;
