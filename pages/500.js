import Image from "next/image";

export default function Custom500() {
    return (
        <section className="bg-dark text-light">
            <div className="container vh-100 w-50 p-5">
                <div className="row h-75 d-flex align-items-center justify-content-center">
                    <div className="col-lg-6 d-flex">
                        <div>
                            <h1 className="fw-1 fw-bold">Jejda !</h1>
                            <p>500 - Internal server error</p>
                            <p>Zase se někdo hrabal kde neměl, pokud myslíte že je to chyba kontaktujte správce serveru.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <Image src={"/assets/404.png"} decoding="async" alt="404" height={350} width={350} title="404 - Not found" quality={50} style={{transform: rotate('-12deg')}} />
                    </div>
                </div>
            </div>
        </section>
    );
}
