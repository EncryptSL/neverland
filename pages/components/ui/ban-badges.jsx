export default function BanBadges({type}) {
    if (type === "Zrušen")
        return (<span className="badge bg-info">{type}</span>)
    else if (type === "Permanentní")
        return (<span className="badge bg-danger">{type}</span>)
    else 
        return type
}