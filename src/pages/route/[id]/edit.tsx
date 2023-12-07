import { loadLanguages } from 'i18next';
import dynamic from 'next/dynamic';
import { GetServerSideProps } from "next";
import dbConnect from "../../../../lib/dbConnect";
import Map from "../../../../models/Map";


export default function edit(Locationform){



  const DynamicEdit = dynamic(() => import("../../../components/Editing"), {
    ssr: false,
  });

  return(<DynamicEdit Locationform={Locationform.Locationform}/>)

}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    
  await dbConnect();
  const locationform = await Map.findById(params!.id).lean();
  return {props: {Locationform: {...locationform, _id: locationform!._id.toString()}}}
};