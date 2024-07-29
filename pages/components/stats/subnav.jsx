import { useRouter } from "next/router";
import React from "react";

const Subnav = () => {

    const router = useRouter()

    return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className={`nav-link ${router.pathname === '/stats' ? 'bg-primary text-dark' : ''}`} aria-current="page" href="/stats">Domů</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Survival Statistiky
            </a>
            <ul className="dropdown-menu">
              <li><a className={`dropdown-item ${router.pathname === '/stats/leaderboards/miners' ? 'active' : ''}`} href="/stats/leaderboards/miners">Největší horníci</a></li>
              <li><a className={`dropdown-item ${router.pathname === '/stats/leaderboards/kills' ? 'active' : ''}`} href="/stats/leaderboards/kills">Největší lovci</a></li>
              <li><a className={`dropdown-item ${router.pathname === '/stats/leaderboards/deaths' ? 'active' : ''}`} href="/stats/leaderboards/deaths">Největší smolaři</a></li>
              <li><a className={`dropdown-item ${router.pathname === '/stats/leaderboards/playtime' ? 'active' : ''}`} href="/stats/leaderboards/playtime">Nejlepší aktivita</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ekonomické Statistiky
            </a>
            <ul className="dropdown-menu">
              <li><a className={`dropdown-item ${router.pathname === '/stats/leaderboards/money' ? 'active' : ''}`} href="/stats/leaderboards/money">Nejbohatší hráči s dollary</a></li>
              <li><a className={`dropdown-item ${router.pathname === '/stats/leaderboards/credits' ? 'active' : ''}`} href="/stats/leaderboards/credits">Nejbohatší hráči s kredity</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ostatní
            </a>
            <ul className="dropdown-menu">
              <li><a className={`dropdown-item ${router.pathname === '/stats/leaderboards/votes' ? 'active' : ''}`} href="/stats/leaderboards/votes">Nejvíce hlasující</a></li>
            </ul>
          </li>
        </ul>
    )
}

export default Subnav;