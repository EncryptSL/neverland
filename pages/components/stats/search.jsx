import axios from "axios";
import React from "react";
import { Bounce, toast } from "react-toastify";

const Search = () => {
    
const submitSearch = async(event) => {
    event.preventDefault();
    var username = event.target.username.value;
    axios.get('https://encryptsl.cekuj.net/api/minecraft/player/' + username)
    .then((res) => {
        var username = res.data[0].username
        window.location.replace(`/stats/player/${username}`)
    }).catch(error => {
      toast.error('Nepodařilo se načíst data tohoto hráče.', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      })
      return null
    })
}

    return (
        <>
            <div className="card p-2 d-inline-block">
                <form className="row row-cols-lg-auto g-3 align-items-center justify-content-center" onSubmit={submitSearch} method="POST">
                  <div className="col-12">
                    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                    <div className="input-group">
                      <input type="text" className="form-control" name="username" id="inlineFormInputGroupUsername" placeholder="Herní nick.." required/>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">VYHLEDAT</button>
                  </div>
                </form>
            </div>
        </>
    )

}

export default Search;