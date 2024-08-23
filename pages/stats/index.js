import React, { Suspense } from "react";
import Search from "../components/stats/search";
import Subnav from "../components/stats/subnav";
import Status from "../components/status/status";
import dynamic from "next/dynamic";
import Loading from "../components/ui/loading";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const DynamicGlobalStats = dynamic(() => import("../components/stats/globalstats"), {
    loading: () => <Loading />
})

export default function stats() {
    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis stats-primary-title">Serverové Statistiky</h1>
                <p className="col-lg-8 mx-auto fs-5 text-white">
                  Zde najdeš všechny statistiky našeho serveru
                </p>
                <Search />
            </section>
            <Subnav />
            <section className="p-5 stats-content">
                <div className="container">
                    <DynamicGlobalStats />
                </div>
            </section>
            <Status />
            <ToastContainer></ToastContainer>
        </>
    );
}