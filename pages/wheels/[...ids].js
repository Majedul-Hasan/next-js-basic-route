
import {useRouter} from 'next/router'


import React from "react";

const WheelsPage = () => {
    const router = useRouter()
    console.log(router.query)


  return(
      <>
        <h1>Wheels Page</h1>
      </>
  ) 
};

export default WheelsPage;
