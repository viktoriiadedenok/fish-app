import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';


const Registration = () =>{
    return(
    
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6" className="mx-auto">
          <form>
            <p className="h4 text-center text-muted mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
             <strong> Your email</strong>
            </label>
            <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterPasswordEx" className="text-muted">
              <strong>Your password</strong>
            </label>
            <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
            <br />
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
              Confirm password
            </label>
            <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
            <div className="text-center mt-4">
              <MDBBtn color="green" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    )
};
export default Registration;