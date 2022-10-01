import { Link } from "framework7-react";
import React, { useEffect, useState } from "react";
import BOOKICON from "../assets/images/book-icon.png";
import clsx from "clsx";

function Navigator({ f7router }) {
  const [routerUrl, setRouterUrl] = useState("");

  useEffect(() => {
    setRouterUrl(f7router.url);
  }, [f7router.url]);

  return (
    <div className="d--f w-100">
      <Link
        className={clsx("f--1", routerUrl == "/" && "active")}
        href="/"
      >
        <i className="fa-regular fa-house"></i>
      </Link>
      <Link
        className={clsx("f--1", routerUrl == "/login" && "active")}
        href="/login"
      >
        <i className="fa-regular fa-cart-shopping-fast"></i>
      </Link>
      <Link className="toolbar-book" href="/login">
        <div className="toolbar-book__icon">
          <img src={BOOKICON} alt="Đặt lịch" />
        </div>
      </Link>
      <Link className="f--1" href="/login">
        <i className="fa-regular fa-map-location-dot"></i>
      </Link>
      <Link className="f--1" href="/login">
        <i className="fa-regular fa-user"></i>
      </Link>
      <div className="toolbar-indicator">
        <div className="toolbar-indicator__left"></div>
        <div className="toolbar-indicator__right"></div>
      </div>
    </div>
  );
}

export default Navigator;
