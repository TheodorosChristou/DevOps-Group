import React from 'react';
import { GetServerSideProps } from 'next';
import dbConnect from '../../lib/dbConnect';
import MapModel from '../../models/Map';
import dynamic from 'next/dynamic';

//Dynamic map, using nextjs dynamic for lazy loading
const DynamicMap = dynamic(() => import("../components/DynamicMap"), {
  ssr: false, 
});

export default function Dmap() {
  return <DynamicMap/>;
}