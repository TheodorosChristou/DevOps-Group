import {model, Model, models, Schema} from "mongoose";

export interface MapInterface{
    _id?: string;
    Lat: number;
    Lon: number;
    City: string;
    Description: string;
    Photo: string;

}

const MapSchema = new Schema<MapInterface, Model<MapInterface>>({
    Lat: {type: Number},
    Lon: {type: Number},
    City: {type: String},
    Description: {type: String},
    Photo: {type: String},


})

export default (models.Map as Model<MapInterface>) || model<MapInterface>("Map", MapSchema);