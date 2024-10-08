import Image from "next/image"
import Time from "../../../../ui/time"

export default function CraftListTable({data}) {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">HRÁČ</th>
                  <th scope="col">HLASY</th>
                  <th scope="col">SKÓRE</th>
                  <th scope="col">POSLEDNÍ HLASOVÁNÍ</th>
                  <th scope="col">DALŠÍ HLASOVÁNÍ</th>
                </tr>
            </thead>
            <tbody>
                {
                    data && data?.votes?.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th>{e?.id}</th>
                                <th><Image src={"https://visage.surgeplay.com/face/" + e?.username} decoding="async" alt={e?.username} title={e?.username} width="24" height="24" /> {e?.username}</th>
                                <td>{e?.votes}</td>
                                <td>{e?.score}</td>
                                <td><Time time={e?.last_vote} /></td>
                                <td><Time time={e?.next_vote} /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}