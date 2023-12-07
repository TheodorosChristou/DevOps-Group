import { useTranslation } from 'react-i18next';

export default function Legal() {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex justify-center text-align:center text-white">
            <div className=" max-w-screen-xl px-4 sm:px-8 w-full">
                {/* Header */}
                <div className="mb-10 mt-5 pl-5 w-full text-align:center font-bold italic text-xl sm:text-2xl sm:pt-2">
                    <h1 className="text-3xl flex justify-center sm:text-4xl">{t("legal.legalTitle")}</h1>
                </div>  
               
                {/* Content */}
                <ul className="list-inside">
                <div className="text-lg ml-10 mr-10 w-[80] sm:w-[70] sm:text-md mx-auto mb-4">
                    <p className="mb-4 w-95">
                        {t("legal.legalText2")}
                    </p>
                    <p className="mb-4">
                        {t("legal.legalText3")}
                    </p>
                    <p className="mb-4">
                        {t("legal.legalText4")}
                    </p>
                    <p className="mb-4">
                        {t("legal.legalText5")}
                    </p>
                    <p className="mb-4">
                        {t("legal.legalText6")}
                    </p>
                    <p className="mb-4">
                        {t("legal.legalText7")}
                    </p>
                    <p className="mb-4">
                        {t("legal.legalText8")}
                    </p>
                </div>
                </ul>
            </div>
        </div>
    );
}
