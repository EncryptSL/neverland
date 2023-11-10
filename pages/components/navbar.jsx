import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
        <div className="container">
          <a href="/" className="navbar-brand">NEVERLAND CZ/SK</a>
    
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/#aboutserver" className="nav-link">O SERVERU</a>
              </li>
              <li className="nav-item">
                <a href="/#vote" className="nav-link">HLASOVÁNÍ</a>
              </li>
              <li className="nav-item">
                <a href="/stats" className="nav-link">STATISTIKY</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  OSTATNÍ
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/team">ADMIN TÝM</a></li>
                  <li><a className="dropdown-item" href="/shop/category/ranks">VIP</a></li>
                  <li><a className="dropdown-item" href="/banlist">BANLIST</a></li>
                  <li><a className="dropdown-item" href="/pravidla">PRAVIDLA</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/shop" className="nav-link"><i className="fa-solid fa-cart-shopping"></i> OBCHOD</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;