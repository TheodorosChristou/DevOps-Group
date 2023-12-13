# AddLocationForm Component

The `AddLocationForm` component is a React component designed to render a form for uploading location data. It incorporates several functionalities, including form validation, image uploading using Cloudinary, and internationalization (i18n) for text translation.

## Usage

To use this component, import it into your TypeScript React application.

```tsx
import React from 'react';
import { CloudUploadIcon, TrashIcon } from '@heroicons/react/outline';
import { SubmitHandler, useForm } from 'react-hook-form';
import FieldValidation from './FieldValidation';
import { thumbnail } from '@cloudinary/url-gen/actions/resize';
import { AdvancedImage } from '@cloudinary/react';
import useCloudinary from '@/hooks/useCloudinary';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface WorksheetFormProps {
  onSubmit: SubmitHandler<FormValues>;
  isLoading?: boolean;
  triggerReset?: boolean;
  values?: FormValues;
  label?: string;
}

export interface FormValues {
  _id?: string;
  Lat: number;
  Lon: number;
  City: string;
  Description: string;
  Photos: [];
}

export default function AddLocationForm(props: WorksheetFormProps) {
  // ... (Component implementation remains the same)
}

```
Component Structure

## Dependencies
- React: The core React library.

- @heroicons/react: A set of free MIT-licensed high-quality SVG icons.

- react-hook-form: A library for managing forms in React.

- @cloudinary/url-gen: Cloudinary's SDK for generating URLs for image and video 
 manipulations.

- @cloudinary/react: Cloudinary's React library for integrating Cloudinary with 
React.

- @/hooks/useCloudinary: A custom hook for handling Cloudinary functionality.

- useState: A React hook for managing state.

- useTranslation: A hook from react-i18next for handling internationalization.

- Props

- onSubmit: A function to handle form submission.

- isLoading: A boolean indicating whether the form is in a loading state.

- triggerReset: A boolean to trigger form reset.

- values: An object representing default values for form fields.

- label: An optional label for the form.

## Component State
- icon: A state variable to manage the currently selected image for upload.

- Image Upload Function
The handleUpload function is responsible for opening Cloudinary's image upload widget, allowing users to upload images and updating the component state with the uploaded image information.

```tsx

const handleUpload = () => {
  // Check if Cloudinary environment variables are set
  if (
    !process.env.NEXT_PUBLIC_CLOUDINARY_NAME ||
    !process.env.NEXT_PUBLIC_CLOUDINARY_PRESET
  ) {
    console.error(`To enable image uploading, set the environment variables: 
      NEXT_PUBLIC_CLOUDINARY_NAME and NEXT_PUBLIC_CLOUDINARY_PRESET`);
  }

  // Create Cloudinary image upload widget
  const imageWidget = cloudinary.createUploadWidget(
    {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_NAME,
      uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET,
      sources: ["local", "camera"],
    },
    (error, result) => {
      if (error) {
        console.error(error);
      }
      if (result.event === "success") {
        console.log("Image uploaded, result information:", result.info);
        setIcon(result.info.public_id);
      }
    }
  );

  // Open the image upload widget
  imageWidget.open();
};
```
## Form Validation

Form validation is implemented using the react-hook-form library. Each form field is associated with a specific validation function from the FieldValidation utility, which provides validation rules.

```tsx

// Example validation for latitude field
{...register("Lat", FieldValidation(valid))}

```
## Form Rendering

The form is rendered with input fields for latitude, longitude, city, description, and a photo upload button. If an image is uploaded, it is displayed along with a "Trash" icon to remove the image. The form includes localized labels and placeholders for user guidance.

```tsx
// Example latitude input field
<input
  {...register("Lat", FieldValidation(valid))}
  className="border-2 rounded-md p-2 ml-2 text-black w-full"
  type="float"
  placeholder={t("index.lat")}
/>
```
## Submission

Upon form submission, the onSubmit function is called with the form data, including the selected image URL. The component also handles form reset based on the triggerReset prop.

```tsx

<form
  onSubmit={handleSubmit((data) => {
    onSubmit({ ...data, ...{ Photos: [icon] } });
  })}
>
```

## Further Explaination
Ensure that environment variables (NEXT_PUBLIC_CLOUDINARY_NAME and NEXT_PUBLIC_CLOUDINARY_PRESET) are set for the Cloudinary integration.
This AddLocationForm component is designed to be easily integrated into your application for adding location data with image uploads.

## More:
https://icon-sets.iconify.design/heroicons-outline/cloud-upload/

https://react-hook-form.com/

https://cloudinary.com/documentation/react_quick_start