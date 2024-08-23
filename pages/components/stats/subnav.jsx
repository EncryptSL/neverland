import { useRouter } from "next/router";
import NavActiveLink from "../ui/active-link";
import React from "react";

const Subnav = () => {

    const router = useRouter()

    return (
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavActiveLink path={'/stats'} name={'Domů'} active="bg-primary text-white"></NavActiveLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Survival Statistiky
            </a>
            <ul className="dropdown-menu">
              <li><NavActiveLink path={'/stats/leaderboards/miners'} name={'Nějvětší horníci'} active="active" className='dropdown-item'></NavActiveLink></li>
              <li><NavActiveLink path={'/stats/leaderboards/kills'} name={'Největší lovci'} active="active" className='dropdown-item'></NavActiveLink></li>
              <li><NavActiveLink path={'/stats/leaderboards/deaths'} name={'Největší smolaři'} active="active" className='dropdown-item'></NavActiveLink></li>
              <li><NavActiveLink path={'/stats/leaderboards/playtime'} name={'Nejlepší aktivita'} active="active" className='dropdown-item'></NavActiveLink></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ekonomické Statistiky
            </a>
            <ul className="dropdown-menu">
              <NavActiveLink path={'/stats/leaderboards/money'} name={'Nejbohatší v dollarech'} active="active" className='dropdown-item'></NavActiveLink>
              <NavActiveLink path={'/stats/leaderboards/credits'} name={'Nejbohatší v kreditech'} active="active" className='dropdown-item'></NavActiveLink>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ostatní
            </a>
            <ul className="dropdown-menu">
              <li><NavActiveLink path={'/stats/leaderboards/votes/all'} name={'Nejlepší v hlasování (celkově)'} active="active" className='dropdown-item'></NavActiveLink></li>
              <li><NavActiveLink path={'/stats/leaderboards/votes/craftlist-month'} name={'Nejlepší v hlasování craftlist (měsíční)'} active="active" className='dropdown-item'></NavActiveLink></li>
              <li><NavActiveLink path={'/stats/leaderboards/votes/czechcraft-month'} name={'Nejlepší v hlasování czech-craft (měsíční)'} active="active" className='dropdown-item'></NavActiveLink></li>
            </ul>
          </li>
        </ul>
    )
}

export default Subnav;