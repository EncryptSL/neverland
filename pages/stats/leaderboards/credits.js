import React from "react";
import CreditsTable from "../../components/stats/leaderboard/economy/CreditsTable";
import Subnav from "../../components/stats/subnav";
import axios from "axios";

const Credits = ({data}) => {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">TOP 30 NEJBOHATŠÍCH S KREDITY</h1>
                <p className="fs-5 text-white">
                  Celkem kreditů {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <CreditsTable data={data} />
                </div>
            </section>
        </>
    )
}

export async function getStaticProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/credits`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default Credits