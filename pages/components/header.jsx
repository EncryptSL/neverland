import {React, useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {

  const [image, setImage] = useState("")

  const getImage = () => {
    setImage(<Image priority src="/assets/steve.png" decoding="async" width={350} height={350} alt="firuge" title="header_figure"/>)
  }

  useEffect(() => {
      getImage()
  }, [])

  return (
    <section className="bg-header text-light p-5 p-lg-3 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>ArcadiaMc <span className="text-warning">CZ/SK</span></h1>
              <p className="lead my-4">
                Veřejný Minecraft server zaměřený na ekonomiku, semi-rpg a survival.
                Věříme že zde najdete to co hledáte, a taky trochu pohody.
              </p>
            </div>
            <div>{image}</div>
          </div>
        </div>
      </section>
)
}

export default Header;