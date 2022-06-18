import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <div className="login-page">
      <div className="login-form">
        <form onSubmit={handleSubmit} className="login">
          <h2>Login!</h2>
          <div className="login-container">
            <input className="login-input" type="text" placeholder="Username" />
            <label className="login-label" htmlFor="Username">Username</label>
          </div>
          <div className="login-container">
            <input className="login-input" type="text" placeholder="Password" />
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
