# Uploading Component

The `Uploading` component is responsible for handling the uploading of location data through a form. It integrates with various libraries, including Axios for HTTP requests, React Query for managing asynchronous state, and React i18n for translation.

## Usage

To use this component, you can import it into your TypeScript React application.

```tsx
import React, { useState } from 'react';
import AddLocationForm, { FormValues } from '../components/AddLocationForm';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';

export default function Uploading() {
  const { t } = useTranslation();

  // Function to redirect to a specified URL
  const redirect = (url: string, asLink = true) =>
    asLink ? (window.location.href = url) : window.location.replace(url);

  // State to manage form validation
  const [validation, setValidation] = useState(true);

  // Variable to hold validation status
  var validate: Boolean;

  // React Query mutation hook for handling form submission
  const { isLoading, isSuccess, isError, mutate } = useMutation(
    async (locationform: FormValues) => {
      if (locationform.Lat * 0 === 0 && locationform.Lon * 0 === 0) {
        // Validation passed
        validate = true;
        console.log(validate);
      } else {
        // Validation failed
        setValidation(false);
        validate = false;
        console.log(validate);
      }

      // If validation is successful, submit the form
      if (validate) {
        console.log(validate);
        console.log('Creating new marker');
        await axios.post('/api/upload/', locationform);
        redirect('/map');
      }
    }
  );

  // Render the AddLocationForm and display validation error if needed
  return (
    <div>
      <div className="text-white mt-5">
        <AddLocationForm isLoading={isLoading} onSubmit={(locationform) => mutate(locationform)} />
      </div>
      <div className="text-white mt-5 flex justify-center">
        {!validation && <h1 className="text-white">{t('uploading.sorry')}</h1>}
      </div>
    </div>
  );
}
```
## Further Explaination

The Uploading component includes form validation logic and uses the AddLocationForm component for rendering the form. The component also handles redirection upon successful form submission and displays an error message if the validation fails.

### More:

https://axios-http.com/docs/intro

https://www.npmjs.com/package/react-query

https://react.i18next.com/