import React from "react";
import Admins from "./components/team/admins";
import Management from "./components/team/management";
import Moderators from "./components/team/moderators";

export default function team() {
    return (
        <>
            <section className="py-5 text-dark member-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title title-left text-center text-lg-left">
                                <h1 className="top-sep text-white">Admin Tým</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <Management />
                        <Moderators />
                    </div>
                </div>
            </section>
        </>
    )
}