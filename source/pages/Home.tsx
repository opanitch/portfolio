import React, { FunctionComponent } from 'react';

const HomePage: FunctionComponent = () => {
  return (
    <div id="homepage" className="mb-1">
      <p>{`{{@ cms.home.title @}}`}</p>
    </div>
  );
};

export default HomePage;
