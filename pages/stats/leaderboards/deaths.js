import React from "react";
import axios from "axios";
import Subnav from "../../components/stats/subnav";
import DeathsTable from "../../components/stats/leaderboard/survival/DeathsTable";
import Status from "../../components/status/status";

const Deaths = ({data}) => {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">TOP 30 SMOLAŘŮ</h1>
                <p className="fs-5 text-white">
                  Celkem úmrtí {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DeathsTable data={data} />
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/deaths`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default Deaths;