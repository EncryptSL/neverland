import BanBadges from "../ui/ban-badges"
import Avatar from "../avatar"

export default function BanlistTable({entries}) {
    return (
        <table className="table table-striped table-hover text-center">
            <thead>
                <tr>
                  <th scope="col">Hráč</th>
                  <th scope="col">Admin</th>
                  <th scope="col">Datum Vytvoření</th>
                  <th scope="col">Důvod</th>
                  <th scope="col">Stav</th>
                </tr>
            </thead>
            <tbody>
                {
                    entries && entries.map((e, index) => {
                        return (
                            <tr key={index}>
                                <th><Avatar id={e?.uuid} alt={e?.username} width={24} height={24} /></th>
                                <th><Avatar id={e?.banned_by_uuid} alt={e?.banned_by_name} width={24} height={24} /></th>
                                <td>{e?.created_at}</td>
                                <td>{e?.reason}</td>
                                <td><BanBadges type={e?.expire}/></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}