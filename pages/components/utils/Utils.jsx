import React from "react"

function socialButtons(link, btnName, clazzName) {
    if (link === undefined)
        return ``
    else if (link === "#")
        return ``
    else
        return (<a className={"btn btn-sm m-1 " + clazzName} target="_blank" href={link} title={btnName} rel="noreferrer" role="button"><i className={"bi bi-" + btnName.toLowerCase()}></i></a>)
}

function bansBadges($type) {
    if ($type === "Zrušen")
        return (<span className="badge bg-info">{$type}</span>)
    else if ($type === "Permanentní")
        return (<span className="badge bg-danger">{$type}</span>)
    else 
        return $type
}

export default {socialButtons, bansBadges}