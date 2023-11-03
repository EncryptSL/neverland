import React from "react";
import axios from "axios";
import Subnav from "../../components/stats/subnav";
import PlaytimeTable from "../../components/stats/leaderboard/survival/PlaytimeTable";


const Playtime = ({data}) => {

    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">TOP 30 NEJAKTIVNĚJŠÍCH HRÁČŮ</h1>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <PlaytimeTable data={data} />
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/playtime`)
    const data = res.data
   
    return {
      props: { data },
    };
};

export default Playtime;