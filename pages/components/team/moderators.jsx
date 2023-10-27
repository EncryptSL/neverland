import React from "react";
import Image from "next/image";
import team from "/json/admins.json"
import Utils from "../utils/Utils";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())

const Moderators = () => {
    const { data:team } = useSWR('api/admins', fetcher)
    return (
        <>
            <h2 className="mb-0 text-center text-white">Moderátoři</h2>
            <div className="row mb-4 justify-content-center">
            {
             team && team["moderators"].map(record => {
                return (
                <div className="col-lg-3 text-white" key={record.id}>
                <div className="card team-moderators">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            <Image src={"https://visage.surgeplay.com/bust/"+record.uuid} className="rounded-circle" alt={'avt'+record.username} title={record.username} height="100" width="100" /> 
                        </h5>
                        <div className="text-center">
                            <p>{ record.username }</p>
                            <span className={"badge text-white " + record.badge_color}>{record.description}</span>
                        </div>
                        <div className="text-center">
                            {Utils.socialButtons(record.instagram, "Instagram", "btn-secondary")}
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

export default Moderators;