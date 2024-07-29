import React from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())

const Moderators = () => {
    const { data:team } = useSWR('api/admins', fetcher)
    return (
        <>
            <h2 className="mb-0 text-center text-white">Moderátoři</h2>
            <div className="row mb-4 justify-content-center text-center">
            {
             team && team["moderators"].map(record => {
                return (
                    <div className="col-md-4 my-2">
                        <div className="card text-bg-secondary mb-3" key={record.id}>
                            <div className="card-body">
                              <img className={record.background} src={`https://visage.surgeplay.com/bust/${record.uuid}.png?y=-40`} loading="lazy" alt={record.uuid} height={150} width={150} />
                              <h5 className="card-title">{record.username}</h5>
                              <p className={`text-uppercase mb-0 badge ${record.badge_color}`}>{record.badge_text}</p>
                            </div>
                        </div>
                    </div>
             )})
            }
            </div>
        </>
    )
}

function socialButtons(link, btnName, clazzName) {
    if (link === undefined)
        return ``
    else if (link === "#")
        return ``
    else
        return (<a className={"btn btn-sm m-1 " + clazzName} target="_blank" href={link} title={btnName} rel="noreferrer" role="button"><i className={"bi bi-" + btnName.toLowerCase()}></i></a>)
}

export default Moderators;