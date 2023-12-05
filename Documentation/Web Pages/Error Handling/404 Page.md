# NotFound Page

The notFound page is a Next.js page component designed to render a custom error page when a route is not found. It uses dynamic import to load the Error component dynamically, allowing for better code splitting and performance.

## Usage

To use this component, import it into your Next.js application.

```tsx
import NotFound from '../path/to/notFound';

// Example usage
const MyPage = () => (
  // Your page content
);

export default MyPage;
```

## Component Structure
The notFound page is structured as follows:
```tsx
import dynamic from 'next/dynamic';

export default function NotFound() {
  const Error404 = dynamic(() => import('../components/Error'), { ssr: false });

  return <Error404 />;
}
```

## Dependencies

- next/dynamic: The Next.js utility for dynamic imports.

## Purpose

The notFound page serves as a custom error page for handling 404 errors (page not found). It dynamically imports the Error component using next/dynamic with SSR (server-side rendering) set to false.

## Dynamic Import
The Error component is loaded dynamically using the dynamic function from next/dynamic.

```tsx
const Error404 = dynamic(() => import('../components/Error'), { ssr: false });
```

The { ssr: false } option ensures that the component is not included in server-side rendering, allowing for better client-side performance.

## Rendering

The dynamically imported Error component is then rendered within the notFound page.

```tsx

return <Error404 />;

```

This approach allows for efficient code splitting, ensuring that the Error component is only loaded when needed, improving the overall performance of your application.