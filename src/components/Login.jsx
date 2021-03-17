import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="mx-auto">
            <form>
              <p className="h4 text-center mb-4">Sign in</p>
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormLoginEmailEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Your password
              </label>
              <input
                type="password"
                id="defaultFormLoginPasswordEx"
                className="form-control"
              />
                <Link to="/list"> 
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                Login
                </MDBBtn>
              </div>
              </Link>
            </form>
           <p className="font-small grey-text d-flex justify-content-center mt-5">
              Don't have an account?
              <Link className="ml-2" to="/registration">
                  Register
              </Link>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
};

export default LogIn;
