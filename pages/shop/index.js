import React from "react";
import Subnav from "../components/shop/subnav";
import {getCategories} from "../../libs/shop/categories"

export default function shop({categories}) {
    return (
        <section className="p-5">
            <div className="container">
                <Subnav />
                <div className="alert alert-info mb-3" role="alert">
                  Obchod NeverLand je pouze přehled nabízeních balíčků a ranků.
                </div>
                <h1 className="text-center">SHOP KATEGORIE</h1>
                <div className="row justify-content-center">
                  {categories.map(data => (
                      <div className="col-lg-3 mb-3" key={data.id}>
                          <div className="card">
                            <a href={data.url}><img src={data.thumbnail} className="card-img-top" alt={"img-" + data.title} style={{width:100 + '%!important'}} /></a>
                            <div className="card-body">
                              <h5 className="card-title"><a href={data.url}>{data.title}</a></h5>
                            </div>
                          </div>
                      </div>
                  ))}
                </div>

                <div className="text-start">
                    <p className="fw-bold">This page not affiliated with Mojang or Microsoft.*</p>
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    const categories = getCategories();

    return {
      props: {
        categories,
      },
    };
}