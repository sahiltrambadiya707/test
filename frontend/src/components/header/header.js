import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  return (
    <div style={{ background: "rgb(236, 236, 236)" }}>
      <div className="header-container">
        <div className="navlist">
          <li>
            <Link className="navlinks" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="navlinks" to={"/post/search"}>
              Search Post
            </Link>
          </li>
          <li>
            <Link className="navlinks" to={"/post/create"}>
              Create Post
            </Link>
          </li>
        </div>
      </div>
      <div className="header-shadow"></div>
    </div>
  );
};

export default Header;
