import { useRouter } from "next/router";
import React from "react";

const subnav = () => {

    const router = useRouter()

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
                      <a className={`nav-link ${router.pathname === '/shop' ? 'active' : ''}`} aria-current="page" href="/shop">KATEGORIE</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${router.pathname === '/shop/category/ranks' ? 'active' : ''}`} aria-current="page" href="/shop/category/ranks">RANKY</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link ${router.pathname === '/shop/category/keys' ? 'active' : ''}`} aria-current="page" href="/shop/category/keys">GALAKTICKÉ KLÍČE</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </>
    )
}

export default subnav;