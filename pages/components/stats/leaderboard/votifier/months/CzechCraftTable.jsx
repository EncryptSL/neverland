import Image from "next/image"
import DataMissing from "../../../../ui/error/DataMissing"

export default function CzechCraftTable({data}) {

    if (data.error && data.error) {
        return <DataMissing />
    }

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
                {
                    data && data?.votes?.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th>{e?.id}</th>
                                <th><Image src={"https://visage.surgeplay.com/face/" + e?.username} decoding="async" title={e?.username} width="24" height="24"/> {e?.username}</th>
                                <td>{e?.vote}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}