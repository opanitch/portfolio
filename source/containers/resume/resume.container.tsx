import React, { FunctionComponent, SyntheticEvent } from 'react';
import ResumeHTML from 'resume/resume.html';

const setiFrameHeight = (event: SyntheticEvent): void => {
  const iFrame = event.currentTarget as HTMLIFrameElement;

  iFrame.style.height = `${iFrame.contentWindow?.document.body.scrollHeight}px`;
};

export const ResumeContainer: FunctionComponent = () => {
  // render
  return (
    <iframe
      className="w-full"
      src={ResumeHTML}
      onLoad={(event) => setiFrameHeight(event)}
    />
  );
};
