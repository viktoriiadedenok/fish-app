import React from "react";
import  ".././index.css";
import {Link} from "react-router-dom";

const Registration = () =>{
    return(
        <div className="auth-wrapper">
          <div className="auth-inner">
            <form>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Your name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>
            <button type="submit" className="btn btn-primary btn-block"><Link to="/my-list" className="text-white">Sign Up</Link> </button>
            <p className="forgot-password text-right">
                <Link to="/sign-in">Already registered</Link>
            </p>
         </form>
        </div>
    </div>
    )
};
export default Registration;