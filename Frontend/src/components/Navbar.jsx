import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // Cart styling
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    borderRadius: "30px",
    padding: "6px 12px ",
  };

  return (
    <>
      <nav className="w-[90%] mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img className="h-[45px] " src="/imgs/logo.png" alt="logo" />
        </Link>
        <div>
          <ul className="flex items-center gap-5 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <Link to="/cart">
                <div style={cartStyle}>
                  <span className="mr-1">10</span>
                  <img src="/imgs/cart.png" alt="cart" />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
