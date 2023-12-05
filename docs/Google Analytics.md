# Google Analytics Documentation

## Overview

Google Analytics is a web analytics service developed by Google, designed for website owners and marketers to assess and enhance online performance. Users establish an account, integrate a unique tracking code into their website, and access diverse features. These encompass tracking visitor demographics, traffic origins, pageviews, bounce rates, and specific user interactions. The platform facilitates the establishment of goals, tracking conversions, and monitoring e-commerce transactions and events. Integration with other Google products allows for a comprehensive overview of online activities. Available in both free and premium versions, Google Analytics prioritizes privacy compliance, making it an indispensable tool for businesses seeking to optimize their online presence through data-driven decision-making.

## Configuration

### GoogleAnalytics.tsx

**Import Statements:**
- The `usePathname` and `useSearchParams` hooks are imported from the `next/navigation` package. These hooks are used to get the current pathname and search parameters of the URL.
- The `useEffect` hook is imported from React to perform side effects in the component.
- The `pageview` function is imported from the `gtagHelper` module, likely a utility function for handling Google Analytics events.
- The `Script` component from Next.js is imported to facilitate the inclusion of external scripts.

**Functional Component:**
- This is a functional component named `GoogleAnalytics` that takes a prop `GA_MEASUREMENT_ID` representing the Google Analytics measurement ID.

**UseEffect Hook:**
- The `useEffect` hook is used to execute code side effects when the component mounts or when there are changes to `pathname`, `searchParams`, or `GA_MEASUREMENT_ID`.
- It concatenates the pathname and the string representation of searchParams to form the complete URL.
- Then, it calls the `pageview` function with the Google Analytics measurement ID and the constructed URL.

**Return Statement:**
- The return statement renders the component. It includes two `Script` components.
- The first one loads the Google Analytics script asynchronously from a URL that includes the `GA_MEASUREMENT_ID`.
- The second one initializes Google Analytics using the `gtag` script and sets up configuration options. It ensures that analytics storage is denied by default and configures the measurement ID and the current page path.

### gTagHelper.ts

- The `pageview` function is a utility for tracking page views in Google Analytics.
- It takes two parameters: `GA_MEASUREMENT_ID` (Google Analytics measurement ID) and `url` (URL for tracking the pageview).
- Utilizes `window.gtag` to send a configuration event to Google Analytics.
- The configuration includes the measurement ID and the specified page path (url).
- This function provides a concise way to track page views throughout the application.

### storageHelper.ts

- The `getLocalStorage` function retrieves a value from local storage based on the provided key.
- It checks if the retrieved value is not null and not the string 'undefined'.
- If the above condition is true, it parses the value using `JSON.parse` and returns it.
- If the condition is false, it returns the specified `defaultValue`.
- The `setLocalStorage` function sets a value in local storage based on the provided key.
- It uses `JSON.stringify` to convert the value to a JSON string before storing it in the local storage.

## Usage

### CookieConsent.tsx

**Dependencies:**
- The component relies on functions (`getLocalStorage` and `setLocalStorage`) from a `storageHelper` module to interact with local storage.
- It imports React's `useState` and `useEffect` hooks to manage state and handle side effects.

**State:**
- The component maintains a state variable named `cookieConsent`.
- It uses the `useState` hook to initialize and track the user's consent status.

**Initialization:**
- The `useEffect` hook is utilized to initialize the `cookieConsent` state.
- When the component mounts, it retrieves the consent status from local storage using the `getLocalStorage` function.
- The retrieved value is then used to set the initial state of `cookieConsent`.

**Consent Update:**
- Another `useEffect` hook monitors changes in the `cookieConsent` state.
- When the consent status changes, it updates the user's consent in Google Analytics using `window.gtag`.
- It stores the consent status in local storage using the `setLocalStorage` function.
- Additionally, it logs the consent status for testing purposes.

**Rendering:**
- The component renders a banner with a message about cookie usage.
- It provides options for the user to either decline or allow cookies.
- The banner is conditionally hidden if the user has already provided consent.

### _app.tsx

- Make sure to include this in your root component `<GoogleAnalytics GA_MEASUREMENT_ID="G-000000000" />`.


## More :
(https://developers.google.com/analytics).