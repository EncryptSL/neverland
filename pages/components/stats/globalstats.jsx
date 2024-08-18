import React, { useEffect, useState } from "react"
import axios from "axios";
import Loading from "../ui/loading";
import DataMissing from "../ui/error/DataMissing";

const Globalstats = () => {

    const [craftListData, setCraftListData] = useState(null)
    const [czechCraftData, setCzechCraftData] = useState(null)
    const [stats, setStats] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      axios.get('//encryptsl.cekuj.net/api/minecraft/stats/server').then((res) => res.data)
        .then((status) => {
          setStats(status)
          setLoading(false)
        })
        axios.get('//encryptsl.cekuj.net/api/minecraft/stats/craftlist').then((res) => res.data)
        .then((status) => {
          setCraftListData(status)
          setLoading(false)
        })
        axios.get('//encryptsl.cekuj.net/api/minecraft/stats/czechcraft').then((res) => res.data)
        .then((status) => {
          setCzechCraftData(status)
          setLoading(false)
        })
    }, [])

    if (isLoading) return (
        <>
          <Loading/>
        </>
      )
    if (!stats) return (
      <>
        <DataMissing />
      </>
    )

    return (
      <>
        <h2 className="title">Přehled</h2>
        <div className="row g-2 d-flex mb-3">
          <div className="col-sm-4">
              <div className="card border-dark">
                <div className="card-header text-center text-bg-dark"><h4 className="my-0 fw-normal">CraftList - Měsíční Hlasování</h4></div>
                  <div className="card-body text-bg-light">
                    <h5 className="text-center">TOP 5</h5>
                    <table className="table table-striped table-hover">
                        <tbody>
                            {
                                craftListData && craftListData.votes.slice(0, 5).map(e => {
                                    return (
                                        <tr key={e?.id}>
                                            <th>{e?.id}</th>
                                            <th>{e?.username}</th>
                                            <td>{e?.votes}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="text-center">
                        <a href="/stats/leaderboards/votes/craftlist-month" className="btn btn-sm btn-primary">ZOBRAZIT VŠE</a>
                    </div>
                  </div>
              </div>
            </div>

          <div className="col-sm-4">
              <div className="card border-dark">
                <div className="card-header text-center text-bg-dark"><h4 className="my-0 fw-normal">CzechCraft - Měsíční Hlasování</h4></div>
                  <div className="card-body text-bg-light">
                    <h5 className="text-center">TOP 5</h5>
                    <table className="table table-striped table-hover">
                        <tbody>
                            {
                                czechCraftData && czechCraftData.votes.slice(0, 5).map(e => {
                                    return (
                                        <tr key={e?.id}>
                                            <th>{e?.id}</th>
                                            <th>{e?.username}</th>
                                            <td>{e?.vote}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="text-center">
                        <a href="/stats/leaderboards/votes/czechcraft-month" className="btn btn-sm btn-primary">ZOBRAZIT VŠE</a>
                    </div>
                  </div>
              </div>
            </div>
        </div>
                
        <h2 className="title">Souhrné Statistiky</h2>
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
        </>
    )
}

function formatNumbers(number) {
    return new Intl.NumberFormat('en-US').format(number)
} 

export default Globalstats;