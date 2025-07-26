import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { USER_LOGO } from "../Utils/Constant";

const Brows = () => {
  return (
    <div className="header-brows">
      <Header />
      <div className="user-logo">
        <img alt="logo" src={USER_LOGO} />

        <Link to="/">
          <p className="signOut"> Sign Out </p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Brows;

// eslint-disable-next-line
