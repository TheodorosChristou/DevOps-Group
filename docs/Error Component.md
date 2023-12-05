# Error Component

The `Error` component is a React component responsible for rendering a custom 404 error page. It includes an image, a heading, and a link to navigate back to the home page.

## Usage

To use this component, import it into your React application.

```tsx
import Error from '../path/to/Error';

// Example usage
const Custom404Page = () => <Error />;
```
## Component Structure
The Error component is structured as follows:
```tsx
import Image from 'next/image';
import Link from 'next/link';
import Heading from '../components/Heading';
import '../i18n';
import { useTranslation } from 'react-i18next';

export default function Error() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex items-center flex-col">
      <Heading />
      <div className="">
        <Image src="/img/404.png" width={727} height={500} alt="404 image" />
      </div>
      <h1 className="text-white text-3xl mb-5">{t('page404.pnf')}</h1>
      <Link href="/">
        <h1 className="blue-button w-48 mb-11">{t('page404.bthp')}</h1>
      </Link>
    </div>
  );
}
```

## Dependencies
- next/image: The Next.js component for optimizing and serving images.
- next/link: The Next.js component for client-side navigation.
- Heading: A custom component not provided in the code snippet. Ensure it's imported and available for use.

## Translation
The component uses the useTranslation hook from react-i18next to handle internationalization.

```tsx
const { t, i18n } = useTranslation();
```

## Rendering Content
The component renders a heading, an image, and a link back to the home page.

- The Heading component is assumed to be a custom component included in your project.
- The image is displayed using the next/image component for optimized loading.
- A localized message is rendered with the help of the translation function (t).

## Navigation
A link is provided to navigate back to the home page using the next/link component.

```tsx
<Link href="/">
  <h1 className="blue-button w-48 mb-11">{t('page404.bthp')}</h1>
</Link>
```
This Error component is designed to provide a user-friendly and visually appealing 404 error page with the ability to navigate back to the home page.

## More:
https://nextjs.org/docs/pages/api-reference/components/link

https://nextjs.org/docs/pages/api-reference/components/image