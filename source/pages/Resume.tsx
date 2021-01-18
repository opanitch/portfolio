import React, { FunctionComponent, SyntheticEvent } from 'react';

// import MobileDownload from 'ASSETS/icons/cellphone-down-arrow.svg';
import Download from 'ASSETS/icons/download.svg';

// import cvHTML from 'resume/curriculum-vitae.html';
import ResumeHTML from 'resume/resume.html';

import { RESUME } from 'API/constants/page-names';

import { FullWidthContainer } from 'Components';
import FloatingMenu, {
  LinksType,
  Position,
} from 'Components/FloatingMenu/FloatingMenu';

const resumeMenu: LinksType = [
  {
    text: 'Curricula Vitae',
    url: '',
  },
  {
    icon: Download,
    text: 'Download',
    url: '',
  },
  {
    text: 'Resume',
    url: '',
  },
  {
    icon: Download,
    text: 'Download',
    url: '',
  },
];

const setiFrameHeight = (event: SyntheticEvent) => {
  const iFrame = event.currentTarget as HTMLIFrameElement;

  iFrame.style.height = `${iFrame.contentWindow?.document.body.scrollHeight}px`;
};

const ResumePage: FunctionComponent<Page> = ({
  className: parentClasses,
}: {
  className: string;
}) => {
  return (
    <FullWidthContainer id={RESUME} className={parentClasses}>
      {() => (
        <div className="relative w-full">
          <iframe
            className="w-full"
            onLoad={(event) => setiFrameHeight(event)}
            src={ResumeHTML}
          ></iframe>
        </div>
      )}
    </FullWidthContainer>
  );
};

export default ResumePage;
