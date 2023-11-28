import {useForm} from 'react-hook-form'
import AddLocationForm, {FormValues} from "../components/AddLocationForm"
import { GetServerSideProps } from "next";
import dbConnect from "../../lib/dbConnect";
import Map from "../../models/Map";
import {useState} from "react";
import axios from "axios";
import {useMutation} from "react-query";
import { redirect } from "next/navigation";


export default function Editing(Locationform){

    const values = Locationform.Locationform

    const locationtValue = values



    const locationformValues: FormValues = {Lat: values.Lat, Lon: values.Lon, City: values.City, Description: values.Description,Photos: values.Photos}
    

    console.log(locationformValues)


     const redirect = (url, asLink = true) =>
     asLink ? (window.location.href = url) : window.location.replace(url);

      const {isLoading, isSuccess, isError, mutate} = useMutation( async(locationform: FormValues) => {
            console.log("updating location");
            await axios.put(`/api/changes/${locationtValue._id}`, locationform);
            redirect("/")
          }
        );

        return (

         <div className="mt-10 text-white">
<AddLocationForm
      isLoading={isLoading}
    onSubmit={(locationform) => mutate(locationform) }
    values={locationformValues}
         label="update location"/>
    </div>
        )
}


