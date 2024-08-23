import Subnav from "../../../components/stats/subnav";
import Status from "../../../components/status/status";
import Loading from "../../../components/ui/loading";
import dynamic from "next/dynamic";
import { fetchMinecraftStatistics } from "../../../../actions/fetchMinecraftStatistics";

const DynamicVotesTable = dynamic(() => import('../../../components/stats/leaderboard/VotesTable'), {
    loading: () => <Loading />,
})

export default function Votes({data}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 HLASUJÍCÍCH</h1>
                <p className="fs-5 text-white">
                    Celkem hlasů {data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicVotesTable data={data} />
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetchMinecraftStatistics("minecraft/stats/votes")
    const data = res
   
    return {
      props: { data },
    };
};