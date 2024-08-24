'use-client'

import React, { Suspense } from "react";
import Subnav from "../../components/shop/subnav";
import {getRankBundles} from "../../../libs/shop/ranks"
import Status from "../../components/status/status";
import EulaNotification from "../../components/shop/eula-notification";
import Loading from "../../components/ui/loading";

export default function ranks({ranks}) {
    return (
        <>
            <section className="p-5 shop">
                <div className="container">
                    <Subnav />
                    <EulaNotification />
                    <h2 className="title">Ranky a Výhody</h2>
                    <Suspense fallback={<Loading />}>
                        <div className="row justify-content-center">
                            {ranks.map(rank => (
                                <div className="col-lg-3 mb-3" key={rank.order}>
                                    <div className="card border-primary">
                                        <div className="card-header py-3 text-center text-bg-primary"><h4 className="my-0 fw-normal">{rank.title}</h4></div>
                                        <div className="card-body text-bg-light">
                                          <h5 className="card-title text-center">{rank.price}</h5>
                                          <div className="card-text" dangerouslySetInnerHTML={{ __html: rank.content }}></div>
                                          <div className="d-grid gap-2">
                                            <a href={rank?.pay_cz} target="_blank" role="button" className="btn btn-success"><i className="fa-solid fa-cart-shopping"></i> KOUPIT CZ</a>
                                            <a href={rank?.pay_sk} target="_blank" role="button" className="btn btn-warning"><i className="fa-solid fa-cart-shopping"></i> KOUPIT SK</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Suspense>
                </div>
            </section>
            <Status />
        </>
    )
}

export async function getStaticProps() {
    const ranks = getRankBundles();

    return {
      props: {
        ranks,
      },
    };
}