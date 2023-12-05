# LanguageSelector Component 

The `LanguageSelector` component allows users to choose the language for the application. It utilizes the `useTranslation` hook from `next-i18next` to access translations and the i18n instance.

## Component Overview

### Dependencies

- `next-i18next`: Used for accessing the `useTranslation` hook.

### Component Usage

The LanguageSelector component is used to provide language selection functionality within your application.

It displays language options as buttons, allowing users to dynamically change the language based on the available locales.


### Component Structure

```tsx
// LanguageSelector.tsx
import React from 'react';
import { useTranslation } from 'next-i18next';

// Define language options
const locales = {
  en: { title: 'English' },
  gr: { title: 'Ελληνικά' },
};

const LanguageSelector: React.FC = () => {
  // UseTranslation hook to access translations and the i18n instance
  const { t, i18n } = useTranslation();

  return (
    <div className="flex space-x-2 items-center">
      <span className="font-bold text-black">{t('languageSelector.language')}:</span>
      <ul className="flex space-x-2">
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              className={`text-black hover:text-gray-500 focus:outline-none border-2 border-black px-3 py-1 rounded-full ${
                i18n.resolvedLanguage === locale ? 'font-bold' : 'font-normal'
              }`}
              type="button"
              onClick={() => i18n.changeLanguage(locale)}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
```
## Example Usage

```tsx
// Example Component
import React from 'react';
import { useTranslation } from 'next-i18next';
import LanguageSelector from '../path/to/LanguageSelector';

const YourComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('your.translation.key')}</h1>
      <LanguageSelector />
    </div>
  );
};

export default YourComponent;
```

## More here:

https://www.i18next.com/