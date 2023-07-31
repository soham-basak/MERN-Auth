import React from "react";
import { Link } from "react-router-dom";
import "./UserHero.css";

const UserHero = ({ userData }) => {
  return (
    <>
      <div className="hero">
        <div className="img"></div>
        <div className="center">
          <div className="title">Welcome {userData.name}</div>
          <div className="sub_title">
            This is a boilerplate for MERN authentication that stores a JWT in
            an HTTP-Only cookie. It also uses Redux Toolkit and the React
            Bootstrap library
          </div>
          <div className="btns">
            <a href="https://github.com/soham-basak/MERN-Auth.git">
              <button>Learn More</button>
            </a>
            <Link to="/profile">
              <button>Profile</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHero;
