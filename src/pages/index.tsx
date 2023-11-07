import { GetServerSideProps } from "next";
import dbConnect from "../../lib/dbConnect";
import Map from "../../models/Map";
import {useSession} from "next-auth/react"





export default function Home(Map){

    const map = Map
    const search = map.Map
    const{data: session} = useSession();

    if(session?.user?.name?.toString()){
        var user: string
        user = session.user.name
    }

    if(session){
        return(
            <div className="mt-10 mb-10">
                <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center"key={1}>Here is the Latitude and Longitude from the database</h1>
                {search.map((r,i) =>(
                <div className="bg-black " key={i+1}>
                <div className=""key={i+2}>
                    <h1 className="font-semibold text-xl text-white pt-5 pb-5 flex justify-center"key={i+3}></h1>
                    <div className="flex justify-center"key={i+4}>
                            <div className="p-10 bg-gray-300 rounded-full flex max-w-[80%]"key={i+5}>
                                <table key={i+6}>
                                    <thead key={i+7}>
                                        <tr key={i+8}>
                                            <th key={i+9} className="pr-10"></th>
                                            <th key={i+10} className="pr-10"></th>
                                        </tr>
                                    </thead>
                                    <tbody key={i+11}>
                                        <tr className="font-semibold" key={i+12}>
                                            <td key={i+13} className="pr-10">Latitude: {r.Lat}</td>
                                            <td key={i+14} className="pr-10">Longitude: {r.Lon}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
            </div>
                ))}
        </div>
        );
    }else{
        return(
            <div className="flex justify-center mt-10">
            <h1 className="text-white">Please Log in using the Header</h1>
        </div>
        )

    }


}


export const getServerSideProps : GetServerSideProps = async () => {
    
    await dbConnect();
    const results = await Map.find({}).lean();
    const map = results.map(doc => ({...doc, ...{_id:doc._id.toString()}}))
    return {props: {Map: map}}
};
