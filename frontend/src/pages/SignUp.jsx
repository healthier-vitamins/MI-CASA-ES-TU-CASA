import { Link } from "react-router-dom";

function SignUp() {
  const handleClick = () => {
    console.log("click!");
  };
  return (
    <div>
      <h2>Sign up</h2>
      <div className="signup-container">
        <form>
          <p id="signup-img">Upload image</p>
          <label htmlFor="username">Username</label>
          <input required name="username" placeholder="Username"></input>
          <br />
          <label htmlFor="email">Email</label>
          <input required name="email" placeholder="Email"></input>
          <br />
          <label htmlFor="first-name">First Name</label>
          <input required name="firstname" placeholder="First name"></input>
          <label htmlFor="last-name">Last Name</label>
          <input name="lastname" placeholder="Last Name"></input>
          <br />
          <label htmlFor="socials">Instagram</label>
          <input name="socials" placeholder="Instagram link"></input>
          <br />
          <button onClick={handleClick}>Create an account!</button>
        </form>
      </div>
      <h4>Already have an account?</h4>
      <Link id="login-link" to="/login">
        Click here instead
      </Link>
    </div>
  );
}

export default SignUp;
