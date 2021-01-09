import React, { SyntheticEvent } from 'react';

import ResumeHTML from 'resume';

import { RESUME } from 'API/constants/page-names';

import { FullWidthContainer } from 'Components';

const setResumeHeight = (event: SyntheticEvent) => {
  const iFrame = event.currentTarget as HTMLIFrameElement;

  iFrame.style.height = `${iFrame.contentWindow?.document.body.scrollHeight}px`;
};

const ResumePage = () => {
  return (
    <FullWidthContainer id={RESUME}>
      {() => (
        <iframe
          className="w-full"
          onLoad={(event) => setResumeHeight(event)}
          src={ResumeHTML}
        ></iframe>
      )}
    </FullWidthContainer>
  );
};

export default ResumePage;
