import React from 'react';

import { NOT_FOUND } from '../../api/constants/page-names';

const NotFound = () => {
  return (
    <div id={NOT_FOUND} className="mb-1">
      <p>{`{{@ cms.not-found.title @}}`} 1</p>
    </div>
  );
};

export default NotFound;
