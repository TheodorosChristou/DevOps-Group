import { GetServerSideProps } from "next";
import dbConnect from "../../lib/dbConnect";
import Map from "../../models/Map";
import {useSession} from "next-auth/react"
import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("../components/Home"), {
    ssr: false,
  });

export default function Home(Map){



    const{data: session} = useSession();
    
    if(session?.user?.name?.toString()){
        var user: string
        user = session.user.name
    }

    const T = <DynamicHome Map={Map} sess={session}/>

    return (T)


}

export const getServerSideProps : GetServerSideProps = async () => {
    
    await dbConnect();
    const results = await Map.find({}).lean();
    const map = results.map(doc => ({...doc, ...{_id:doc._id.toString()}}))
    return {props: {Map: map}}
};