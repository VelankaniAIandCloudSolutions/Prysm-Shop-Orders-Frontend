import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      try {
        const response = await axios.post("jwt/create/", logInForm);
        const accessToken = response.data.access;
        const refreshToken = response.data.refresh;

        // Handle storing tokens and user details

        console.log("Logged In Successfully");
      } catch (error) {
        console.log("Error:", error);
        // Handle error responses
      }
    } else {
      event.stopPropagation();
    }
    form.classList.add("was-validated");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="col-md-4 text-center signin"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p className="h4 mb-4 text-center signintext top">Log In</p>
        <form className="needs-validation" onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>
              <input
                value={logInForm.email}
                onChange={(e) =>
                  setLogInForm({ ...logInForm, email: e.target.value })
                }
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid email.
              </div>
            </div>
          </div>

          <div className="mb-4">
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>
              <input
                value={logInForm.password}
                onChange={(e) =>
                  setLogInForm({ ...logInForm, password: e.target.value })
                }
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
              <div className="invalid-feedback">Password is required.</div>
            </div>
          </div>

          <div className="button mb-2">
            <button
              className="btn btn-outline-success btn-block LoginBtn"
              type="submit"
            >
              Log In
            </button>
          </div>
          <p>
            <a href="#">Forgot Your Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
