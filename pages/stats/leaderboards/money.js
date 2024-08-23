import Subnav from "../../components/stats/subnav";
import axios from "axios";
import Status from "../../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../../components/ui/loading";

const DynamicMoneyTable = dynamic(() => import("../../components/stats/leaderboard/economy/MoneyTable"), {
    loading: () => <Loading />
})

export default function Money({data}) {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 NEJBOHATŠÍCH S DOLLARY</h1>
                <p className="fs-5 text-white">
                  Celkem peněz ${data.query.total}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicMoneyTable data={data} />
                </div>
            </section>
            <Status />
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