import React from "react";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())

const Admins = () => {

    const { data:team } = useSWR('api/admins', fetcher)

    return (
        <>
        <h2 className="mb-0 text-center text-white">Administrátoři</h2>
        <div className="row mb-4 justify-content-center text-center">
        {
         team && team["admins"].map(record => {
            return (
            <div className="col-md-4 my-2" key={record.id}>
                <div className="card text-bg-secondary mb-3">
                    <div className="card-body">
                      <img className={record.background} src={`https://visage.surgeplay.com/bust/${record.uuid}.png?y=-40`} loading="lazy" alt={record.uuid} height={150} width={150} />
                      <h5 className="card-title">{record.username}</h5>
                      <p className={`text-uppercase mb-0 badge ${record.badge_color}`}>{record.badge_text}</p>
                      <p><blockquote class="blockquote">{record?.description}</blockquote></p>
                    </div>
                </div>
            </div>
         )})
        }
        </div>
        </>
    )
}

export default Admins;