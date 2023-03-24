import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { NOT_FOUND } from 'API/constants/page-names';
import { FullWidthContainer } from 'Components';
import { NotFoundContainer } from 'Containers/not-found/not-found.container';

const NotFound: FunctionComponent<Page> = ({ className: parentClasses }) => {
  // render
  return (
    <FullWidthContainer
      childClasses="flex items-center justify-center h-full text-center"
      className={classnames(
        'pb-5 bg-center bg-no-repeat relative z-1',
        parentClasses
      )}
      id={NOT_FOUND}
    >
      <NotFoundContainer />
    </FullWidthContainer>
  );
};

export default NotFound;
