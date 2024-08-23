import React, { useEffect, useState } from "react"
import axios from "axios";
import Loading from "../ui/loading";
import DataMissing from "../ui/error/DataMissing";
import WidgetVotes from "./global/WidgetVotes";
import WidgetStats from "./global/WidgetStats";



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
            <WidgetVotes data={craftListData} title={"CraftList - Měsíční Hlasování"} link={"/stats/leaderboards/votes/craftlist-month"}></WidgetVotes>
            <WidgetVotes data={czechCraftData} title={"CzechCraft - Měsíční Hlasování"} link={"/stats/leaderboards/votes/czechcraft-month"}></WidgetVotes>
        </div>
                
        <h2 className="title">Souhrné Statistiky</h2>

        <section className="px-lg-5">
            <div className="row gx-lg-5">
                <WidgetStats data={formatNumbers(stats.total_credits)} title={"Kreditů"} className="icon-minecraft-netherite-ingot"></WidgetStats>
                <WidgetStats data={formatNumbers(stats.total_money)} title={"Dolarů"} className="icon-minecraft-gold-block"></WidgetStats>
                <WidgetStats data={formatNumbers(stats.total_votes)} title={"Hlasů"} className="icon-minecraft-emerald-block"></WidgetStats>
                <WidgetStats data={formatNumbers(stats.total_blocks)} title={"Vytěženo Bloků"} className="icon-minecraft-iron-pickaxe"></WidgetStats>
                <WidgetStats data={formatNumbers(stats.total_kills)} title={"Zabitých Mobů"} className="icon-minecraft-wooden-sword"></WidgetStats>
                <WidgetStats data={formatNumbers(stats.total_deaths)} title={"Úmrtí"} className="icon-minecraft-wither-rose"></WidgetStats>
                <WidgetStats data={stats.total_playedtime} title={"Celkový strávený čas"} className="icon-minecraft-clock"></WidgetStats>
                <WidgetStats data={stats.total_joined} title={"Celkem Připojení"} className="icon-minecraft-compass"></WidgetStats>
            </div>
        </section>
        </>
    )
}

function formatNumbers(number) {
    return new Intl.NumberFormat('en-US').format(number)
} 

export default Globalstats;