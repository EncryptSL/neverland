import React from "react"
import axios from "axios"
import Image from "next/image"

const PlayerStats = ({ player }) => {

    return (
        <>
            <section className="p-5 stats-hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 d-md-flex align-items-md-center">
                            <div className="py-4 py-md-0">
                                <div className="font-size-h2 mb-2">
                                    <h1>{player.username}</h1>
                                </div>
                                <div className="mb-0">
                                    <div className="hstack gap-1">
                                        <span className={"badge " + badges(player.primary_group)}>{player.primary_group.toUpperCase()}</span>
                                        <span className="badge bg-secondary">LEVEL {player.level}</span>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-3 bg-light">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-xl-4">
                            <div className="card mb-3 text-center">
                                <div className="card-header text-bg-primary fw-bold">AKTUÁLNÍ SKIN</div>
                                <div className="card-body">
                                    <Image src={"https://visage.surgeplay.com/full/200/" + player.uuid} className="rounded" width={"124"} height={"200"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card mb-3 text-center">
                                <div className="card-header text-bg-success fw-bold">ZÁKLADNÍ STATISTIKY</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="font-size-h3 font-w500">
                                                <span>{player.mined_blocks}</span>
                                            </div>
                                            <p className="text-muted mt-2 mb-0 fw-bold">Zničené bloky</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="font-size-h3 font-w500">
                                                <span>{player.kills}</span>
                                            </div>
                                            <p className="text-muted mt-2 mb-0 fw-bold">Zabití</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="font-size-h3 font-w500">
                                                <span>{player.deaths}</span>
                                            </div>
                                            <p className="text-muted mt-2 mb-0 fw-bold">Úmrtí</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 text-center">
                                <div className="card-header text-bg-success fw-bold">EKONOMICKÉ STATISTIKY</div>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-4">
                                            <div className="font-size-h3 font-w500">
                                                <span>{player.credit}</span>
                                            </div>
                                            <p className="text-muted mt-2 mb-0 fw-bold">Kreditů</p>
                                        </div>
                                        <div className="col-4">
                                            <div className="font-size-h3 font-w500">
                                                <span>{player.money}</span>
                                            </div>
                                            <p className="text-muted mt-2 mb-0 fw-bold">Peníze</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-6">
                            <div className="card mb-3 text-center">
                                <div className="card-header text-bg-success fw-bold">HLASOVÁNÍ</div>
                                    <div className="card-body">
                                        <table class="table table-striped table-hover">
                                            <tbody>
                                              <tr>
                                                <td className="text-start">Celkem hlasů</td>
                                                <td className="text-center">{player.votes}</td>
                                              </tr>
                                              <tr>
                                                <td className="text-start">Poslední hlasování</td>
                                                <td className="text-center">
                                                    {new Intl.DateTimeFormat('cs-CZ', { dateStyle: 'full', timeStyle: 'short'}).format(new Date(player.last_vote))}
                                                </td>
                                              </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

function badges(group) {
    if (group == "owner") {
        return "text-bg-danger";
    } else if (group == "developer") {
        return "text-bg-warning";
    } else if (group == "admin") {
        return "text-bg-primary";
    } else if (group == "moderator") {
        return "text-bg-success";
    }

}

export async function getStaticPaths() {
    const response = await axios.get('//encryptsl.cekuj.net/api/minecraft/stats/players')
    const data = await response.data
    return {
        paths : data.map(p => (
            {
                params: { nickname : p.username }
            }
        )),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const response = await axios.get(`//encryptsl.cekuj.net/api/minecraft/player/${params.nickname}`)
    const player = await response.data[0]
    return {
        props: {
            player
        },
        revalidate: 1,
    }
}

export default PlayerStats;