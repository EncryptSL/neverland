import React from "react";
import NavActiveLink from "./ui/active-link";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
    <div className="container">
      <a href="/" className="navbar-brand">ARCADIAMC CZ/SK</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <NavActiveLink path="/#aboutserver" scroll={true} name={"O SERVERU"} active="text-white"/>
          </li>
          <li className="nav-item">
            <NavActiveLink path="/#vote" scroll={true} name={"HLASOVÁNÍ"} active="text-white"/>
          </li>
          <li className="nav-item">
            <NavActiveLink path="/stats" scroll={false} name={"STATISTIKY"} active="text-white"/>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              OSTATNÍ
            </a>
            <ul className="dropdown-menu">
              <li><NavActiveLink path="/team" scroll={false} name={"ADMIN TÝM"} className="dropdown-item"/></li>
              <li><NavActiveLink path="/shop/category/ranks" scroll={false} name={"VIP"} className="dropdown-item"/></li>
              <li><NavActiveLink path="/banlist" scroll={false} name={"BANLIST"} className="dropdown-item"/></li>
              <li><NavActiveLink path="/pravidla" scroll={false} name={"PRAVIDLA"} className="dropdown-item"/></li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="/shop" className="nav-link"><i className="fa-solid fa-cart-shopping"></i> OBCHOD</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
};