import React from "react";
import Image from "next/image";
import Link from "next/link";
import Management from "./team/management";
import Moderators from "./team/moderators";
import Admins from "./team/admins";

const Team = () => {
    return (
        <section id="adminteam" className="p-5 member-background">
        <div className="container">
            <h2 className="text-center text-white">ADMIN TÝM</h2>
            <p className="lead text-center text-white mb-5"><span id="membersInList"></span></p>
            <Management />
            <Admins />
            <Moderators />
        </div>
      </section>
    )
}
export default Team;