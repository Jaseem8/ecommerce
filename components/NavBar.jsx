import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Search from "./Search";
import Login from "./Login";
import { createPortal } from "react-dom";
import UserNav from "./UserNav";

const NavBar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    isLoggedIn,
    setIsLoggedIn,
    user,
  } = useStateContext();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginHandler = (event) => {
    if (event.target.id === "backdrop") {
      setShowLoginModal((prev) => !prev);
    }
  };

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">
          <img
            src="https://cdn.sanity.io/images/l709lxgz/production/0db4700ba60d714b0ede1612521efe4a31a70b14-75x75.png"
            className="logoimg"
          />
        </Link>
      </div>
      <Search />

      {!isLoggedIn && (
        <button onClick={() => setShowLoginModal(true)} className="buttonHover">
          Login
        </button>
      )}
      {showLoginModal &&
        !isLoggedIn &&
        createPortal(
          <Login toggle={toggleLoginHandler} />,
          document.getElementById("top")
        )}

      {isLoggedIn && user && <UserNav />}
      {isLoggedIn && (
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      )}

      {!isLoggedIn && (
        <span
          data-tooltip="Please Login to access Cart"
          data-flow="bottom"
          className="cart-icon"
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">!</span>
        </span>
      )}
      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
