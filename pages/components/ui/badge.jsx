export default function Badge({color, text}) {
    return(<p className={`text-uppercase mb-0 badge ${color}`}>{text}</p>)
}