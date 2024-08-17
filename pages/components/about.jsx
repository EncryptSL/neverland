import React from "react";
import Image from "next/image";

const About = () => {

    return (
        <section id="aboutserver" className="p-5 about-server">
            <div className="container mt-4">
                <h1 className="title">O NÁS</h1>
                <div className="row">
                    <div className="col-lg-5">
                        <div className="figure">
                            <Image src={"/assets/clear_skin.png"} priority alt="img" decoding="async" height="377" width="450" /> 
                        </div>
                    </div>
                    <div className="col-lg-7 d-flex">
                        <div className="content">
                            <h2>Něco málo o Serveru</h2>
                            <p>
                                Minecraft Server ArcadiaMc, patří do skupiny <span className="fw-bold">ekonomického</span>, <span className="fw-bold">semi-rpg</span> a <span className="fw-bold">survival</span> serveru.
                                Naším cílem je nabídnout hráčům, <span className="fw-bold">klidnou komunitu</span> a přátelský přístup.
                                Můžeme se pyšnit odladěnou ekonomikou, <span className="fw-bold">denními odměny</span>, pravidelné <span className="fw-bold">automatické eventy</span> které potřebují hráčskou spolupráci.
                                Najdeš zde residence, <span className="fw-bold">tagy, magické boxy, mob arénu</span> s upravenými odměny.
                                Tak neváhej a zkus si zahrát.
                            </p>
                            <div className="server-stats">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <span className="icon"><i className="fa-solid fa-user"></i></span>
                                        <h3>0</h3>
                                        <p>Připojilo se celkem</p>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <span className="icon"><i className="fa-solid fa-gamepad"></i></span>
                                        <h3>3h +</h3>
                                        <p>Průměrně strávený čas</p>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <span className="icon"><i className="fa-regular fa-clock"></i></span>
                                        <h3>0</h3>
                                        <p>Online hráčů denně</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About