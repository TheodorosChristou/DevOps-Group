import React from 'react';
import { GetServerSideProps } from 'next';
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