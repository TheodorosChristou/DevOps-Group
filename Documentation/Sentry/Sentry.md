# Sentry Documentation

## Overview

Sentry captures and logs errors, exceptions, and crashes that occur in applications in real time. It provides detailed information about each error, including stack traces, user data, and environment details. In addition to error tracking, Sentry offers performance monitoring features, helping developers identify and optimize slow-performing code segments.

## Configuration

### Sentry.client.config.ts

**Import Sentry:**
- The `@sentry/nextjs` package is imported as `Sentry`. This package provides tools for integrating Sentry with Next.js applications.

**Sentry Initialization:**
- `Sentry.init` is called to initialize Sentry with specific configuration options.
  - `dsn`: The Data Source Name, a unique identifier for the Sentry project. It specifies where Sentry should send error reports.
  - `tracesSampleRate`: A percentage that determines the fraction of transactions (performance data) to be sent to Sentry. In this case, it's set to 1, indicating 100%.
  - `debug`: When set to true, Sentry will print helpful information to the console during setup. Typically, this is set to false in production.
  - `replaysOnErrorSampleRate`: Controls the percentage of errors to be replayed. A value of 1.0 means all errors will be replayed.
  - `replaysSessionSampleRate`: Sets the percentage of sessions to be replayed. A value of 0.1 means 10% of sessions will be replayed.
  - `integrations`: An array of integrations, including `Sentry.Replay`. This integration provides additional configuration for Sentry Session Replay, such as masking text and blocking media.

### Sentry.edge.config.ts

**Sentry Configuration for Edge Features:**
- This file configures the initialization of Sentry specifically for Next.js edge features such as middleware and edge routes.
- The configuration provided here will be applied whenever one of these edge features is loaded. It's important to note that this configuration is unrelated to the Vercel Edge Runtime and is required even when running the application locally.

**Sentry Initialization:**
- The `Sentry.init` function is called to initialize Sentry with specific configuration options.
  - `dsn`: The Data Source Name, a unique identifier for the Sentry project. It specifies where Sentry should send error reports.
  - `tracesSampleRate`: A percentage that determines the fraction of transactions (performance data) to be sent to Sentry. In this case, it's set to 1, indicating 100%.
  - `debug`: When set to true, Sentry will print helpful information to the console during setup. Typically, this is set to false in production.

### Sentry.server.config.ts

**Sentry Configuration for Server Initialization:**
- This file configures the initialization of Sentry specifically for the server in a Next.js application.
- The configuration provided here will be used whenever the server handles a request.

**Sentry Initialization:**
- The `Sentry.init` function is called to initialize Sentry with specific configuration options.
  - `dsn`: The Data Source Name, a unique identifier for the Sentry project. It specifies where Sentry should send error reports.
  - `tracesSampleRate`: A percentage that determines the fraction of transactions (performance data) to be sent to Sentry. In this case, it's set to 1, indicating 100%.
  - `debug`: When set to true, Sentry will print helpful information to the console during setup. Typically, this is set to false in production.

## Usage

**Imports:**
- Imports the Sentry library for Next.js (`import * as Sentry from "@sentry/nextjs";`), enabling error tracking and monitoring.
```tsx
  import * as Sentry from "@sentry/nextjs";
```

- Imports the NextPage type from the Next.js framework (import type { NextPage } from "next";) for defining React components.

```tsx
import type { NextPage } from "next";
```

- Imports the ErrorProps type from Next.js (import type { ErrorProps } from "next/error";) for handling error-related properties.

```tsx
import type { ErrorProps } from "next/error";
```

- Imports the default Error component from Next.js (import Error from "next/error";), which is used later in the custom error component.

```tsx
import Error from "next/error";
```

### CustomErrorComponent:

- Defines a React functional component named CustomErrorComponent: NextPage<ErrorProps> = (props) => { ... };.

    - Takes ErrorProps as its props.
    - Renders the default Error component with the status code passed as a prop.

### getInitialProps:

- Defines the getInitialProps function for the custom error component:
CustomErrorComponent.getInitialProps = async (contextData) => { ... };.

    - Used for server-side rendering and populating initial props.

### Sentry Integration:

- Uses await Sentry.captureUnderscoreErrorException(contextData); to capture any underscore error exceptions using Sentry before the error page is rendered.

    - Particularly useful for serverless functions, allowing Sentry time to send the error before the lambda exits.

```tsx
await Sentry.captureUnderscoreErrorException(contextData);
```

### Return Error:

- Returns the result of calling Error.getInitialProps(contextData);.
    - Ensures that the standard Next.js Error component gets the necessary initial props, such as the status code of the response.

### Export:

Exports the custom error component for use in other parts of the application: export default CustomErrorComponent;.

## More:
https://docs.sentry.io/
https://nextjs.org/docs