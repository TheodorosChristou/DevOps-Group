import React from 'react';
import AddLocationForm, {FormValues} from "../components/AddLocationForm"
import axios from "axios";
import {useMutation} from "react-query";


  export default function Upload() {
  
    const redirect = (url, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);

  
    const {isLoading, isSuccess, isError, mutate} = useMutation( async(locationform: FormValues) =>{
          console.log("creating new marker")
          await axios.post("/api/upload/", locationform);
          redirect("/map");
  
    });
  
  
    return <div className="text-white mt-5"><AddLocationForm
    isLoading={isLoading}
  triggerReset={isSuccess}
  onSubmit={(locationform) => mutate(locationform)}
  /></div>;
  }
