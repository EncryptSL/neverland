import React from "react";
import { useState, useEffect } from "react"
import Image from "next/image";

const Players = () => {
    const [status, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      axios.get('//api.mcstatus.io/v2/status/java/salmon.hostify.cz:51090').then((res) => res.data)
        .then((status) => {
          setData(status.players.list)
          console.log(status.players.list)
          setLoading(false)
        })
    }, [])

    if (isLoading) return (
        <>
          <div className="container text-center">Načítání</div>
        </>
      )
    if (!status) return <p>No server data</p>

    return (
        <section className="text-center p-5 bg-secondary">
            <div className="container">
                {status.map((player) => (
                    <Image key={player.uuid} className="rounded-circle" src={`https://crafatar.com/avatars/${player.uuid}`} alt={`img-${player.name_clean}`} title={player.name_clean} height={64} width={64}/>
                ))}
            </div>
        </section>
    )
}

export default Players;