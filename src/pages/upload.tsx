import React from 'react';
import AddLocationForm, {FormValues} from "../components/AddLocationForm"
import axios from "axios";
import {useMutation} from "react-query";
import { useState } from "react";



  export default function Upload() {
  
    const redirect = (url, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);

    const [validation, setValidation] = useState(true);

  
    const {isLoading, isSuccess, isError, mutate} = useMutation( async(locationform: FormValues) =>{

      if(locationform.Lat*0 == 0){
      }else{
       setValidation(false)
      }
      if(locationform.Lon*0 == 0){
      }else{
       setValidation(false)
      }
          console.log("creating new marker")
          await axios.post("/api/upload/", locationform);
          redirect("/map");
    });
  
  
    return <div><div className="text-white mt-5"><AddLocationForm
    isLoading={isLoading}
  triggerReset={isSuccess}
  onSubmit={(locationform) => mutate(locationform)}
  />  </div> <div className="text-white mt-5 flex justify-center">{!validation && (<h1 className="text-white">Submittion Failed, You have string values inside Lat or Lon!</h1>)}</div></div>;
  }
