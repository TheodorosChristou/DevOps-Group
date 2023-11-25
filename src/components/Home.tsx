import "../i18n";
import { useTranslation } from 'react-i18next';



export default function Index( {Map, sess}){
    const {t} = useTranslation();
    const map = Map
    const search = map.Map

    const session = sess
    if(session?.user?.name?.toString()){
        var user: string
        var role: string
        user = session.user.name
        role = session.user.role
        console.log(role)
        
    }



    if(session && (session.user.role == "admin")){
        return(
            <div className="mt-10 mb-10">
                <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center"key={0}>Welcome Admin</h1>
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
        if(session && (session.user.role == "user")){
            return(
                <div className="mt-10 mb-10">
                    <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center"key={1}>Welcome to Mongeese Map!</h1>
                    <h1 className="font-semibold text-xl text-white mt-8 flex justify-center"key={2}>Now that you have logged in, you can use the upload function of our website so share your favorite places around the world!</h1>
                    <h1 className="font-semibold text-xl text-white mt-8 flex justify-center"key={3}>Simply go to the map and give permission to share your location, our website then will show you the lat and long.</h1>
                    <h1 className="font-semibold text-xl text-white mt-8 flex justify-center"key={4}>Once you copy them, you can click the Upload button and paste them there along with any information and a great picture you can share!!</h1>
            </div>
            );
        }
    }

    return(
        <div className="flex justify-center mt-10">
        <h1 className="text-white">Please Log in using the Header</h1>
    </div>
    )
    
    
}