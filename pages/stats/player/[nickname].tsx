import React from "react"
import axios from "axios"
import Status from "../../components/status/status";
import Player from "../../components/stats/player";

export default function PlayerStats({player}) {
    return (
        <>
            <Player player={player} />
            <Status />
        </>
    )
}

export async function getServerSideProps({params}) {
    const response = await axios.get(`https://encryptsl.cekuj.net/api/minecraft/player/${params.nickname}`)
    const player = await response.data[0]
    return {
        props: {
            player: player
        }
    }
}
