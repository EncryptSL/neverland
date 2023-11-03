import React from "react";
import Subnav from "../../components/stats/subnav";
import axios from "axios";
import MoneyTable from "../../components/stats/leaderboard/economy/MoneyTable";

const Money = ({data}) => {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">TOP 30 NEJBOHATŠÍCH S DOLLARY</h1>
                <p className="fs-5 text-white">
                  Celkem peněz {data.query.total} $
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <MoneyTable data={data} />
                </div>
            </section>
        </>
    )
}


export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/money`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default Money