import React from 'react';

import { NOT_FOUND } from '../../api/constants/page-names';

import { FullWidthContainer } from '../components';

const NotFound = () => {
  return (
    <FullWidthContainer id={NOT_FOUND} className="pb-5">
      {({ ChildContainer }) => (
        <ChildContainer>
          <p>{`{{@ cms.not-found.title @}}`} 1</p>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default NotFound;
