import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App.jsx";

import "./Login.css";

function Login() {
  const [user, setUser] = useAtom(userAtom);

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginInfo = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
    }
    
    fetch('api/users/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
    .then((response) => response.json())
    .then((data) => setUser(data.data))
  };
    
  return (
    <div className="login-page">
      <div className="login-form">
        <form onSubmit={handleSubmit} className="login">
          <h2>Login!</h2>
          <div className="login-container">
            <input className="login-input" name="username" type="text" placeholder="Username" />
            <label className="login-label" htmlFor="Username">Username</label>
          </div>
          <div className="login-container">
            <input className="login-input" name="password" type="text" placeholder="Password" />
            <label className="login-label" htmlFor="Password">Password</label>
          </div>
          <button className="login-button">Login</button>
        <p>
          Don't have an account? <Link to="/sign-up">Sign up here!</Link>
        </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
