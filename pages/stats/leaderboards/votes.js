import React from "react";
import VotesTable from "../../components/stats/leaderboard/VotesTable";
import Subnav from "../../components/stats/subnav";
import axios from "axios";
import Status from "../../components/status/status";

const Votes = ({data}) => {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">TOP 30 HLASUJÍCÍCH</h1>
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

export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/votes`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default Votes