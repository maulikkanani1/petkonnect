import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPassword from './Views/ResetPassword';
import Routes from './routes';

import Login from './Views/Login';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('token') ||
        location.pathname === '/reset_password' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/reset_password" component={ResetPassword} />
        {Routes.map((item) => (
          <ProtectedRoute path={item.path} component={item.component} />
        ))}

        <Redirect from="/" to="/dashboard" />
      </Switch>
      <ToastContainer hideProgressBar={true} autoClose={3000} />
    </Router>
  );
}

export default App;
