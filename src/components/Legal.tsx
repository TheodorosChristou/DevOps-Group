import "../i18n";
import { useTranslation } from 'react-i18next';

export default function Legal() {
    const { t, i18n } = useTranslation();

    return (
        <div className="flex items-center justify-center h-screen text-white">
            <div className="text-center max-w-lg">
                {/* Header */}
                <div className="mb-8 font-bold italic text-xl sm:text-2xl sm:pt-2">
                    <h1 className="text-3xl sm:text-4xl">Moongese - Legal Information</h1>
                </div>

                {/* Content */}
                <div className="text-lg leading-6 tracking-wide">
                    <p className="mb-4">
                        <strong>The software bundled with and powering this project includes the following open-source components, all released under the following licenses:</strong></p>
                        <br/>
                        <p className="mb-4"> 1. Next.js:
                            -<a href="https://github.com/vercel/next.js/blob/canary/license.md">Link to Next.js License</a></p>

                            <p className="mb-4"> 2. React:
                            -<a href="https://github.com/facebook/react/blob/main/LICENSE">Link to React License</a></p>

                             <p className="mb-4">3. TypeScript:
                            - <a href="https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt">Link to TypeScript License</a></p>

                             <p className="mb-4">4. Heroicons: 
                            - <a href="https://github.com/tailwindlabs/heroicons/blob/master/LICENSE">Link to Heroicons License</a></p>

                            <p className="mb-4">5. React-Query:
                            - <a href="https://github.com/TanStack/query/blob/main/LICENSE">Link to TankStack/ReactQuery License</a></p>

                            <p className="mb-4">6. React Leaflet:
                            - <a href="https://github.com/PaulLeCam/react-leaflet/blob/master/LICENSE.md">Link to React Leaflet License</a></p>

                            <p className="mb-4">7. React-i18next:
                            -<a href="https://github.com/i18next/react-i18next/blob/master/LICENSE">Link to React i18n Next License</a></p>

                            <p className="mb-4">8. React Hook Form:
                            -<a href="https://github.com/react-hook-form/react-hook-form/blob/master/LICENSE">Link to React Hook Form License</a></p>

                            <p className="mb-4">9. React Dom:
                            -<a href="https://github.com/motorcycle/react-dom/blob/master/LICENSE.md">Link to React Dom License</a></p>

                            <p className="mb-4">10. Post CSS:
                            -<a href="https://github.com/postcss/postcss/blob/main/LICENSE">Link to Post CSS License</a></p>

                           <p className="mb-4"> 11. Next International:
                            -<a href="https://github.com/QuiiBz/next-international/blob/main/LICENSE">Link to Next International License</a></p>

                            <p className="mb-4">12. Next i18next:
                            -<a href="https://github.com/i18next/next-i18next/blob/master/LICENSE">Link to Next i18n License</a></p>

                            <p className="mb-4">13. Next Auth:
                            -<a href="https://github.com/nextauthjs/next-auth/blob/main/LICENSE">Link to NextAuth License</a></p>

                            <p className="mb-4">14. Mongoose:
                            -<a href="https://github.com/cesanta/mongoose/blob/master/LICENSE">Link to Mongoose License</a></p>
                            
                            <p className="mb-4">15. Leaflet:
                            -<a href="https://github.com/Leaflet/Leaflet/blob/main/LICENSE">Link to Leaflet License</a></p>
                            
                            <p className="mb-4">16. i18next http backend:
                            -<a href="https://github.com/i18next/i18next-http-backend/blob/master/licence">Link to i18n Http Backend License</a></p>
                                                        
                            <p className="mb-4">17. i18next Browser Language Detector:
                            -<a href="https://github.com/i18next/i18next-http-backend/blob/master/licence">Link to i18next Browser Language Detector License</a></p>
                                                                                    
                            <p className="mb-4">18. Expo Asset:
                            -<a href="https://github.com/expo/expo-asset-utils/blob/master/LICENSE">Link to  Expo Asset License</a></p>
                                                                                                                
                            <p className="mb-4">19. Elsint:
                            -<a href="https://github.com/eslint/eslint/blob/main/LICENSE">Link to Elsint License</a></p>
                                                                                                                                        
                            <p className="mb-4">20. Axios:
                            -<a href="https://github.com/axios/axios/blob/v1.x/LICENSE">Link to Axios License</a></p>
                                                                                                                                                                    
                            <p className="mb-4">20. Sentry:
                            -<a href="https://open.sentry.io/licensing/">Link to Sentry License</a></p>




                </div>
            </div>
        </div>
    );
}