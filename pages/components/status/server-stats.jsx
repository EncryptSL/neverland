import { useEffect, useState } from "react"

export default function ServerStatistics() {

    const [statistics, setStatisctics] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch("https://encryptsl.cekuj.net/api/minecraft/stats/server").then((res) => res.json()).then((status) => {
        setStatisctics(status)
        setLoading(false)
      })
    }, [])

    if (isLoading) return (
        <>
            <div className="server-stats"><p>Načítání dat....</p></div>
        </>
      )
    if (!statistics) return (
      <>
        <div className="server-stats">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                    <h3>0</h3>
                    <p>Připojilo se celkem</p>
                </div>
                <div className="col-md-4 mb-3">
                    <span className="icon"><i className="fa-solid fa-gamepad"></i></span>
                    <h3>0</h3>
                    <p>Průměrně strávený čas</p>
                </div>
                <div className="col-md-4 mb-3">
                    <span className="icon"><i className="fa-regular fa-clock"></i></span>
                    <h3>0</h3>
                    <p>Online hráčů denně</p>
                </div>
            </div>
        </div>
      </>
    )

    return (
        <div className="server-stats">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <span className="icon"><i className="fa-solid fa-user"></i></span>
                    <h3>{statistics?.total_joined}</h3>
                    <p>Připojilo se celkem</p>
                </div>
                <div className="col-md-4 mb-3">
                    <span className="icon"><i className="fa-solid fa-gamepad"></i></span>
                    <h3>{statistics?.total_average_playedtime}</h3>
                    <p>Průměrně strávený čas</p>
                </div>
                <div className="col-md-4 mb-3">
                    <span className="icon"><i className="fa-regular fa-clock"></i></span>
                    <h3>{statistics?.total_average_joins}</h3>
                    <p>Online hráčů denně</p>
                </div>
            </div>
        </div>
    )
}