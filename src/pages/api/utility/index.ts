import { NextApiResponse } from "next";
import dbConnect from "../../../../lib/dbConnect";
import fs from "node:fs/promises";
import path from "node:path";
import Map from "../../../../models/Map";
import { wrapApiHandlerWithSentry } from "@sentry/nextjs";

const handler = async(_, res: NextApiResponse) => {
    try {
        
        await dbConnect();
        const Mapfound = Map.find({}).count();


        if(await Mapfound){
            await Map.deleteMany({});
            console.log("Map points found")
        }

        const data = await fs.readFile(path.join(__dirname, "../../../../map.json"), "utf8");
        console.log(data)
        const result = await Map.insertMany(JSON.parse(data));
        res.status(201).json({success: true, result: result})
        
    } catch (e) {
        res.status(400).json({success: false, error:e})
        
    }
}
export default wrapApiHandlerWithSentry(handler,"/api/utility/index.ts" );
