export default function Time({time}) {
    const date = new Date(time)
    const dateTime = new Intl.DateTimeFormat('cs-CZ', {dateStyle: 'full', timeStyle: 'short'}).format(date)

    return dateTime
}