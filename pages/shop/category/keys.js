import React from "react"
import Subnav from "../../components/shop/subnav";
import {getKeyBundles} from "../../../libs/shop/keys"

export default function keys({bundles}) {
    return (
        <section className="p-5 shop">
            <div className="container">
                <Subnav />
                <h2 className="text-center">Galaktické Klíče</h2>

                <div className="row mt-1">
                    {bundles.map(bundle =>  (
                        <div className="col-lg-3 mb-3">
                            <div className="card border-primary">
                              <img src="/assets/galactic_keys.webp" className="card-img-top" alt={bundle.title} />
                                <div className="card-header py-3 text-center text-bg-primary border-primary"><h4 className="my-0 fw-normal">{bundle.title}</h4></div>
                              <div className="card-body text-bg-light">
                                <p className="card-text">
                                    Cena: <span className="fw-bold">{bundle?.price}</span>
                                </p>
                                <div className="d-grid gap-2">
                                    <a href={bundle?.pay_cz} target="_blank" role="button" className="btn btn-success"><i className="fa-solid fa-cart-shopping"></i> KOUPIT CZ</a>
                                    <a href={bundle?.pay_sk} target="_blank" role="button" className="btn btn-warning"><i className="fa-solid fa-cart-shopping"></i> KOUPIT SK</a>
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
    const bundles = getKeyBundles()

    return {
      props: {
        bundles,
      },
    };
}