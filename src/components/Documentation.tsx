import { useTranslation } from 'react-i18next';

export default function Legal() {
    const { t, i18n } = useTranslation();

    const linkStyle = {
        color: 'red', // Set the color to blue
        textDecoration: 'underline', // Add underline for better visibility
    };

    return (
        <div className="flex items-center justify-center text-white">
            <div className="text-center max-w-lg">
                {/* Header */}
                <div className="mb-8 font-bold italic text-xl sm:text-2xl sm:pt-2">
                    <h1 className="text-3xl sm:text-4xl">Mogeese Documentation</h1>
                </div>  

                {/* Content */}
                <div className="text-lg leading-6 tracking-wide">
                    <p className="mb-4">
                        <strong>Below you can find the documentation sorted in its different parts</strong>
                    </p>
                    <br />
                    <h1 className="text-lg font-bold uppercase pb-2">Google Analytics</h1>
                    <p className="mb-4">
                        Google Analytics:
                        - <a href="/docs/Google Analytics" style={linkStyle}>Google Analytics Documentation</a>
                    </p>
                    <h1 className="text-lg font-bold uppercase pb-2">Jest-Reactdocs</h1>
                    <p className="mb-4">
                    Jest-Reactdocs:
                        - <a href="/docs/Jest-Reactdocs" style={linkStyle}>Jest-Reactdocs Documentation</a>
                    </p>
                    <h1 className="text-lg font-bold uppercase pb-2">Sentry</h1>
                    <p className="mb-4">
                        Sentry:
                        - <a href="/docs/Sentry" style={linkStyle}>Sentry Documentation</a>
                    </p>
                    <h1 className="text-lg font-bold uppercase pb-2">Server Side</h1>
                    <p className="mb-4">
                        1. Cretbot:
                        - <a href="/docs/Cretbot" style={linkStyle}>Cretbot Documentation</a>
                    </p>

                    <p className="mb-4">
                        2. DockerCompose:
                        - <a href="/docs/DockerCompose" style={linkStyle}>Docker Compose Documentation</a>
                    </p>

                    <p className="mb-4">
                        3. DockerFile:
                        - <a href="/docs/DockerfileDocumentation" style={linkStyle}>Docker File Documentation</a>
                    </p>

                    <p className="mb-4">
                        4. Nginx:
                        - <a href="/docs/Nginx" style={linkStyle}>Nginx Documentation</a>
                    </p>

                    <h1 className="text-lg font-bold uppercase pb-2">Wep Pages / APIs</h1>

                    <h2 className="pb-2">CRUD API</h2>


                    <p className="mb-4">
                        Swagger API:
                        - <a href="/docs/SWAGGER CRUD API" style={linkStyle}>Swagger API Documentation</a>
                    </p>
                    <h2 className="pb-2">Error Handling</h2>
                    <p className="mb-4">
                        1. 404 Page:
                        - <a href="/docs/404 Page" style={linkStyle}>404 Page Documentation</a>
                    </p>

                    <p className="mb-4">
                        2. Error Component:
                        - <a href="/docs/Error Component" style={linkStyle}> Error Component Documentation</a>
                    </p>

                    <p className="mb-4">
                        3. Error Page:
                        - <a href="/docs/Error Page" style={linkStyle}>Error Page Documentation</a>
                    </p>
                    <h2 className="pb-2">Model and Schema</h2>

                    <p className="mb-4">
                        Model and Schema:
                        - <a href="/docs/Schema" style={linkStyle}>Model and Schema Documentation</a>
                    </p>
                    <h2 className="pb-2">Home Page</h2>
                    <p className="mb-4">
                        1. Index Page:
                        - <a href="/docs/Index Page" style={linkStyle}>Index Page Documentation</a>
                    </p>

                    <p className="mb-4">
                        2. Home Component:
                        - <a href="/docs/Home Component" style={linkStyle}>Home Component Documentation</a>
                    </p>

                    <p className="mb-4">
                        3. Database Integration:
                        - <a href="/docs/database" style={linkStyle}>Database Integration Documentation</a>
                    </p>

                    <h2 className="pb-2">Map Page</h2>

                    <p className="mb-4">
                        1. Dynamic Map:
                        - <a href="/docs/Dynamic Map Documentation" style={linkStyle}>Dynamic Map Documentation</a>
                    </p>

                    <p className="mb-4">
                        2. Map Page:
                        - <a href="/docs/Map Page" style={linkStyle}>Map Page Documentation</a>
                    </p>
                    <h2 className="pb-2">Translation</h2>
                    <p className="mb-4">
                        1. i18n:
                        - <a href="/docs/i18n" style={linkStyle}>i18n Documentation</a>
                    </p>

                    <p className="mb-4">
                        2. LanguageSelector Page:
                        - <a href="/docs/LanguageSelector" style={linkStyle}>LanguageSelector Documentation</a>
                    </p>

                    <h2 className="pb-2">Upload Page</h2>

                    <p className="mb-4">
                        1. Location Form Component:
                        - <a href="/docs/Add Location Form Component" style={linkStyle}>Location Form Component Documentation</a>
                    </p>
                    
                    <p className="mb-4">
                        2. Upload Component:
                        - <a href="/docs/Upload Component" style={linkStyle}>Upload Component Documentation</a>
                    </p>
                    
                    <p className="mb-4">
                        3. Upload Page:
                        - <a href="/docs/Upload Page" style={linkStyle}>Upload Page Documentation</a>
                    </p>

                    {/* Add more links if needed */}
                </div>
            </div>
        </div>
    );
}
