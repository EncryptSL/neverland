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
        }).catch(error => {
          setLoading(false)
        })
        axios.get('//encryptsl.cekuj.net/api/minecraft/stats/craftlist').then((res) => res.data)
        .then((status) => {
          setCraftListData(status)
          setLoading(false)
        }).catch(error => {
          setLoading(false)
        })
        axios.get('//encryptsl.cekuj.net/api/minecraft/stats/czechcraft').then((res) => res.data)
        .then((status) => {
          setCzechCraftData(status)
          setLoading(false)
        }).catch(error => {
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
        <div className="row g-2 d-flex mb-3 px-lg-5">
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

        <section className="px-lg-5">
            <div className="row gx-lg-5">
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-netherite-ingot"></i></div>
                            <h2 className="fs-4 fw-bold">{formatNumbers(stats.total_credits)}</h2>
                            <p className="mb-0 fs-2">Celkem kreditů</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-gold-block"></i></div>
                            <h2 className="fs-4 fw-bold">{formatNumbers(stats.total_money)}</h2>
                            <p className="mb-0 fs-2">Celkem dollarů</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-emerald-block"></i></div>
                            <h2 className="fs-4 fw-bold">{formatNumbers(stats.total_votes)}</h2>
                            <p className="mb-0 fs-2">Celkem hlasů</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-stone-pickaxe"></i></div>
                            <h2 className="fs-4 fw-bold">{formatNumbers(stats.total_blocks)}</h2>
                            <p className="mb-0 fs-2">Celkem vytěžených bloků</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-wooden-sword"></i></div>
                            <h2 className="fs-4 fw-bold">{formatNumbers(stats.total_kills)}</h2>
                            <p className="mb-0 fs-2">Celkem zabitých mobů</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-wither-rose"></i></div>
                            <h2 className="fs-4 fw-bold">{formatNumbers(stats.total_deaths)}</h2>
                            <p className="mb-0 fs-2">Celkem úmrtí</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-compass"></i></div>
                            <h2 className="fs-4 fw-bold">{stats.total_playedtime}</h2>
                            <p className="mb-0 fs-2">Celkem odehraný čas</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xxl-4 mb-5">
                    <div className="card bg-light border-0 h-100">
                        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="icon-minecraft icon-minecraft-compass"></i></div>
                            <h2 className="fs-4 fw-bold">{stats.total_joined}</h2>
                            <p className="mb-0 fs-2">Celkem se připojilo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

function formatNumbers(number) {
    return new Intl.NumberFormat('en-US').format(number)
} 

export default Globalstats;