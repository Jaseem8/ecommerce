import React, { useRef } from "react";
import { useState } from "react";
function Login(props) {
  const [LoginMode, SetLoginMode] = useState(true);
  const passwordSignup = useRef();
  const passwordSignupConfirm = useRef();
  const [passwordError, setPasswordError] = useState("");

  const [signupDisable, setSignupDisable] = useState("true");
  const passwordCompareHandler = () => {
    if (passwordSignup.current.value !== passwordSignupConfirm.current.value) {
      setPasswordError("Passwords do not match. Please try again.");
      setSignupDisable(true);
    } else {
      setPasswordError("");
      setSignupDisable(false);
    }
  };

  return (
    <div className="backdrop" onClick={props.toggle} id="backdrop">
      {LoginMode && (
        <div className="login">
          <div className="form-container">
            <br />
            <h2>Login Form</h2>
            <form action="/api/Login" method="POST">
              {/* <label htmlFor="email">Email:</label> */}
              <input
                type="email"
                id="username"
                name="email"
                required
                placeholder="Email"
              />
              <br />
              {/* <label htmlFor="password">Password:</label> */}
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Password"
              />
              <input type="submit" value="Login" />
            </form>
            <div>
              Dont have an account ?
              <button
                onClick={() => SetLoginMode(false)}
                className="already-button"
              >
                SignUphere
              </button>
            </div>
          </div>
        </div>
      )}

      {!LoginMode && (
        <div className="login">
          <div className="form-container">
            <h2>SignUp Form</h2>
            <form action="/api/signUp" method="POST">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Name"
              />
              <br />

              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />
              <br />

              <input
                type="password"
                id="password"
                name="password"
                required
                ref={passwordSignup}
                minLength={8}
                placeholder="Password"
              />
              <br />
              {/* <label htmlFor="passwordConfirmSignup">Password Confirm:</label> */}
              <input
                type="password"
                id="passwordConfirmSignup"
                name="passwordConfirm"
                required
                ref={passwordSignupConfirm}
                onChange={passwordCompareHandler}
                placeholder="Confirm Password"
              />
              <div>{passwordError}</div>
              <button
                type="submit"
                value="Signup"
                disabled={signupDisable}
                className="signup-form-button"
              >
                Create Account
              </button>
            </form>
            <div>
              Already have an account?
              <button
                onClick={() => SetLoginMode(true)}
                className="already-button"
              >
                Login Here
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Login;
