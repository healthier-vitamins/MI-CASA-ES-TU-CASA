import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App.jsx";
import { useState } from "react";
import NavBar from "../components/navbar/NavBar.jsx";

import "./Login.css";

function Login() {
  // const [userID, setUserID] = useState({})
  const [user, setUser] = useAtom(userAtom);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginInfo = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    };

    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setData(data.data);
        console.log("data.data", data.data);
      });
  };

  const id = data._id;
  console.log("user", data._id);
  if (user.status === "success") {
    navigate("/");
  }

  return (
    <div className="login-page">
      <NavBar />
      <div className="login-form">
        <form onSubmit={handleSubmit} className="login">
        <h2>HO&ME</h2>
          <div className="login-container">
            <input
              className="login-input"
              name="username"
              type="text"
              placeholder="Username"
            />
            <label className="login-label" htmlFor="Username">
              Username
            </label>
          </div>
          <div className="login-container">
            <input
              className="login-input"
              name="password"
              type="password"
              placeholder="Password"
            />
            <label className="login-label" htmlFor="Password">
              Password
            </label>
          </div>
          <button className="login-button">Login</button>
          <p id="signup-redirect">
            Don't have an account? <Link id="signup-redirect-link" to="/sign-up"> Sign up!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
