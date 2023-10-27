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
                <a href="/#adminteam" className="nav-link">ADMIN TÝM</a>
              </li>
              <li className="nav-item">
                <a href="/banlist" className="nav-link">BANLIST</a>
              </li>
              <li className="nav-item">
                <a href="/pravidla" className="nav-link">PRAVIDLA</a>
              </li>
              <li className="nav-item">
                <a href="https://neverlandmc.craftingstore.net/" className="nav-link" target="_blank"><i className="fa-solid fa-cart-shopping"></i> OBCHOD</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;