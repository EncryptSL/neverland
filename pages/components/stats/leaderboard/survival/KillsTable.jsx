import React from "react"
import Avatar from "../../../avatar"


const KillsTable = ({data}) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">HRÁČ</th>
                  <th scope="col">ZABIL</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.kills.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th>{e?.id}</th>
                                <th><Avatar id={e?.uuid} alt={e?.username} width={24} height={24} /> {e?.username}</th>
                                <td>{e?.kills}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default KillsTable;