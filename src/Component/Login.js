import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValid from "../Utils/Valid";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/fireBase";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessege, setErrorMessege] = useState(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handelButtonClick = () => {
    // Validate the form data
    const messege = checkValid(email.current.value, password.current.value);

    setErrorMessege(messege);

    if (messege) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessege(errorCode, errorMessage);
        });
    } else {
    }
  };

  return (
    <div className="login-container">
      <div className="background-img">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="background"
        />
      </div>
      <Header />
      <div className="login-form-container">
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
          <h1>{isSignIn ? "Sign In" : " Sign Up"}</h1>

          {!isSignIn && <input type="text" placeholder="Full Name" required />}
          {!isSignIn && (
            <input type="text" placeholder="Contact No." required />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            required
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            required
          />
          <p className="errorMessege">{errorMessege}</p>

          <Link to="/browse">
            {" "}
            <button type="submit" onClick={handelButtonClick}>
              {isSignIn ? "Sign In" : " Sign Up"}
            </button>{" "}
          </Link>
          <div className="form-options"></div>
          <div className="signup-now">
            <p onClick={toggleSignIn}>
              {isSignIn ? "New to Netflix ? Sign In Now" : "Alredy a User"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
