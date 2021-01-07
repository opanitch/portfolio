import React from 'react';

import { HOME } from '../../api/constants/page-names';

const HomePage = () => {
  return (
    <div id={HOME} className="pb-5">
      <p>{`{{@ cms.home.title @}}`} 1</p>
    </div>
  );
};

export default HomePage;
