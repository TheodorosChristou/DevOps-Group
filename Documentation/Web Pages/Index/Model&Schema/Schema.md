# Map Model

The `Map` model is a Mongoose model representing a schema for storing map-related information in a MongoDB database.

## Model Structure

### Fields

- **_id (optional):** A unique identifier for each map entry.
- **Lat:** Latitude information for the map location.
- **Lon:** Longitude information for the map location.
- **City:** The city associated with the map location.
- **Description:** A description of the map location.
- **Photos:** An array representing photos associated with the map location.

```tsx
export interface MapInterface {
  _id?: string;
  Lat: number;
  Lon: number;
  City: string;
  Description: string;
  Photos: [];
}
```
## Model Creation
The model is created using the mongoose library, defining the schema with the specified fields.

```tsx
import { model, Model, models, Schema } from 'mongoose';

const MapSchema = new Schema<MapInterface, Model<MapInterface>>({
  Lat: { type: Number },
  Lon: { type: Number },
  City: { type: String },
  Description: { type: String },
  Photos: { type: [] },
});

export default (models.Map as Model<MapInterface>) || model<MapInterface>('Map', MapSchema);
```

## Further Explaination
The model is defined to handle the storage of map-related information in a MongoDB collection.
The MapInterface interface defines the expected structure of the documents stored in the Map collection.
If the Map model is already defined, it is reused; otherwise, a new model is created.
This Map model can be used to interact with MongoDB to store and retrieve map-related data in your application.

## More:
https://mongoosejs.com/