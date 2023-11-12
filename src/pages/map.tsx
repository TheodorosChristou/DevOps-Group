import React from 'react';
import { GetServerSideProps } from 'next';
<<<<<<< HEAD
import dbConnect from '../../lib/dbConnect';
import MapModel, { MapInterface } from '../../models/Map'; // Import MapModel and MapInterface
import dynamic from 'next/dynamic';

// Dynamic map, using Next.js dynamic for lazy loading for performance
const DynamicMap = dynamic(() => import("../components/DynamicMap"), {
  ssr: false,
});
// This helps with shaping the data that the DynamicMap will receive  from the mapData prop
interface MapPageProps {
  mapData: MapInterface[];
}

//Accepts mapData prop as an array of datapoints
export default function Dmap({ mapData }: MapPageProps) {
  return <DynamicMap mapData={mapData} />;
}

//Next.js function, ensures that the connection is there before fetching data
export const getServerSideProps: GetServerSideProps<MapPageProps> = async () => {
  await dbConnect(); // Connect to the MongoDB database

  // Fetch data from MongoDB and convert them to javascript objects
  const results = await MapModel.find({}).lean();
  //adds a stringified _id
  const map = results.map((doc) => ({ ...doc, _id: doc._id.toString() }));
//returns a prop that contains data to be transfered to the DynamicMap
  return { props: { mapData: map } };
};
=======
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import dbConnect from '../../lib/dbConnect';
import MapModel from '../../models/Map';

export default function MapPage (marker){
    const search = marker.marker

        return (
            <div className="mt-10 mb-10">
                <h1 className="font-semibold text-xl text-white mt-8 underline underline-offset-8 flex justify-center"key={1}>Here is the Lat and Long from the database</h1>
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
                                            <td key={i+13} className="pr-10">Lat: {r.Lat}</td>
                                            <td key={i+14} className="pr-10">Lon: {r.Lon}</td>
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

      

  };

  export const getServerSideProps: GetServerSideProps = async () => {
    await dbConnect();
    const markers = await MapModel.find({}).lean();
    const map = markers.map(doc => ({...doc, ...{_id:doc._id.toString()}}))
    return {props: {marker: map}}

  };
>>>>>>> 6c9d86647cd7f0428f55fca02e9fb9cc01f98a04
