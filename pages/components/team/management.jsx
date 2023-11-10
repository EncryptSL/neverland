import React from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json())

const Management = () => {
    const { data:team } = useSWR('api/admins', fetcher)
    return (
        <>
            <h2 className="mb-0 text-center text-white">Vedení</h2>
            <div className="row mb-4 justify-content-center">
            {
             team && team["management"].map(record => {
                return (
                    <div class="col-md-6 col-lg-4 mb-30" key={record.id}>
                        <div class="team-item">
                            <div class="mb-30 position-relative d-flex align-items-center">
                                    <span class="socials d-inline-block">
                                        <a href="#" class="fa-brands fa-instagram"></a>
                                        <a href="#" class="fa-brands fa-youtube"></a>
                                        <a href="#" class="fa-brands fa-twitch"></a>
                                    </span>
                                <span class="img-holder d-inline-block">
                                    <img className={record.background} src={`https://visage.surgeplay.com/bust/${record.uuid}.png?y=-40`} alt={record.uuid} />
                                </span>
                            </div>
                            <div class="team-content">
                                <h5 class="mb-2">{record.username}</h5>
                                <p class={`text-uppercase mb-0 badge ${record.badge_color}`}>{record.description}</p>
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

export default Management;