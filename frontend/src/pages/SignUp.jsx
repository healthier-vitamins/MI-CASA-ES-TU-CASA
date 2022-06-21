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
      console.log("signup data", data)
    })

  }

  return (
    <div>
      <h2>Sign up</h2>
      <div className="signup-container">
        <form onSubmit={handleSubmit}>
          <input name="profileImg" placeholder="Image"></input>
          {/* (use an imgur link lmao) */}
          <label id="signup-img" htmlFor="img">Upload image placeholder </label>
          <br />
          <input required name="username" placeholder="Username"></input>
          <label htmlFor="username">Username</label>
          <br />
          <input required name="password" placeholder="Password"></input>
          <label htmlFor="password">Password</label>
          <br />
          <input required name="email" placeholder="Email"></input>
          <label htmlFor="email">Email</label>
          <br />
          <input required name="firstName" placeholder="First name"></input>
          <label htmlFor="first-name">First Name</label>
          <input required name="lastName" placeholder="Last Name"></input>
          <label htmlFor="last-name">Last Name</label>
          <br />
          <input name="company_name" placeholder="Company Name"></input>
          <label htmlFor="company-name">Company Name</label>
          <br />
          <input name="socialLink" placeholder="Instagram link"></input>
          <label htmlFor="socials">Instagram</label>
          <br />
          <button>Create an account!</button>
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
