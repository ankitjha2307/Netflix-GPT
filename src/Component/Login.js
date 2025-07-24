import React from "react";
import Header from "./Header";

const Login = () => {
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
        <form className="login-form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>

          <div className="signup-now"></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
