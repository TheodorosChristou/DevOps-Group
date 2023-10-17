import {model, Model, models, Schema} from "mongoose";

export interface MapInterface{
    _id?: string;
    Lat: string;
    Lon: string;
}

const MapSchema = new Schema<MapInterface, Model<MapInterface>>({
    Lat: {type: String},
    Lon: {type: String}
})

export default (models.Map as Model<MapInterface>) || model<MapInterface>("Map", MapSchema);