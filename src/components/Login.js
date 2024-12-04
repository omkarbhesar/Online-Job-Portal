import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Img from "../Assets/img1.jpeg";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError(""); // Clear any existing errors

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8082/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const userData = await response.json();
        navigate("/Home", { state: { user: userData } });
      } else {
        const errorMessage = await response.text();
        setError(errorMessage || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
    }
  };

  return (
    <section className="vh-100" id="page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-white">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              ></i>
              <span className="h1 fw-bold mb-0">WorkFolio</span>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: "23rem" }} onSubmit={(e) => e.preventDefault()}>
                <h3
                  className="fw-normal mb-3 pb-3"
                  style={{ letterSpacing: "1px" }}
                >
                  Log in
                </h3>

                {/* Email Input */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                </div>

                {/* Password Input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="text-danger mb-3" id="error-message">
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <div className="pt-1 mb-1 justify-content-start">
                  <button
                    className="btn btn-info btn-lg btn-block"
                    type="button"
                    id="signin"
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </div>

                {/* Registration Link */}
                <p id="sp-nav">
                  Don't have an account? <Link to="/Registration">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>

          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src={Img}
              alt="Login"
              className="w-100 vh-100"
              style={{ objectFit: "cover", objectPosition: "left" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
