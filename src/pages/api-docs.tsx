import React from 'react';
import dynamic from 'next/dynamic';

const ApiDocsPage: React.FC = () => {

    const DynamicSwagger = dynamic(() => import("../components/SwaggerComponent"), {
        ssr: false,
      });
  return <DynamicSwagger />;
};

export default ApiDocsPage;