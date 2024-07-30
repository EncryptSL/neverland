import React, { useEffect, useState } from "react"
import axios from "axios";

const Globalstats = () => {

    const [stats, setStats] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      axios.get('//encryptsl.cekuj.net/api/minecraft/stats/server').then((res) => res.data)
        .then((status) => {
          setStats(status)
          setLoading(false)
        })
    }, [])

    if (isLoading) return (
        <>
          <div className="col-md cover-me container">Načítání</div>
        </>
      )
    if (!stats) return <p>No server data</p>

    return (
        <section className="p-5 stats-content">
            <div className="container">
                <h2>Globální Statistiky</h2>
                <div className="row g-2 d-flex">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-netherite-ingot"></i> Celkem Kreditů</h5>
                              <p className="card-text fs-1 fw-bold">{formatNumbers(stats.total_credits)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-gold-block"></i> Celkem Dollarů</h5>
                              <p className="card-text fs-1 fw-bold">{formatNumbers(stats.total_money)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-emerald-block"></i> Celkem Hlasů</h5>
                              <p className="card-text fs-1 fw-bold">{formatNumbers(stats.total_votes)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-stone-pickaxe"></i> Celkem Vytěžených bloků</h5>
                              <p className="card-text fs-1 fw-bold">{formatNumbers(stats.total_blocks)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-wooden-sword"></i> Celkem Zabitých mobů</h5>
                              <p className="card-text fs-1 fw-bold">{formatNumbers(stats.total_kills)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-wither-rose"></i> Celkem Úmrtí</h5>
                              <p className="card-text fs-1 fw-bold">{formatNumbers(stats.total_deaths)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-compass"></i> Celkem Odehraný čas</h5>
                              <p className="card-text fs-1 fw-bold">{stats.total_playedtime}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                              <h5 className="card-title fs-3"><i className="icon-minecraft icon-minecraft-skull"></i> Celkem se Připojilo</h5>
                              <p className="card-text fs-1 fw-bold">{stats.total_joined}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function formatNumbers(number) {
    return new Intl.NumberFormat('en-US').format(number)
} 

export default Globalstats;