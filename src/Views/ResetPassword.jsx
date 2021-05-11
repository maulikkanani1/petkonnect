import React from 'react'
import './../scss/login.scss';
import './../scss/resetpassword.scss';
import {useState} from 'react';
import {EyeFill,EyeSlashFill} from 'react-bootstrap-icons';

const ResetPassword = () => {

    const [state,setState] = useState({newPassword:'',cnfPassword:'',isValid: false,isClicked: false});
    const {newPassword,cnfPassword,isValid,isClicked} = state;

    function handlePasswordChange(e){
        setState(state =>  {
            return {
                ...state,
                newPassword:e.target.value,
            }
        })
    }

    function handleCnfPasswordChange(e){
        setState(state =>  {
            return {
                ...state,
                cnfPassword: e.target.value,
                isValid: newPassword == cnfPassword ? true : false,
            }
        })
    }

    function handleClick(){
        setState(state =>  {
            return {
                ...state,
                isClicked: !isClicked
            }
        })
    }

    return (
        <div className="reset-password">
            <div className="form-header">
                <h4>Reset Password</h4>
            </div>
            <form className="form_signin ">
                <div className="form-group ">
                    <label for="password" >New Password: </label>
                    <input type={isClicked ? 'text' : 'password'} id="password" className="form-control " placeholder="New Password..." onChange={handlePasswordChange} required />
                </div>
                <div className="form-group ">
                    <label for="confirmpass" >Confirm Password: </label>
                    <input type={isClicked ? 'text' : 'password'} id="confirmpass" className="form-control " placeholder="New Password..." onChange={handleCnfPasswordChange} required />
                </div>
                <div className="input-icons" onClick={handleClick}>
                    <span className='icon'>{isClicked ? <EyeFill/> : <EyeSlashFill/>}</span>
                    <span>Show Password</span>
                </div>
                <button className="btn btn-primary btn-lg btn-block" type="submit" disabled={!isValid}>
                    Reset Password
                </button>
            </form>
        </div>
    )
}

export default ResetPassword
