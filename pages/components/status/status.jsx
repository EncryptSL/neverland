import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import Loading from "../ui/loading";
import DataMissing from "../ui/error/DataMissing";

const Status = () => {

  const [status, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('//api.mcstatus.io/v2/status/java/salmon.hostify.cz:51090').then((res) => res.data)
      .then((status) => {
        setData(status)
        setLoading(false)
      })
  }, [])

 if (isLoading) return (
   <>
    <Loading />
   </>
 )

 if (!status) return (
    <DataMissing />
 )

  if (status?.online === false) {
      return (
        <section id="status" className="p-5">
              <h3><i className="fa-solid fa-circle-exclamation"></i> Server je Offline</h3>
        </section>
      )
  } else {
      return (
        <section id="status" className="p-1 center-status bg-light">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
             <div className="col-status flex-shrink-0 ms-1">
              <img src={status?.icon} loading="lazy" height={85} width={85} alt="icon" decoding="async"/>
             </div>
             <div className="col-sm flex-grow-1 ms-3">
                <p>{status?.host}:{status?.port}</p>
                <p><span className="fw-bold">PRÁVĚ HRAJE {status?.players?.online} HRÁČŮ</span></p>
             </div>
             <div className="col col-lg-2" style={{fontSize: "40px"}}>
                <a href="#" className="px-2 link-danger"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="#" className="px-2 link-danger"><i className="fa-brands fa-square-youtube"></i></a>
                <a href="#" className="px-2 link-danger"><i className="fa-brands fa-square-facebook"></i></a>
             </div>
            </div>
          </div>
        </section>
      )
  }
}

export default Status;