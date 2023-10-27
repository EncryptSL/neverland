import React from "react";
import team from "/json/admins.json"
import Image from "next/image";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())

const Admins = () => {

    const { data:team } = useSWR('api/admins', fetcher)

    return (
        <>
        <h2 className="mb-0 text-center text-white">Administrátoři</h2>
        <div className="row mb-4 justify-content-center">
        {
         team && team["admins"].map(record => {
            return (
            <div className="col-lg-3 text-white" key={record.id}>
            <div className="card team-admins">
                <div className="card-body">
                    <h5 className="card-title text-center">
                        <Image src={"https://visage.surgeplay.com/bust/"+record.uuid} className="rounded-circle" alt={'avt'+record.username} title={record.username} height="100" width="100" /> 
                    </h5>
                    <div className="text-center">
                        <p className="fw-bold">{ record.username }</p>
                        <span className={"badge text-white " + record.badge_color}>{record.description}</span>
                    </div>
                    <div className="text-center">
                        {socialButtons(record.instagram, "Instagram", "btn-secondary")}
                    </div>
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

export default Admins;