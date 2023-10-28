import React from "react";
import Globalstats from "../components/stats/globalstats";
import Search from "../components/stats/search";

const stats = () => {

    return (
        <>
            <section className="stats-hero p-5 text-center bg-body-tertiary rounded-3">
                <h1 className="text-body-emphasis">Serverové Statistiky</h1>
                <p className="col-lg-8 mx-auto fs-5 text-white">
                  Zde najdeš všechny statistiky našeho serveru
                </p>
                <Search />
            </section>
            <Globalstats />
        </>
    );

}

export default stats;