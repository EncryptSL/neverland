import React from "react";
import Avatar from "../../../avatar";

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
                    data && data.balances.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th>{e?.id}</th>
                                <th><Avatar id={e?.uuid} alt={e?.username} width={24} height={24} /> {e?.username}</th>
                                <td>${e?.money}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default MoneyTable;