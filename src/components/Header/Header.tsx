import * as React from "react";
import { Link } from "react-router-dom";

import { logo } from "../../utility/images";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <Link to="/cart">
        <button className="header-cart-btn">
          <i className="fas fa-shopping-cart" /> Cart
        </button>
      </Link>
    </header>
  );
};

export default Header;
