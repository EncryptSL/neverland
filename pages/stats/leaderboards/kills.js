import React from "react";
import Subnav from "../../components/stats/subnav";
import KillsTable from "../../components/stats/leaderboard/survival/KillsTable";
import axios from "axios";

const Kills = ({data}) => {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">TOP 30 LOVCŮ</h1>
                <p className="fs-5 text-white">
                  Celkem zabití {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <KillsTable data={data} />
                </div>
            </section>
        </>
    )
}


export async function getStaticProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/kills`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default Kills