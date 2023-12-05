# DynamicMap Component 

## Overview

The `DynamicMap` component is a React component that renders an interactive map using the `react-leaflet` library. It allows users to view markers on the map, with each marker representing a data point provided through the `mapData` prop. Additionally, it displays the user's location with a customized marker icon.

## Dependencies

- React: Used for building the component and managing its state.
- react-leaflet: A React wrapper for Leaflet, a popular JavaScript mapping library.
- leaflet: The underlying mapping library.
- @cloudinary/react: Enables integration with Cloudinary for handling images.
- react-i18next: Provides internationalization support for translations.

## Component Structure

The `DynamicMap` component is structured as follows:

- **User Location and Default Location State:**
  - `userLocation`: Represents the user's current location as a tuple of latitude and longitude.
  - `isDefaultLocation`: A flag indicating whether the user's location is set to a default value.

- **Hooks:**
  - `useTranslation`: Used for internationalization, providing translation functions.
  - `useCloudinary`: Custom hook for Cloudinary integration.

- **Custom Icons:**
  - `customIcon`: Represents a custom icon for markers.
  - `newUserIcon`: Represents a custom icon for the user's marker.

- **Use Effect for User Location Permission:**
  - Asynchronously handles user permission for geolocation, updating `userLocation` and `isDefaultLocation` accordingly.

- **SetViewOnMap Function:**
  - A function using `useMap` hook to set the map view to the user's location.

- **Map Rendering:**
  - Uses `MapContainer` from `react-leaflet` to render the map.
  - Includes a TileLayer for OpenStreetMap tiles.

- **Marker Rendering:**
  - Iterates over `mapData` to render markers for each data point.
  - Custom icon for other markers and a user icon for the user's marker.
  - Popups display information, and images (if available) for each data point.

- **Popup for User Marker:**
  - Displays user location information in a popup when permission is granted.

## Usage

```tsx
import DynamicMap from './path/to/DynamicMap';

const YourComponent = () => {
  // Sample data for map markers
  const mapData = [
    // ... your data points
  ];

  return (
    <DynamicMap mapData={mapData} />
  );
};
```

## More here:

https://react-leaflet.js.org/

https://cloudinary.com/documentation/react_quick_start

