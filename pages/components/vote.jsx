import React, { useState } from "react";
import Image from "next/image";

const Vote = () => {

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
                <div className="col-md-4">
                        <form className="flex flex-col" method="post" onSubmit={submitVote}>
                            <label htmlFor="service">Kde chceš Hlasovat</label>
                              <select className="form-select" name="service" aria-label="service" required>
                                  <option disabled={true} selected value="">Vyber prosím službu</option>
                                  <option value="czech-craft">Czech-Craft</option>
                                  <option value="craftlist">Craftlist</option>
                              </select>
                              <div className="mb-3">
                                <label htmlFor="nick" className="form-label">Herní Nick</label>
                                <input type="text" className="form-control" id="nick" name="nick" aria-describedby="nickName" />
                                <div id="nickName" className="form-text">Pokud jméno nevyplníte budete přesměrování bez vyplněného jméno</div>
                              </div>
                            <button type="submit" className="btn btn-secondary btn-sm">HLASOVAT</button>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <h1>HLASOVÁNÍ</h1>
                        <span className="fw-small">
                            <p>Hlasováním za náš server získáš odměny.</p>
                        </span>
                        <ul>
                            <li>Náš server nabízí všem hráčům, možnost hlasovat.</li>
                            <li>Pokud hlasujete a nejste na serveru nebojte se vaše odměny se ukládají.</li>
                            <li>Každý hlas se počítá a za některý počet hlasů můžete dostat bonusové odměny.</li>
                            <li>Hlasováním můžete také, spustit vote party, tato akce se spouští pokud je na serveru 100 hlasů.</li>
                            <li>Odměnu si můžete vyzvednout pomocí /vote reward claim.</li>
                        </ul>
                        <ul class="nav">
                            <li class="nav-item">
                              <a className="nav-link" href="https://czech-craft.eu/server/neveland/"><Image src="https://czech-craft.eu/api/server/neveland/badges/position.svg" alt="czechcraft" width={"87"} height={"27"} /></a>
                            </li>
                            <li class="nav-item">
                              <a className="nav-link" href="https://craftlist.org/neverland"><Image src="https://craftlist.org/server-icons/ranks/small/2033.png" alt="craftlist" width={"87"} height={"27"} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>           
        </section>
    )

};

export default Vote;