import React from "react";
import { useState, useEffect } from "react"
import Link from 'next/link'
import axios from "axios";
import useSWR from "swr";


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
      <div className="col-md cover-me container">Načítání</div>
    </>
  )
  if (!status) return <p>No server data</p>

    if (status?.online === false) {
      return (
        <div className="col-md cover-me container">
          <div className="status-offline text-center">
            <div>
                <h3><i className="fa-solid fa-circle-exclamation"></i> Server je Offline</h3>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="col-md cover-me container">
        <div className="status">
          <div>
              <div className="d-flex">
                <h4>IP: <span>{status?.host}:{status?.port}</span></h4>
              </div>
              <p><i className="fa-solid fa-user-group"></i> Právě hraje <span className="fw-bold">{status?.players?.online}</span></p>
          </div>
          <Link href="/[slug]" className="ms-auto" as="jak-se-pripojit">
            <button>Jak se Připojit</button>
          </Link>
        </div>
      </div>
    )
}

export default Status;