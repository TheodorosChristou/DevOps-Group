import Map from "../../../../models/Map";
import dbConnect from "../../../../lib/dbConnect";


export default async function handler(req,res){

    const {query: {id}, method} = req;

    await dbConnect();
    

    switch(method){

        case "PUT":
            try{           
                const locationform = await Map.findByIdAndUpdate(id, req.body);
    
                if(!locationform){
                    return res.status(400).json({success:false})
                }else{
                    return res.status(200).json({success: true, data: locationform})
                }
            }catch {Error}{
                return res.status(400).json({success: false})
            }

        case"DELETE":
        try{
            const locationform = await Map.findByIdAndDelete(id);
            if(!locationform){
                return res.status(400).json({success:false})
            }else{
                return res.status(201).json({success: true, data: locationform})
            }
        }catch {Error}{
            return res.status(400).json({success: false})
        }
    }
}