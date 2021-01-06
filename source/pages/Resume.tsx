import React from 'react';

import { RESUME } from '../../api/constants/page-names';

const ResumePage = () => {
  return (
    <div id={RESUME} className="mb-1">
      <p>{`{{@ cms.resume.title @}}`} 2</p>
    </div>
  );
};

export default ResumePage;
