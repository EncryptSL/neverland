import React from "react";

const Subnav = () => {
    return (
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/stats">Domů</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Survival Statistiky
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/stats/leaderboards/miners">Největší horníci</a></li>
              <li><a class="dropdown-item" href="/stats/leaderboards/kills">Největší lovci</a></li>
              <li><a class="dropdown-item" href="/stats/leaderboards/deaths">Největší smolaři</a></li>
              <li><a class="dropdown-item" href="/stats/leaderboards/playtime">Nejlepší aktivita</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ekonomické Statistiky
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/stats/leaderboards/money">Největší boháči</a></li>
              <li><a class="dropdown-item" href="/stats/leaderboards/credits">Nějvětší pracháči s kredity</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ostatní
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/stats/leaderboards/votes">Nejvíce hlasující</a></li>
            </ul>
          </li>
        </ul>        
    )
}

export default Subnav;