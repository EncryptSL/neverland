import React, { useState } from "react";
import Image from "next/image";


export default function Vote() {
  const submitVote = async(event) => {
    event.preventDefault();

    var username = event.target.nick.value;
    if (event.target.service.value == "czech-craft") {
      window.open("https://czech-craft.eu/server/neveland/vote/?user=" + username);
    } else if (event.target.service.value == "craftlist") {
      window.open("https://craftlist.org/neverland?nick=" + username);
    }
};

    return (
        <section id="vote" className="p-5">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                        <form className="flex flex-col" method="post" onSubmit={submitVote}>
                            <label htmlFor="service">Kde chceš Hlasovat
                              <select id="service" className="form-select" name="service" aria-label="service" required>
                                  <option disabled={false} value={""} defaultChecked={true}>Vyber prosím službu</option>
                                  <option value="czech-craft">Czech-Craft</option>
                                  <option value="craftlist">Craftlist</option>
                              </select>
                              </label>
                              <div className="mb-3">
                                <label htmlFor="nick" className="form-label">Herní Nick</label>
                                <input type="text" className="form-control" id="nick" name="nick" aria-describedby="nickName" required/>
                                <div id="nickName" className="form-text">Pokud jméno nevyplníte budete přesměrování bez vyplněného jména</div>
                              </div>
                            <button type="submit" className="btn btn-secondary btn-sm">HLASOVAT</button>
                        </form>
                    </div>
                    <div className="col-lg-6">
                        <h1>HLASOVÁNÍ</h1>
                        <span className="fw-small">
                            <p>Hlasováním za náš server získáš odměny.</p>
                        </span>
                        <ul>
                            <li>Náš server nabízí všem hráčům, možnost hlasovat.</li>
                            <li>Pokud hlasujete a nejste na serveru nebojte se vaše odměny se ukládají.</li>
                            <li>Každý hlas se počítá a za některý počet hlasů můžete dostat bonusové odměny.</li>
                            <li>Hlasováním můžete také, spustit vote party, tato akce se spouští pokud je na serveru 100 hlasů.</li>
                            <li>Odměnu si můžete vyzvednout pomocí /trezor claim.</li>
                        </ul>
                        <div className="d-flex gap-2 align-items-center">
                          <a className="nav-link" href="https://czech-craft.eu/server/neveland/"><Image src="https://czech-craft.eu/api/server/neveland/badges/position.svg" priority={1} quality={3} decoding="async" alt="czechcraft" width={"87"} height={"27"} /></a>
                          <a className="nav-link" href="https://craftlist.org/neverland"><Image src="https://craftlist.org/server-icons/ranks/small/2033.png" priority={1} quality={3} decoding="async" alt="craftlist" width={"87"} height={"27"} /></a>
                        </div>
                    </div>
                </div>
            </div>           
        </section>
    )
}