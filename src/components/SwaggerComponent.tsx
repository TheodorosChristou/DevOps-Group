import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUIComponent: React.FC = () => {
  return <div className="bg-white"><SwaggerUI url="/swagger.json" /></div>;
};

export default SwaggerUIComponent;