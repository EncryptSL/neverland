import axios from "axios";
import Subnav from "../../../components/stats/subnav";
import Status from "../../../components/status/status";
import CzechCraftTable from "../../../components/stats/leaderboard/votifier/months/CzechCraftTable";

export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/czechcraft`)
    const stats = res.data
   
    return {
      props: { stats },
    };
};

export default function czechcraft({stats}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 MĚSÍČNÍCH HLASUJÍCÍCH CZECH-CRAFT</h1>
                <p className="fs-5 text-white">
                  Celkem hlasů za měsíc {stats?.query?.total ? stats?.query?.total : 0}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <CzechCraftTable stats={stats} />
                </div>
            </section>
            <Status />
        </>
    )
}