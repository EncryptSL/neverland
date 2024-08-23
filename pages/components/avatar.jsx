export default function Avatar({id, alt, width, height}) {
    return <img src={`https://visage.surgeplay.com/face/${id}`} alt={alt} width={width} height={height} decoding="auto" />
}