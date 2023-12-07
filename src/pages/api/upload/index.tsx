import Map from "../../../../models/Map";
import dbConnect from "../../../../lib/dbConnect";
import {wrapApiHandlerWithSentry} from '@sentry/nextjs'
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "../auth/[...nextauth]";


const handler = async(req,res) =>{
    const {method} = req;

    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(404);
    }


    await dbConnect();


    switch(method){
        case "POST":
            try{
                const map = await Map.create(req.body);
                res.status(201).json({success: true, data: map})
            }catch(error) {


                res.status(400).json({success: false, data: error})
            }
            break;

            default:
                res.status(400).json({ success: false});
    }
};
export default wrapApiHandlerWithSentry(handler, "/api/upload/index.tsx");
