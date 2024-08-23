import axios from "axios";
import Subnav from "../../components/stats/subnav";
import Status from "../../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../../components/ui/loading";
import { fetchMinecraftStatistics } from "../../../actions/fetchMinecraftStatistics";


const DynamicDeathsTable = dynamic(() => import("../../components/stats/leaderboard/survival/DeathsTable"), {
    loading: () => <Loading />
})

export default function Deaths({data}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 SMOLAŘŮ</h1>
                <p className="fs-5 text-white">
                  Celkem úmrtí {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicDeathsTable data={data} />
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetchMinecraftStatistics('minecraft/stats/deaths')
    const data = res
   
    return {
      props: { data },
    };
};