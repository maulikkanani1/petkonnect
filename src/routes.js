import Dashboard from "./Views/Dashboard";
import Store from "./Views/Store";
import ProductDetail from "./Views/ProductDetail";
import Checkout from "./Views/Checkout";
import TrackOrder from "./Views/TrackOrder";
import OrderDetails from "./Views/OrderDetails";
import Profile from "./Views/Profile";

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
    component: Profile
  },
  {
    path: "/ProductDetail",
    component: ProductDetail,
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
    path: "/TrackOrder",
    component: TrackOrder,
  },
];

export default Routes;
