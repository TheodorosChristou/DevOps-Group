// LanguageSelector.tsx
import { useTranslation } from "next-i18next";

const locales = {
  en: { title: 'English' },
  gr: { title: 'Ελληνικά' },
};

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex space-x-2 items-center">
      <span className="font-bold text-black">Languages:</span>
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