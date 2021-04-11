import Dashboard from "./Views/Dashboard";
import Store from "./Views/Store";
import ProductDetail from "./Views/ProductDetail";

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
];

export default Routes;
