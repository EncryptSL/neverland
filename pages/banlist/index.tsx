import Link from "next/link";
import { Suspense, useState } from "react"
import Pagination from "../components/banlist/pagination";
import Status from "../components/status/status";
import { fetchMinecraftStatistics } from "../../actions/fetchMinecraftStatistics";
import dynamic from "next/dynamic";
import Loading from "../components/ui/loading";

const DynamicBanlistTable = dynamic(() => import('../components/banlist/BanlistTable'), {
    loading: () => <Loading />,
})

export default function Banlist({data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;
   
    const onPageChange = (page) => {
      setCurrentPage(page);
    };

    return (
        <>
            <section className="hero bg-header text-light p-5 p-lg-3 pt-lg-5 text-center default">
                <div className="container">
                    <h1 className="text-center">Banlist</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-white">Zde najdeš seznam všech zlobivců a jejich hříchy</p>
                </div>
            </section>
            <section className="p-5 container">
                <div className="alert alert-primary" role="alert">
                    <span>
                        <i className="fa-solid fa-circle-info"></i> Pokud jsi byl zabanován neprávem podej si žádost na <Link className="link-offset-2 link-underline link-underline-opacity-0" href={"/#discord"}>Discord</Link>.
                    </span>
                </div>
                <h1 className="title">Přehled trestů</h1>
                <DynamicBanlistTable data={data} />
                <Pagination
                    items={data.query.total_bans} // 100
                    currentPage={currentPage} // 1
                    pageSize={pageSize} // 10
                    onPageChange={onPageChange}
                />
            </section>
            <Status />
        </>
    )
}

export async function getServerSideProps() {
    const res = await fetchMinecraftStatistics('/minecraft/banlist')
    const data = res
   
    return {
      props: { data },
    };
};