import React from 'react';

import { HOME } from '../../api/constants/page-names';

const HomePage = () => {
  return (
    <div id={HOME} className="mb-1">
      <p>{`{{@ cms.home.title @}}`} 1</p>
    </div>
  );
};

export default HomePage;
