import React from "react";
import Subnav from "../components/shop/subnav";
import {getCategories} from "../../libs/shop/categories"

const shop = ({categories}) => {
    return (
        <section className="p-5 shop">
            <div className="container">
                <Subnav />
                <div className="alert alert-info mb-3" role="alert">
                  Obchod NeverLand je pouze přehled nabízeních balíčků a ranků.
                </div>
                <h1 className="text-center">SHOP KATEGORIE</h1>
                <div className="row justify-content-center text-center">
                  {categories.map(data => (
                      <div className="col-lg-3 mb-3" key={data.id}>
                          <div className="card text-bg-light">
                            <div className="card-body">
                              <a href={data.url}><img src={data.thumbnail} className="card-img-top" alt={"img-" + data.title} style={{width:100 + '%!important'}} /></a>
                              <h5 className="card-title text-uppercase my-3"><a className="text-decoration-none" href={data.url}>{data.title}</a></h5>
                            </div>
                          </div>
                      </div>
                  ))}
                </div>
            </div>
        </section>
    )
}

export async function getServerSideProps() {
    const categories = getCategories();

    return {
      props: {
        categories,
      },
    };
}

export default shop;