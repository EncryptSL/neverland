import React from "react";
import axios from "axios";
import Subnav from "../../components/stats/subnav";
import MinersTable from "../../components/stats/leaderboard/survival/MinersTable";
import Status from "../../components/status/status";

const Miners = ({data}) => {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 HORNÍKŮ</h1>
                <p className="fs-5 text-white">
                  Celkem vytěžených bloků {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <MinersTable data={data} />
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/blocks`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default Miners