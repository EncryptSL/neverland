import React from "react";
import { useState, useEffect } from "react"
import Image from "next/image";
import Utils from "../utils/Utils";
import Pagination from "./pagination";

const Bans = ({bans}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;
 
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

    return (
      <>
      </>
    )

}

export default Bans;