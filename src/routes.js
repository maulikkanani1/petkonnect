import Dashboard from "./Views/Dashboard";
import Store from "./Views/Store";
import ProductDetail from "./Views/ProductDetail";
import Cart from "./Views/Cart";

const Routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    role: "store",
  },
  {
    path: "/store",
    component: Store,
    role: "store",
  },
  {
    path: "/ProductDetail",
    component: ProductDetail,
    role: "store",
  },
  {
    path: "/cart",
    component: Cart,
    role: "store",
  },
];

export default Routes;
