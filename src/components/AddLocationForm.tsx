import {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import FieldValidation from "./FieldValidation";


export interface WorksheetFormProps {
  onSubmit: SubmitHandler<FormValues>;
  isLoading?: boolean;
  triggerReset?: boolean;
  values?: FormValues;
  label?: string;
}

export interface FormValues {
    _id?: string;
    Lat: number;
    Lon: number;
    City: string;
    Description: string;

  }


export default function AddLocationForm(props){


    var valid = true

    const {onSubmit, isLoading, triggerReset, values, label} = props;
    const {register, control,  handleSubmit, formState:{errors, dirtyFields, touchedFields, isDirty}, reset} = useForm<FormValues>({
        defaultValues: {...values},
      });

      useEffect(() => {
        triggerReset && reset();
      }, [triggerReset, reset]);

      
      
    return(
    <div  className="flex justify-center">
<<<<<<< Updated upstream
    <div className="flex flex-col space-y-3 bg-gray-600	 p-7 rounded-lg">
        <h3 data-test='upload-form' className= "text-lg text-center mb-2 font-bold underline underline-offset-4"> Upload your Location!</h3>
=======
    <div className="flex flex-col space-y-3 bg-gray-600	 p-7 rounded-lg max-w-[80%] mx-auto">
        <h3 className="text-lg text-center mb-2 font-bold underline underline-offset-4" data-test='upload-form' > {t("AddLocationForm.upload")}</h3>
>>>>>>> Stashed changes
        <div>
        </div>
        <form
        onSubmit={handleSubmit((data)=>{
            onSubmit({...data})
        })}>

<div>
            <label className="font-semibold"> Lat </label>
            <input
            {...register("Lat", FieldValidation(valid))}
            className="border-2 rounded-md p-2 ml-2 text-black"
            type="float"
<<<<<<< Updated upstream
            placeholder="Lat"
=======
            placeholder={t("index.lat")}
>>>>>>> Stashed changes
            data-test='lat-input'
            />
            <p data-test='lat-error'>{errors.Lat?.message}</p>
            </div>
            <div>
            <label className="font-semibold"> Lon </label>
            <input
            {...register("Lon", FieldValidation(valid))}
            className="border-2 rounded-md p-2 ml-2 text-black"
            type="float"
<<<<<<< Updated upstream
            placeholder="Lon"
=======
            placeholder={t("index.lon")}
>>>>>>> Stashed changes
            data-test='lon-input'
            />
            <p data-test='lon-error'>{errors.Lon?.message}</p>
            </div>
            <div>
            <label className="font-semibold"> City </label>
            <input
            {...register("City", FieldValidation(valid))}
            className="border-2 rounded-md p-2 ml-2 text-black"
            type="string"
<<<<<<< Updated upstream
            placeholder="City"
            data-test='city-input'
            />
            <p data-test='city-error'>{errors.City?.message}</p>
=======
            maxLength={25}
            placeholder= {t("AddLocationForm.city")}
            data-test='city-input'
            />
            <p data-test='city-error' >{errors.City?.message}</p>
>>>>>>> Stashed changes
            </div>
            <div>
            <label className="font-semibold"> Description </label>
            <input
            {...register("Description", FieldValidation(valid))}
            className="border-2 rounded-md p-2 ml-2 text-black"
            type="string"
<<<<<<< Updated upstream
            placeholder="Description"
=======
            maxLength={50}
            placeholder={t("AddLocationForm.description")}
>>>>>>> Stashed changes
            data-test='desc-input'
            />
            <p data-test='desc-error'>{errors.Description?.message}</p>
            </div>
<<<<<<< Updated upstream
            <div className=" flex justify-center">
                <div className="flex justify-center mt-5 bg-black text-white rounded-full max-w-[50%]">
                <button className="bg-black text-white bg rounded-full py-1 px-1 xs:px-3 sm:px-3 font-semibold" data-test='submit-button'>Submit</button>
=======
            <div className="pt-5 flex justify-center">
            <a className="gray-outline-button" data-test='image-upload' onClick={(handleUpload)}><CloudUploadIcon className="h-5 w-5"/>{t("AddLocationForm.uploadphoto")}</a>
            </div>
            {(icon && (
              <>
            <div className="pt-5 flex justify-center">
              <TrashIcon className="w-5 h-5 cursor-pointer" onClick={() => setIcon(null)}/>
              <AdvancedImage className="border-2 border-black mr-1" cldImg={Cloudinary.image(icon).resize(thumbnail().width(200).height(200))}/> 
            </div>
            </>
            ))}
            <div className=" flex justify-center">
                <div className="flex justify-center mt-5 bg-black text-white rounded-full w-full">
                <button data-test='submit-button' className="bg-black text-white bg rounded-full py-1 px-1 xs:px-3 sm:px-3 font-semibold">{t("AddLocationForm.submit")}</button>
>>>>>>> Stashed changes
                </div>
            </div>
        </form>
        </div>
</div>
    );
}





