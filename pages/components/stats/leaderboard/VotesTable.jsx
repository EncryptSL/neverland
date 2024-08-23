import React from "react";
import Loading from "../../ui/loading";
import Avatar from "../../avatar";

export default function VotesTable({data}) {

    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">HRÁČ</th>
                  <th scope="col">HLASY</th>
                </tr>
            </thead>
            <tbody>
                {data ? data?.votes?.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th>{e?.id}</th>
                                <th><Avatar id={e?.uuid} alt={e?.username} width={24} height={24} /> {e?.username}</th>
                                <td>{e?.vote}</td>
                            </tr>
                        )
                }) : <Loading />}
            </tbody>
        </table>
    )
}