import React from "react";
import axios from "axios";
import VotesTable from "../../../components/stats/leaderboard/VotesTable";
import Subnav from "../../../components/stats/subnav";
import Status from "../../../components/status/status";

export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/votes`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default function Votes({data}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 HLASUJÍCÍCH</h1>
                <p className="fs-5 text-white">
                  Celkem hlasů {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <VotesTable data={data} />
                </div>
            </section>
            <Status />
        </>
    )
}