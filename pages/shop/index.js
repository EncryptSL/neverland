import React, { Suspense } from "react";
import Subnav from "../components/shop/subnav";
import {getCategories} from "../../libs/shop/categories"
import Status from "../components/status/status";
import Loading from "../components/ui/loading";

export default function shop({categories}) {
  return (
    <>
      <section className="p-5 shop">
          <div className="container">
              <Subnav />
              <div className="alert alert-info mb-3 text-center" role="alert">
                <i className="fa-solid fa-circle-info"></i> Obchod ArcadiaMC je pouze přehled nabízeních balíčků a ranků.
              </div>
              <h1 className="title">SHOP KATEGORIE</h1>
              <div className="row justify-content-center text-center">
                <Suspense fallback={<Loading />}>
                {categories.map(data => (
                    <div className="col-lg-3 mb-3 grow" key={data.id}>
                        <a href={data.url}><img src={data.thumbnail} className="card-img-top" alt={"img-" + data.title} style={{width:100 + '%!important'}} /></a>
                    </div>
                ))}
                </Suspense>
              </div>
          </div>
      </section>
      <Status />
    </>
  )
};

export async function getServerSideProps() {
  const categories = getCategories();

  return {
    props: {
      categories,
    },
  };
}