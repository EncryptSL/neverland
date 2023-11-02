import React from "react";
import Image from "next/image";

const MoneyTable = ({data}) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">HRÁČ</th>
                  <th scope="col">PENÍZE</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data.balances.map(e => {
                        return (
                            <tr key={e?.id}>
                                <th>{e?.id}</th>
                                <th><Image src={"https://visage.surgeplay.com/face/" + e?.uuid} alt={e?.username} title={e?.username} width="24" height="24" /> {e?.username}</th>
                                <td>{e?.money}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default MoneyTable;