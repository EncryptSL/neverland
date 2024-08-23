export const fetchMinecraftStatistics = async(endpoint) => {
    const res = fetch(
        `https://encryptsl.cekuj.net/api/${endpoint}`, { next: { revalidate: 3600 } }
    )
    const data = (await res).json()
    
    return data
}