import React from 'react';

import ResumeHTML from '../../node_modules/resume-md/resume.html';

import { RESUME } from '../../api/constants/page-names';

import { FullWidthContainer } from '../components';

const ResumePage = () => {
  return (
    <FullWidthContainer id={RESUME}>
      {() => (
        <div>
          <p>{`{{@ cms.resume.title @}}`} 2</p>
          <iframe className="w-full h-screen" src={ResumeHTML}></iframe>
        </div>
      )}
    </FullWidthContainer>
  );
};

export default ResumePage;
