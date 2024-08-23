import React from "react"
import Avatar from "../../../avatar"

const PlaytimeTable = ({data}) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">HRÁČ</th>
                    <th scope="col">AKTIVITA</th>
                    <th scope="col">PRVNÍ PŘIPOJENÍ</th>
                    <th scope="col">POSLEDNÍ PŘIPOJENÍ</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.playedtimes.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th>{e?.id}</th>
                                <th><Avatar id={e?.uuid} alt={e?.username} width={24} height={24} />{e?.username}</th>
                                <td>{e?.playedtime}</td>
                                <td>{new Intl.DateTimeFormat('cs-CZ', { dateStyle: 'full', timeStyle: 'short'}).format(new Date(e?.first_join))}</td>
                                <td>{new Intl.DateTimeFormat('cs-CZ', { dateStyle: 'full', timeStyle: 'short'}).format(new Date(e?.last_join))}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default PlaytimeTable;