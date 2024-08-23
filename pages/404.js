import Image from "next/image";

export default function Custom404() {
    return (
        <section className="bg-dark text-light">
            <div className="container vh-100 w-50">
                <div className="row d-flex h-75 align-items-center justify-content-center">
                    <div className="col-lg-6 d-flex">
                        <div>
                            <h1 className="fw-1 fw-bold">Jejda !</h1>
                            <p>404 - Not found</p>
                            <p>Požadovaná stránka nebyla nalezena, pokud myslíte že je to chyba kontaktujte správce serveru.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <Image src={"/assets/404.png"} className="avatar" priority decoding="async" alt="404" height={350} width={350} title="404 - Not found" />
                    </div>
                </div>
            </div>
        </section>
    );
}