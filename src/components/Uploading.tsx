import React, { useState } from 'react';
import AddLocationForm, {FormValues} from "../components/AddLocationForm"
import axios from "axios";
import {useMutation} from "react-query";
import { useTranslation } from 'react-i18next';





export default function Uploading(){

    const {t} = useTranslation();

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
        if(validation == true){
            console.log("creating new marker")
            await axios.post("/api/upload/", locationform);
            redirect("/map");
        }

      });
    
  
  
      return <div><div className="text-white mt-5"><AddLocationForm
      isLoading={isLoading}
    triggerReset={isSuccess}
    onSubmit={(locationform) => mutate(locationform)}
    />  </div> <div className="text-white mt-5 flex justify-center">{!validation && (<h1 className="text-white">{t("uploading.sorry")}</h1>)}</div></div>;

}