import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App.jsx";

function SignUp() {
  const [user, setUser] = useAtom(userAtom);

  const handleSubmit = (event) => {
    event.preventDefault();
    const signupInfo = {
      username: event.target.elements.username.value,
      password: event.target.elements.password.value,
      email: event.target.elements.email.value,
      firstName: event.target.elements.firstName.value,
      lastName: event.target.elements.lastName.value,
      company_name: event.target.elements.company_name.value,
      profileImg: event.target.elements.profileImg.value,
      socialLink: event.target.elements.socialLink.value,
    };

    fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log("signup data", data);
      });
  };

  return (
    <div className="signup-page">
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <div className="signup-container">
            <input
              className="signup-input"
              name="profileImg"
              placeholder="Image"
            />
            {/* (use an imgur link lmao) */}
            <label htmlFor="img">Upload image placeholder </label>
          </div>
          <div className="signup-container">
            <input
              required
              className="signup-input"
              name="username"
              placeholder="Username"
            />
            <label className="signup-label" htmlFor="username">Username</label>
          </div>
          <div className="signup-container">
            <input
              required
              className="signup-input"
              name="password"
              placeholder="Password"
            />
            <label className="signup-label" htmlFor="password">Password</label>
          </div>
          <div className="signup-container">
            <input
              required
              className="signup-input"
              name="email"
              placeholder="Email"
            />
            <label className="signup-label" htmlFor="email">Email</label>
          </div>
          <div className="signup-container">
            <input
              required
              className="signup-input"
              name="firstName"
              placeholder="First name"
            />
            <label className="signup-label" htmlFor="first-name">First Name</label>
          </div>
          <div className="signup-container">
            <input
              required
              className="signup-input"
              name="lastName"
              placeholder="Last Name"
            />
            <label className="signup-label" htmlFor="last-name">Last Name</label>
          </div>
          <div className="signup-container">
            <input
              className="signup-input"
              name="company_name"
              placeholder="Company Name"
            />
            <label className="signup-label" htmlFor="company-name">Company Name</label>
          </div>
          <div className="signup-container">
            <input
              className="signup-input"
              name="socialLink"
              placeholder="Instagram link"
            />
            <label className="signup-label" htmlFor="socials">Instagram</label>
          </div>
          <button className="signup-button">
            Create an account!
            </button>
        </form>
        <h4>Already have an account?</h4>
        <Link id="login-link" to="/login">
          Click here instead
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
