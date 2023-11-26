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
                <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center"key={0}>{t("index.adminWelcome")}</h1>
                <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center"key={1}>{t("index.adminMsg")}</h1>
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
                                            <td key={i+13} className="pr-10">{t("index.lat")}: {r.Lat}</td>
                                            <td key={i+14} className="pr-10">{t("index.lon")}: {r.Lon}</td>
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
                    <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center"key={1}>{t("index.welcomeMsg")}</h1>
                    <h1 className="font-semibold text-xl text-white mt-8 flex justify-center"key={2}>{t("index.msg1")}</h1>
                    <h1 className="font-semibold text-xl text-white mt-8 flex justify-center"key={3}>{t("index.msg2")}</h1>
                    <h1 className="font-semibold text-xl text-white mt-8 flex justify-center"key={4}>{t("index.msg3")}</h1>
            </div>
            );
        }
    }

    return(
        <div className="flex justify-center mt-10">
        <h1 className="text-white">{t("index.please")}</h1>
    </div>
    )
    
    
}