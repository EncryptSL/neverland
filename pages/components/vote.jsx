import React from "react";

const Vote = () => {

    return (
        <>
            <form className="flex flex-col" method="post" onSubmit={submitVote}>
              <label htmlFor="service">Kde chceš Hlasovat</label>
                <select class="form-select" name="service" aria-label="service" required>
                    <option disabled={true} selected value="">Vyber prosím službu</option>
                    <option value="czech-craft">Czech-Craft</option>
                    <option value="craftlist">Craftlist</option>
                </select>
              <label htmlFor="name" className="mb-2 italic">Herní Nick</label>
              <input className="mb-4 border-b-2" id="name" name="name" type="text" required />
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
              >
                Submit
              </button>
            </form>            
        </>
    )

};

const submitVote = async(event) => {
    event.preventDefault();
    alert(event.target.name.value);
};

export default Vote;