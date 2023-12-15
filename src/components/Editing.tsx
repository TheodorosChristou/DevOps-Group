
import AddLocationForm, {FormValues} from "../components/AddLocationForm"
import {useState} from "react";
import axios from "axios";
import {useMutation} from "react-query";
import { useTranslation } from 'react-i18next';
import FadeInDiv from '../components/FadeInDiv';
import {useSession} from "next-auth/react"



export default function Editing(Locationform){

    const values = Locationform.Locationform

    const{data: session} = useSession();

    var valid: boolean
    
    if(session?.user.role == "admin"){
        valid = true
    }else{
        valid = false
    }

    const {t} = useTranslation();

    const locationtValue = values

    const [validation, setValidation] = useState(true);


    var validate: Boolean




    const locationformValues: FormValues = {Lat: values.Lat, Lon: values.Lon, City: values.City, Description: values.Description,Photos: values.Photos}
    

    console.log(locationformValues)


     const redirect = (url, asLink = true) =>
     asLink ? (window.location.href = url) : window.location.replace(url);

      const {isLoading, isSuccess, isError, mutate} = useMutation( async(locationform: FormValues) => {
        if((locationform.Lat*0 == 0) && (locationform.Lon*0 == 0)){
          validate = true
          console.log(validate)
      }else{
       setValidation(false)
       validate = false
       console.log(validate)
      }
      if(validate == true){
        console.log("updating location");
        await axios.put(`/api/changes/${locationtValue._id}`, locationform);
        redirect("/")}

          }
        );

        if(valid){
          return (

         <div className="mt-10 text-white">
<AddLocationForm
      isLoading={isLoading}
    onSubmit={(locationform) => mutate(locationform) }
    values={locationformValues}
         label="update location"/>
    <div className="text-white mt-5 flex justify-center">{!validation && (<h1 data-testid="sorryMsg" className="text-white">{t("uploading.sorry")}</h1>)}</div></div> 
        )
}else{
  return <div className="flex items-center justify-center"><FadeInDiv><div className="container mx-auto my-8 p-8 bg-white shadow-md">
  <h1 className="text-2xl font-bold mb-4">Unauthorized!</h1>
  <p>This page cannot be accessed without logging in as an admin!.</p>
</div></FadeInDiv></div>
}
}

