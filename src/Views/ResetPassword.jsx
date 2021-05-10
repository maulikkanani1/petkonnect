import React from 'react'
import './../scss/login.scss';
import './../scss/resetpassword.scss';
import {useState} from 'react';

const ResetPassword = () => {

    const [state,setState] = useState({newPassword:'',cnfPassword:'',isValid:true});
    const {newPassword,cnfPassword,isValid} = state;

    function handlePasswordChange(e){
        setState(state =>  {
            return {
                ...state,
                newPassword: String(e.target.value),
            }
        })
    }

    function handleCnfPasswordChange(e){
        setState(state =>  {
            return {
                ...state,
                cnfPassword: String(e.target.value),
                isValid: newPassword === cnfPassword ? false : true,
            }
        })
    }



    console.log('hey passwd',newPassword);
    console.log("isvalid: ",state.isValid)

    return (
        <div className="reset-password">
            <div className="form-header">
                <h4>Reset Password</h4>
            </div>
            <form className="form_signin ">
                <div className="form-group ">
                    <label for="password" >New Password: </label>
                    <input type='password' id="password" className="form-control " placeholder="New Password..." onChange={handlePasswordChange} required />
                </div>
                <div className="form-group ">
                    <label for="confirmpass" >Confirm Password: </label>
                    <input type='password' id="confirmpass" className="form-control " placeholder="New Password..." onChange={handleCnfPasswordChange} required />
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={isValid}>
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ResetPassword
