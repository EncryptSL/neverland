import { useRouter } from "next/router";
import React from "react";
import NavActiveLink from "../ui/active-link";

export default function subnav() {
  return (
      <>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark mb-4 shop-nav">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavActiveLink path={'/shop'} name={'KATEGORIE'} active="active"></NavActiveLink>
                  </li>
                  <li className="nav-item">
                    <NavActiveLink path={'/shop/category/ranks'} name={'RANKY'} active="active"></NavActiveLink>
                  </li>
                  <li className="nav-item">
                    <NavActiveLink path={'/shop/category/keys'} name={'GALAKTICKÉ KLÍČE'} active="active"></NavActiveLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </>
  )
}