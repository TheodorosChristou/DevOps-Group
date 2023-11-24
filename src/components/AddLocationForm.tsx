import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
    Photos: [];
  }


export default function AddLocationForm(props){


    var valid = true


    const {Cloudinary} = useCloudinary();



    const handleUpload = () => {
      if (
        !process.env.NEXT_PUBLIC_CLOUDINARY_NAME ||
        !process.env.NEXT_PUBLIC_CLOUDINARY_PRESET
      ) {
        console.error(`in order for image uploading to work 
        you need to set the following environment variables: 
        NEXT_PUBLIC_CLOUDINARY_NAME  and NEXT_PUBLIC_CLOUDINARY_PRESET`);
      }
  
      // eslint-disable-next-line
      // @ts-ignore
      const imageWidget = cloudinary.createUploadWidget(

        {
          cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
          uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET,
          sources: ["local", "camera"],
        },
        (error, result) => {
          if (error) {
            console.error(error);
          }
          if(result.event === "success"){
            console.log("Image uploaded, result information:", result.info)
            setIcon(result.info.public_id)
          }
        }
      );
  
      imageWidget.open();
    };
  

    const {onSubmit, isLoading, triggerReset, values, label} = props;
    const {register, control,  handleSubmit, formState:{errors, dirtyFields, touchedFields, isDirty}, reset} = useForm<FormValues>({
        defaultValues: {...values},
      });

      useEffect(() => {
        if (triggerReset) {
          setIcon("");
          reset();
        }
      }, [triggerReset, reset]);


      const [icon, setIcon] = useState(values?.Photos ? values?.Photos[0] : null);


export default function AddLocationForm(props) {
  var valid = true;

  const { onSubmit, isLoading, triggerReset, values, label } = props;
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, dirtyFields, touchedFields, isDirty },
    reset,
  } = useForm<FormValues>({
    defaultValues: { ...values },
  });

  useEffect(() => {
    triggerReset && reset();
  }, [triggerReset, reset]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col space-y-3 bg-gray-600 p-7 rounded-lg w-full max-w-lg">
        <h3 className="text-lg text-center mb-2 font-bold underline underline-offset-4">
          {" "}
          Upload your Location!
        </h3>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit({ ...data });
          })}
        >
          <div>
            <label className="font-semibold"> Lat </label>
            <input
              {...register("Lat", FieldValidation(valid))}
              className="border-2 rounded-md p-2 ml-2 text-black w-full"
              type="float"
              placeholder="Lat"
            />
            <p>{errors.Lat?.message}</p>
          </div>
          <div>
            <label className="font-semibold"> Lon </label>
            <input
              {...register("Lon", FieldValidation(valid))}
              className="border-2 rounded-md p-2 ml-2 text-black w-full"
              type="float"
              placeholder="Lon"
            />
            <p>{errors.Lon?.message}</p>
          </div>
          <div>
            <label className="font-semibold"> City </label>
            <input
              {...register("City", FieldValidation(valid))}
              className="border-2 rounded-md p-2 ml-2 text-black w-full"
              type="text"
              placeholder="City"
            />
            <p>{errors.City?.message}</p>
          </div>
          <div>
            <label className="font-semibold"> Description </label>
            <input
              {...register("Description", FieldValidation(valid))}
              className="border-2 rounded-md p-2 ml-2 text-black w-full"
              type="text"
              placeholder="Description"
            />
            <p>{errors.Description?.message}</p>
          </div>
          <div className="flex justify-center mt-5">
            <button className="bg-black text-white rounded-full py-1 px-3 font-semibold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
