import React from "react";
import Image from "next/image";

const Discord = () => {
    return (
        <section className="discord-section p-5" id="discord">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>DISCORD</h1>
                        <span className="fw-small">
                            <p>Náš server nabízí provázání discordu s minecraft profilem.</p>
                            <p>Pokud si propojíš discord s minecraft účtem na serveru.</p>
                        </span>
                        <ul>
                            <li>Budete moci získat, speciální denní odměnu, discord.</li>
                            <li>Odemkne se vám místnost kde budete moci pomáhat ostatním s jejich problémy.</li>
                            <li>Přidáním se na discord budete vědět o eventech a akcích dříve než na serveru.</li>
                            <li>Získáte tak i okamžitou podporu dříve než na serveru pokud není admin přítomný na serveru.</li>
                            <li>Za předpokladu že vlastníte VIP, se vám otevře místnost pro VIP hráče a získáte stejno jmenou roli i na DC.</li>
                        </ul>
                        <a href="#" target="_blank" className="btn btn-lg button">PŘIDAT SE NA DISCORD</a>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="discord-img">
                            <Image src={"/assets/villager.webp"} priority decoding="async" alt="discord_villager" width="300" height="306" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Discord