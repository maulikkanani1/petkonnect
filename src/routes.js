import Dashboard from "./Views/Dashboard";
import Store from "./Views/Store";
import ProductDetail from "./Views/ProductDetail";
import Checkout from "./Views/Checkout";
import TrackOrder from "./Views/TrackOrder";
import OrderDetails from "./Views/OrderDetails";
import Profile from "./Views/Profile";
import Products from "./Views/Products";
import Myorder from "./Views/Myorder";
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
    component: Profile
  },
  {
      path:"/MyOrder",
      component:Myorder
  },
  { 
      path:'/TrackMyorder',
      component:TrackMyOrder
  },
  {
    path: "/ProductDetail",
    component: ProductDetail,
  },
  {
      path:"/ProductList",
      component:ProductList
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
    component: TrackOrder,
  },
  {
    path: "/Products",
    component: Products
  },
  
];

export default Routes;
