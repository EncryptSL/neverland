import axios from "axios";
import Subnav from "../../components/stats/subnav";
import Status from "../../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../../components/ui/loading";

const DynamicPlayTimeTable = dynamic(() => import("../../components/stats/leaderboard/survival/PlaytimeTable"), {
    loading: () => <Loading />
})

export default function Playtime({data}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 NEJAKTIVNĚJŠÍCH HRÁČŮ</h1>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicPlayTimeTable data={data} />
                </div>
            </section>
            <Status />
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