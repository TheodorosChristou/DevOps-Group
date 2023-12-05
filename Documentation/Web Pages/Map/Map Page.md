# Map Page

## Overview

The `Dmap` component is a Next.js page that uses a dynamic map component (`DynamicMap`) to display data fetched from a MongoDB database. It utilizes Next.js's server-side rendering (SSR) capabilities to ensure that data is fetched on the server before rendering the page.

## Dependencies

- React: Used for building the component and managing its UI.
- Next.js: A React framework that enables server-side rendering and other performance optimizations.
- MongoDB: A NoSQL database used to store and retrieve map data.
- `DynamicMap`: A dynamic map component that renders the map based on the provided data.
- `MapModel` and `MapInterface`: Definitions for MongoDB model and interface for map data.

## Component Structure

The `Dmap` component is structured as follows:

- **Dynamic Map Component:**
  - Imports the `DynamicMap` component dynamically using Next.js's `dynamic` function to enable lazy loading.

- **MapPageProps Interface:**
  - Defines the shape of the props that `Dmap` will receive, including `mapData` as an array of `MapInterface` objects.

- **Dmap Component:**
  - Accepts the `mapData` prop and renders the `DynamicMap` component, passing the map data for rendering.

- **getServerSideProps Function:**
  - A Next.js function that ensures a connection to the MongoDB database before fetching data.
  - Uses `MapModel` to fetch data from MongoDB and converts the results to JavaScript objects.
  - Adds a stringified `_id` to each object for compatibility.
  - Returns a prop containing the `mapData` to be transferred to the `DynamicMap` component.

## Usage

```tsx
// Import necessary dependencies and components
import React from 'react';
import { GetServerSideProps } from 'next';
import dbConnect from '../../lib/dbConnect';
import MapModel, { MapInterface } from '../../models/Map';
import dynamic from 'next/dynamic';

// Dynamic map, using Next.js dynamic for lazy loading for performance
const DynamicMap = dynamic(() => import("../components/DynamicMap"), {
  ssr: false,
});

// Define the shape of the data that DynamicMap will receive from the mapData prop
interface MapPageProps {
  mapData: MapInterface[];
}

// Accepts mapData prop as an array of datapoints
export default function Dmap({ mapData }: MapPageProps) {
  return <DynamicMap mapData={mapData} />;
}

// Next.js function, ensures that the connection is there before fetching data
export const getServerSideProps: GetServerSideProps<MapPageProps> = async () => {
  await dbConnect(); // Connect to the MongoDB database

  // Fetch data from MongoDB and convert them to JavaScript objects
  const results = await MapModel.find({}).lean();
  
  // Add a stringified _id to each object
  const map = results.map((doc) => ({ ...doc, _id: doc._id.toString() }));

  // Return a prop that contains data to be transferred to the DynamicMap
  return { props: { mapData: map } };
};
```
### More:

https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props

https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading