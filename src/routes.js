import Dashboard from "./Views/Dashboard";
import Store from "./Views/Store";
import ProductDetail from "./Views/ProductDetail";
import Checkout from "./Views/Checkout";
import OrderDetails from "./Views/OrderDetails";
import Profile from "./Views/Profile";
import Products from "./Views/Products";
import TrackMyOrder from "./Views/TrackMyOrder";
import ProductList from "./Views/ProductList";

const Routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/store/:storeName?",
    component: Store,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/ProductList",
    component: ProductList,
  },
  {
    path: "/Checkout",
    component: Checkout,
  },
  {
    path: "/OrderDetails",
    component: OrderDetails,
  },
  {
    path: "/TrackOrder/:id?",
    component: TrackMyOrder,
  },
  {
    path: "/Products",
    component: Products,
  },
];

export default Routes;
