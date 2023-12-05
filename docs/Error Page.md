# CustomErrorComponent

The CustomErrorComponent is a custom error page component designed to work with Next.js and integrates with Sentry for error tracking. It extends the NextPage type from Next.js and uses the Error component provided by Next.js for rendering error pages.

## Usage
To use this component, import it into your Next.js application.

```tsx
import CustomErrorComponent from '../path/to/CustomErrorComponent';

// Example usage
const MyPage = () => (
  // Your page content
);

export default MyPage;
```

## Component Structure
The CustomErrorComponent is structured as follows:
```tsx

import * as Sentry from '@sentry/nextjs';
import type { NextPage } from 'next';
import type { ErrorProps } from 'next/error';
import Error from 'next/error';

const CustomErrorComponent: NextPage<ErrorProps> = (props) => {
  return <Error statusCode={props.statusCode} />;
};

CustomErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return Error.getInitialProps(contextData);
};

export default CustomErrorComponent;
```

## Dependencies

- @sentry/nextjs: The Sentry integration for Next.js.
- next: The Next.js framework.

## Purpose

The CustomErrorComponent serves as a custom error page that can be used throughout your Next.js application. It integrates with Sentry to capture and report errors for better debugging and monitoring.

## Error Rendering
The component renders the default Error component from Next.js, passing the statusCode from the props.
```tsx
const CustomErrorComponent: NextPage<ErrorProps> = (props) => {
  return <Error statusCode={props.statusCode} />;
};
```

## Error Tracking with Sentry

The getInitialProps method is used to capture errors with Sentry before rendering the error page. This ensures that the error is reported to Sentry even in serverless environments.

```tsx
CustomErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return Error.getInitialProps(contextData);
};
```

This CustomErrorComponent is designed to seamlessly integrate with Sentry for error tracking and provide a consistent error page across your Next.js application.

## More:
https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts

https://nextjs.org/docs/pages/building-your-application/routing/custom-error