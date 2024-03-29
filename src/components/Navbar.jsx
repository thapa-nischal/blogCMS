import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate(undefined, { state: true });
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="navbar__logo" />
        </Link>
      </div>
      {/* <div className="navbar__center">
        <Link to="/feed">My Feed</Link>{" "}
      </div> */}
      <div className="navbar__right">
        <button
          className="navbar__loginBtn"
          onClick={() => navigate("/login")}
        >
          {""} Log In {""}
        </button>
        <button
          className="navbar__signupBtn"
          onClick={() => navigate("/signup")}
        >
          {""} Sign Up {""}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;