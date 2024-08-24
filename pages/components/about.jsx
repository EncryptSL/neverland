import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Loading from "./ui/loading";

const DynamicStatisticComponent = dynamic(() => import('./status/server-stats'), {
    loading: () => "Načítám statistiky..."
})

export default function About() {
    return (
        <section id="aboutserver" className="p-5 about-server">
            <div className="container mt-4">
                <h1 className="title">O NÁS</h1>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="figure">
                            <Image src={"/assets/clear_skin.png"} priority={1} alt="img" decoding="async" height="377" width="530" /> 
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex">
                        <div className="content text-center">
                            <h2>Něco málo o Serveru</h2>
                            <p>Ahojte kamaráti!</p>
                            <p>
                                Chceli by sme vám predstaviť náš ekonomický survival server ArcadiaMC. Nájdete tu <span className="fw-bold">priateľskú komunitu</span> a  skvelý admin team, ktorý vám v prípade núdze veľmi rád pomôže. 
                                Môžete sa tešiť na <span className="fw-bold">denné odmeny, tagy, magické boxy, arény a predovšetkým na eventy</span>, ktoré spájajú našu komunitu a vás ako hráčov. 
                                Neváhajte a prídite si ku nám zahrať a odreagovať sa. 
                            </p>
                            <p>S pozdravom <span className="fw-bold">ArcadiaMC team</span>.</p>
                            <DynamicStatisticComponent />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}