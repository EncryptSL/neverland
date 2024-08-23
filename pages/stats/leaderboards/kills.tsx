import Subnav from "../../components/stats/subnav";
import Status from "../../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../../components/ui/loading";
import { fetchMinecraftStatistics } from "../../../actions/fetchMinecraftStatistics";

const DynamicKilsTable = dynamic(() => import("../../components/stats/leaderboard/survival/KillsTable"), {
    loading: () => <Loading />
})

export default function Kills({data}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 LOVCŮ</h1>
                <p className="fs-5 text-white">
                  Celkem zabití {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicKilsTable data={data} />
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetchMinecraftStatistics('minecraft/stats/kills')
    const data = res
   
    return {
      props: { data },
    };
};