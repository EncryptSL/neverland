import React from "react";
import useSWR from "swr";
import Loading from "../ui/loading";
import Badge from "../ui/badge";

const fetcher = url => fetch(url).then(r => r.json())

const Admins = () => {

    const { data } = useSWR('/api/admins', fetcher)

    return (
        <>
            <h2 className="mb-0 text-center text-white">Administrátoři</h2>
            <div className="row mb-4 justify-content-center text-center">
                { data && data["admins"].map(record => {
                    <div className="col-md-4 my-2" key={record.id}>
                        <div className="card text-bg-secondary mb-3">
                            <div className="card-body">
                              <img className={record.background} src={`https://visage.surgeplay.com/bust/${record.uuid}.png?y=-40`} loading="lazy" alt={record.uuid} height={150} width={150} />
                              <h5 className="card-title">{record.username}</h5>
                              <Badge color={record.badge_color} text={record.badge_text} />
                              <blockquote className="blockquote"><p>{record?.description}</p></blockquote>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default Admins;