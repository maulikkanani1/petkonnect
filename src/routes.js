import Dashboard from "./Views/Dashboard";
import Store from "./Views/Store";


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
];

export default Routes;
