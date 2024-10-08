import React from "react";
import Image from "next/image";
import useSWR from "swr";
import Loading from "../ui/loading";
import Badge from "../ui/badge";

const fetcher = url => fetch(url).then(r => r.json())

export default function Moderators() {
    const { data } = useSWR('api/admins', fetcher)
    return (
        <>
            <h2 className="mb-0 text-center text-dark">Moderátoři</h2>
            <div className="row mb-4 justify-content-center text-center">
            {data && data["moderators"].map(record => {
                    return (<div className="col-md-4 my-2" key={record.id}>
                        <div className="card text-bg-secondary mb-3">
                            <div className="card-body grow">
                              <Image className={record.background} src={`https://visage.surgeplay.com/bust/${record.uuid}.png?y=-40`} priority quality={50} alt={record.uuid} height={150} width={150} />
                              <h5 className="card-title">{record.username}</h5>
                              <Badge color={record.badge_color} text={record.badge_text} />
                              <blockquote className="blockquote"><p>{record?.description}</p></blockquote>
                            </div>
                        </div>
                    </div>
             )})}
            </div>
        </>
    )
}