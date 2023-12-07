import Map from "../../../../models/Map";
import dbConnect from "../../../../lib/dbConnect";
import {wrapApiHandlerWithSentry} from '@sentry/nextjs'
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "../auth/[...nextauth]";


const handler = async(req,res) =>{
    const {method} = req;

    const session = await unstable_getServerSession(req, res, authOptions) || null;

    console.log(session)


        await dbConnect();


        switch(method){
            case "POST":
                try{
                    if(session == null){
                        return res.status(401).json({success:false})
                    }else{
                        const map = await Map.create(req.body);
                        return res.status(201).json({success: true, data: map})
                    }

                }catch(error) {
    
    
                    return res.status(400).json({success: false, data: error})
                }
                break;
    
                default:
                    return res.status(400).json({ success: false});
            }


};
export default wrapApiHandlerWithSentry(handler, "/api/upload/index.tsx");