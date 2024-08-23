import axios from "axios";
import Subnav from "../../../components/stats/subnav";
import Status from "../../../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../../../components/ui/loading";

const DynamicCraftListTable = dynamic(() => import('../../../components/stats/leaderboard/votifier/months/CraftListTable'), {
    loading: () => <Loading />,
})

export default function craftlist({stats}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 MĚSÍČNÍCH HLASUJÍCÍCH CRAFTLIST</h1>
                <p className="fs-5 text-white">Celkem hlasů za měsíc {stats.query.total}</p>
                <p className="fs-5 text-white">Celkem skóre za měsíc {stats.query.total_score}</p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicCraftListTable stats={stats} />
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/stats/craftlist`)
    const stats = res.data
   
    return {
      props: { stats },
    };
};