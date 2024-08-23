'use-client'

import React from "react";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react"
import Image from "next/image";
import Pagination from "../components/banlist/pagination";
import Status from "../components/status/status";

function bansBadges($type) {
    if ($type === "Zrušen")
        return (<span className="badge bg-info">{$type}</span>)
    else if ($type === "Permanentní")
        return (<span className="badge bg-danger">{$type}</span>)
    else 
        return $type
}

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

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                          <th scope="col">Hráč</th>
                          <th scope="col">Admin</th>
                          <th scope="col">Datum Vytvoření</th>
                          <th scope="col">Důvod</th>
                          <th scope="col">Stav</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.bans.map(e => {
                                return (
                                    <tr key={e?.id}>
                                        <th><Image src={"https://visage.surgeplay.com/face/" + e?.uuid} alt={e?.username} title={e?.username} width="24" height="24" /> {e?.username}</th>
                                        <td><Image src={"https://visage.surgeplay.com/face/" + e?.banned_by_uuid} alt={e?.banned_by_name} title={e?.banned_by_name} width="24" height="24" /> {e?.banned_by_name}</td>
                                        <td>{e?.created_at}</td>
                                        <td>{e?.reason}</td>
                                        <td>{bansBadges(e?.expire)}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
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
    const res = await axios.get(`//encryptsl.cekuj.net/api/minecraft/banlist/`)
    const data = res.data
   
    return {
      props: { data },
    };
};