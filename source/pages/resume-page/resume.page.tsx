import classnames from 'classnames';
import React, { FunctionComponent } from 'react';
// import MobileDownload from 'ASSETS/icons/cellphone-down-arrow.svg';
// import cvHTML from 'resume/curriculum-vitae.html';
import { RESUME } from 'API/constants/page-names';
import { FullWidthContainer } from 'Components';
import { ResumeContainer } from 'Containers/resume/resume.container';

const ResumePage: FunctionComponent<Page> = ({ className: parentClasses }) => {
  // render
  return (
    <FullWidthContainer
      childClasses="relative w-full"
      className={classnames('relative z-1', parentClasses)}
      id={RESUME}
    >
      <ResumeContainer />
    </FullWidthContainer>
  );
};

export default ResumePage;
