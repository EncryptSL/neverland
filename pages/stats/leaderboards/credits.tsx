import Subnav from "../../components/stats/subnav";
import Status from "../../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../../components/ui/loading";
import { fetchMinecraftStatistics } from "../../../actions/fetchMinecraftStatistics";

const DynamicCreditsTable = dynamic(() => import("../../components/stats/leaderboard/economy/CreditsTable"), {
    loading: () => <Loading />
})

export default function Credits({data}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 NEJBOHATŠÍCH S KREDITY</h1>
                <p className="fs-5 text-white">
                  Celkem kreditů {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicCreditsTable data={data} />
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetchMinecraftStatistics('minecraft/stats/credits')
    const data = res
   
    return {
      props: { data },
    };
};