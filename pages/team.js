"use-client"

import React, { Suspense } from "react";
import Admins from "./components/team/admins";
import Management from "./components/team/management";
import Moderators from "./components/team/moderators";
import Status from "./components/status/status";
import Loading from "./components/ui/loading";

export default function team() {
    return (
        <>
            <section className="py-5 background-content">
                <div className="container">
                    <div className="row">
                        <div className="col-12k">
                            <div className="section-title title-left text-center text-lg-left">
                                <h1 className="top-sep text-dark title">Admin Tým</h1>
                            </div>
                        </div>
                    </div>
                    <Suspense fallback={<Loading />}>
                        <div className="row justify-content-center">
                            <Management />
                            <Moderators />
                        </div>
                    </Suspense>
                </div>
            </section>
            <Status />
        </>
    )
}