import React from "react";
import Subnav from "../../components/shop/subnav";
import {getRankBundles} from "../../../libs/shop/ranks"

export default function ranks({ranks}) {
    return (
        <section className="p-5 shop">
            <div className="container">
                <Subnav />
                <h2 className="text-center">Ranky a Výhody</h2>
                    <div className="row justify-content-center">
                        {ranks.map(rank => (
                        <div className="col-lg-3 mb-3">
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
            </div>
        </section>
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