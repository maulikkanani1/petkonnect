import React from 'react';
import './../scss/login.scss';
import './../scss/resetpassword.scss';
import { useState, useEffect } from 'react';
import { resetPassword } from '../ApiService';
import { toast } from 'react-toastify';
import { useLocation, useHistory } from 'react-router-dom';

const ResetPassword = () => {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const token = params.get('token');
  const [state, setState] = useState({
    newPassword: '',
    cnfPassword: '',
  });
  const { newPassword, cnfPassword } = state;
  const [isValid, setIsValid] = useState(true);

  function handlePasswordChange(e) {
    setState((state) => {
      return {
        ...state,
        newPassword: String(e.target.value),
      };
    });
  }

  const handleCnfPasswordChange = (e) => {
    setState((state) => {
      return {
        ...state,
        cnfPassword: String(e.target.value),
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword({ password: newPassword }, token).then(({ data }) => {
      console.log(data);
      if (data.status) {
        toast.success(data.message);
        history.push('/login');
      } else {
        toast.error(data.message);
      }
    });
  };

  useEffect(() => {
    setIsValid(
      newPassword === cnfPassword && newPassword !== '' ? false : true
    );
  }, [cnfPassword, newPassword]);

  return (
    <div className="reset-password">
      <div className="form-header">
        <h4>Reset Password</h4>
      </div>
      <form className="form_signin ">
        <div className="form-group ">
          <label for="password">New Password: </label>
          <input
            type="password"
            id="password"
            className="form-control "
            placeholder="New Password..."
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group ">
          <label for="confirmpass">Confirm Password: </label>
          <input
            type="password"
            id="confirmpass"
            className="form-control "
            placeholder="New Password..."
            onChange={handleCnfPasswordChange}
            required
          />
        </div>
        <p style={{ color: 'green' }}>{isValid ? '' : 'Passwords matched'}</p>
        <button
          className="btn btn-primary btn-lg btn-block"
          type="submit"
          disabled={isValid}
          onClick={handleSubmit}
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
