import { useState, useEffect } from "react";

export default function Time({time}) {
    const [formattedDate, setFormattedDate] = useState(null);

    useEffect(
      () => setFormattedDate(new Intl.DateTimeFormat('cs-CZ', {dateStyle: 'full', timeStyle: 'short'}).format(new Date(time))),
      []
    );
  
    return formattedDate;
}