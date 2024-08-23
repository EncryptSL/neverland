import React from "react";
import Avatar from "../../../avatar";

const MinersTable = ({data}) => {

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">HRÁČ</th>
                  <th scope="col">VYTĚŽIL</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.miners.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th>{e?.id}</th>
                                <th><Avatar id={e?.uuid} alt={e?.username} width={24} height={24} /> {e?.username}</th>
                                <td>{e?.mined_blocks}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default MinersTable;