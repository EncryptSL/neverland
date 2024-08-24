import Link from "next/link";
import Status from "../components/status/status";
import { fetchMinecraftStatistics } from "../../actions/fetchMinecraftStatistics";
import dynamic from "next/dynamic";
import Loading from "../components/ui/loading";
import PaginationControls from "../components/banlist/PaginationControls";
import { useSearchParams } from "next/navigation";

const DynamicBanlistTable = dynamic(() => import('../components/banlist/BanlistTable'), {
    loading: () => <Loading />,
})


export default function Banlist({data}) {

    const searchParams = useSearchParams()
 
    const page = searchParams.get('page') ?? 1
    const per_page = searchParams.get('per_page') ?? 30
    
    // mocked, skipped and limited in the real app
    const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
    const end = start + Number(per_page) // 5, 10, 15 ...
  
    const entries = data.bans.slice(start, end)

    return (
        <>
            <section className="hero bg-header text-light p-5 p-lg-3 pt-lg-5 text-center default">
                <div className="container">
                    <h1 className="text-center">Banlist</h1>
                    <p className="col-lg-8 mx-auto fs-5 text-white">Zde najdeš seznam všech zlobivců a jejich hříchy</p>
                </div>
            </section>
            <section className="py-5 container">
                <div className="alert alert-primary" role="alert">
                    <span>
                        <i className="fa-solid fa-circle-info"></i> Pokud jsi byl zabanován neprávem podej si žádost na <Link className="link-offset-2 link-underline link-underline-opacity-0" href={"/#discord"}>Discord</Link>.
                    </span>
                </div>
                <h1 className="title">Přehled trestů</h1>
                <DynamicBanlistTable entries={entries} />
                <PaginationControls
                  hasNextPage={end < data.bans.length}
                  hasPrevPage={start > 0}
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
        props: { data }
    }
};