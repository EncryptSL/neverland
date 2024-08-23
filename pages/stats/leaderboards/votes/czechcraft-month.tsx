import axios from "axios";
import Subnav from "../../../components/stats/subnav";
import Status from "../../../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../../../components/ui/loading";
import { fetchMinecraftStatistics } from "../../../../actions/fetchMinecraftStatistics";
import { Suspense } from "react";
import { redirect } from "next/dist/server/api-utils";
import { notFound } from "next/navigation";

const DynamicCzechCraftTable = dynamic(() => import('../../../components/stats/leaderboard/votifier/months/CzechCraftTable'), {
    loading: () => <Loading />,
})

export default function czechcraft({data}) {
    return (
        <>  
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">TOP 30 MĚSÍČNÍCH HLASUJÍCÍCH CZECH-CRAFT</h1>
                <p className="fs-5 text-white">
                  Celkem hlasů za měsíc {data?.query?.total ? data?.query?.total : 0}
                </p>
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <Suspense fallback={<Loading></Loading>}>
                    <   DynamicCzechCraftTable data={data} />
                    </Suspense>
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetchMinecraftStatistics("minecraft/stats/czechcraft")
        const data = res
        
        return {
            props: { data }
        }
    } catch (error) {
        throw new Error('Internal Server Error');
    }
};