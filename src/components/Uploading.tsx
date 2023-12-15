import React, { useState } from 'react';
import AddLocationForm, {FormValues} from "../components/AddLocationForm"
import axios from "axios";
import {useMutation} from "react-query";
import { useTranslation } from 'react-i18next';
import {useSession} from "next-auth/react"
import FadeInDiv from '../components/FadeInDiv';



export default function Uploading(session){

    const valid = session.session

    const {t} = useTranslation();
    const redirect = (url, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);

    const [validation, setValidation] = useState(true);

    var validate: Boolean

  
    const {isLoading, isSuccess, isError, mutate} = useMutation( async(locationform: FormValues) =>{

        if((locationform.Lat*0 == 0) && (locationform.Lon*0 == 0)){
            validate = true
            console.log(validate)
        }else{
         setValidation(false)
         validate = false
         console.log(validate)
        }
        if(validate == true){
            console.log(validate)
            console.log("creating new marker")
            await axios.post("/api/upload/", locationform);
            redirect("/map");
        }

      });

      if(valid){
        return <div><div className="text-white mt-5"><AddLocationForm
        isLoading={isLoading}
      onSubmit={(locationform) => mutate(locationform)}
      />  </div> <div className="text-white mt-5 flex justify-center">{!validation && (<h1 className="text-white">{t("uploading.sorry")}</h1>)}</div></div>;
      }else{
        return <div className="flex items-center justify-center"><FadeInDiv><div className="container mx-auto my-8 p-8 bg-white shadow-md">
        <h1 className="text-2xl font-bold mb-4">Unauthorized!</h1>
        <p>This page cannot be accessed without logging in!.</p>
      </div></FadeInDiv></div>

      }

}
