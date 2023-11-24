import Map from "../../../../models/Map";
import dbConnect from "../../../../lib/dbConnect";


export default async function handler(req,res){
    const {method} = req;

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
}