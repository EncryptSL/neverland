import React from "react";

const Subnav = () => {
    return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/stats">Domů</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Survival Statistiky
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/stats/leaderboards/miners">Největší horníci</a></li>
              <li><a className="dropdown-item" href="/stats/leaderboards/kills">Největší lovci</a></li>
              <li><a className="dropdown-item" href="/stats/leaderboards/deaths">Největší smolaři</a></li>
              <li><a className="dropdown-item" href="/stats/leaderboards/playtime">Nejlepší aktivita</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ekonomické Statistiky
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/stats/leaderboards/money">Největší boháči</a></li>
              <li><a className="dropdown-item" href="/stats/leaderboards/credits">Nějvětší pracháči s kredity</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ostatní
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/stats/leaderboards/votes">Nejvíce hlasující</a></li>
            </ul>
          </li>
        </ul>        
    )
}

export default Subnav;